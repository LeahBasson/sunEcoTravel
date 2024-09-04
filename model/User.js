import { connection as db} from '../config/index.js'
import {createToken} from '../middleware/AuthenticateUser.js'
import {compare, hash} from 'bcrypt'

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `SELECT userID, firstName, lastName, userAge , Gender, userRole , emailAdd , userPass , userProfile 
            FROM Users;`
    
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        }
         catch(e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    fetchUser(req, res) {
            try{
                const stryQry = `
                SELECT userID, firstName, lastName, userAge , Gender, userRole , emailAdd , userPass , userProfile
                FROM Users WHERE userID = ${req.params.id};`
                db.query(stryQry, (err, result) => {
                    if(err) throw new Error('Issue when retrieving a user.')
                        res.json({
                       status: res.statusCode,
                       result: result[0]
                    })
                })
            } catch (e) {
                res.json({
                    status: 404,
                    msg:e.message
                })
            }
    }

    async registerUser(req, res) {
        try {
            let data = req.body;
            
            // Check if the email already exists
            let emailCheckQry = 'SELECT * FROM Users WHERE emailAdd = ?';
            db.query(emailCheckQry, [data.emailAdd], async (err, results) => {
                if (err) {
                    return res.json({
                        status: 500,
                        msg: 'Internal Server Error'
                    });
                }
    
                if (results.length > 0) {
                    // Email already exists
                    return res.json({
                        status: 400,
                        err: 'This email has already been taken'
                    });
                }
    
                // If email doesn't exist, proceed with registration
                data.userPass = await hash(data.userPass, 12);
    
                let strQry = `
                    INSERT INTO Users
                    SET ?;
                `;
                db.query(strQry, [data], (err) => {
                    if (err) {
                        res.json({
                            status: res.statusCode,
                            msg: 'There was an error registering the user'
                        });
                    } else {
                        const token = createToken({
                            emailAdd: data.emailAdd,
                            userPass: data.userPass
                        });
                        res.json({
                            token,
                            msg: 'You are now registered'
                        });
                    }
                });
            });
        } catch (e) {
            res.json({
                status: 400,
                msg: e.message
            });
        }
    }
    
    
    async updateUser(req, res) {
        try {
            let data = req.body
            if (data.pwd) {
                data.pwd = await hash (data.pwd, 12)
            }
            const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ${req.params.id}
            `  
            db.query (strQry, [data], (err) => {
                if (err) throw new Error ('Unable to update a user')
                    res.json({
                        status: res.statusCode,
                        msg: 'The user record was updated.'
                })
            })
        } catch(e) {
            res.json({
                status: 400,
                msg: e.message //The error message from the if statement
        })
        }
    }

    deleteUser(req, res) {
        try{
            const strQry = `
            DELETE FROM Users
            WHERE userID = ${req.params.id};
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a user, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'A user\'s information was removed'
                })
            })
        } catch(e) {
            res.json({
                status: 404, //Resource not found
                msg: e.message
            })
        }
    }

    async login(req, res) {
        try{
            const { emailAdd, userPass } = req.body
            const strQry = `
            SELECT userID, firstName, lastName, userAge , Gender, userRole , emailAdd , userPass , userProfile
            FROM Users
            WHERE emailAdd = '${emailAdd}';
            `
            db.query(strQry, async (err, result) => {
                if(err) throw new Error ('To login, please review your query.')
                if (!result?.length){
                    res.json(
                    {
                        status: 401, // Unauthorized user
                        msg: 'You provided a wrong email.'
                    }
                )
                } else{
                    const isValidPass = await compare
                    (userPass, result[0].userPass)
                    if (isValidPass) {
                        const token = createToken({
                            emailAdd, 
                            userPass
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'This email already exists'
                        })
                    }
                }
            } )
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
 }

 export {
    Users
 }