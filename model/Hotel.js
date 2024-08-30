import { connection as db} from '../config/index.js'

class Hotels {
    fetchHotels(req, res) {
        try {           //try statement is used to handle errors
            const strQry = `SELECT hotelID, hotelName, hotelDescription, hotelAdd, country, city, imgUrl, amenities, contactInfo, amount
            FROM Hotels;
            `
    
            db.query(strQry, (err, results) => {
                if (err) throw new Error(err)
                res.json({
                    status: res.statusCode,
                    results //creates a key and assigns a value to it 
                })
            })
        }
         catch(e){
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    recentHotels(req, res) {
        try{
            const strQry = `
            SELECT hotelID, hotelName, hotelDescription, hotelAdd, country, city, imgUrl, amenities, contactInfo, amount
            FROM Hotels
            ORDER BY hotelID DESC
            LIMIT 4; 
            `

            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent hotels')
                res.json({
                    status: res.statusCode,
                    results
            })
            })
        } catch(e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }

    fetchHotel(req, res) {
            try{
                const stryQry = `
                SELECT hotelID, hotelName, hotelDescription, hotelAdd, country, city, imgUrl, amenities, contactInfo, amount
                FROM Hotels 
                WHERE hotelID = ${req.params.id};`
                db.query(stryQry, (err, result) => {
                    if (err) throw new Error('Issue when retrieving hotel.')
                        res.json({
                       status: res.statusCode,
                       result: result[0]  //result for a single product 
                    })
                })
            } catch (e) {
                res.json({
                    status: 404,
                    err:e.message
                })
            }
    }

    addHotel(req, res) {
        try {  
            const strQry = `
            INSERT INTO Hotels
            SET ? ;   
            `  // or you can use this VALUES (?, ? , ?, ?)
            db.query(strQry, [req.body], (err) =>{
                if(err) throw new Error ('Unable to add a new hotel')
                    res.json({
                        status: res.statusCode,
                        msg: 'Hotel was added'
                    })
        })
        
        } catch(e) {
            res.json({
                status: 400, // Mistake on the clients side (Maybe syntax error)
                err: e.message //The error message from the if statement
        })
        }
    }
    
    updateHotel(req, res) {
        try {
            const strQry = `
            UPDATE Hotels
            SET ?
            WHERE hotelID = ${req.params.id}
            `  
            db.query (strQry, [req.body], (err) => {
                if (err) throw new Error ('Unable to update a hotel')
                    res.json({
                        status: res.statusCode,
                        msg: 'Hotel was updated.'
                })
            })
        } catch(e) {
            res.json({
                status: 400,
                err: e.message //The error message from the if statement
        })
        }
    }

    deleteHotel(req, res) {
        try{
            const strQry = `
            DELETE FROM Hotels
            WHERE hotelID = ${req.params.id};
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a hotel, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'A hotel was removed.'
                })
            })
        } catch(e) {
            res.json({
                status: 404, //Resource not found
                err: e.message
            })
        }
    }
 }

 export {
    Hotels
 }