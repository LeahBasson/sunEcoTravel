import { connection as db} from '../config/index.js'

class Stories {
    fetchStories(req, res) {
        try {           //try statement is used to handle errors
            const strQry = `SELECT storyID, picture, title, typeOfStory, story, dateOfStory
            FROM Stories;
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

    addStory(req, res) {
        try {  
            const strQry = `
            INSERT INTO Stories
            SET ? ;   
            `  // or you can use this VALUES (?, ? , ?, ?)
            db.query(strQry, [req.body], (err) =>{
                if(err) throw new Error ('Unable to add a new review')
                    res.json({
                        status: res.statusCode,
                        msg: 'Review was added'
                    })
        })
        
        } catch(e) {
            res.json({
                status: 400, // Mistake on the clients side (Maybe syntax error)
                err: e.message //The error message from the if statement
        })
        }
    }

}

export {
 Stories
 }