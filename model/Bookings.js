import { connection as db } from '../config/index.js';

class Bookings {
    fetchBookings(req, res) {
        const strQry = `
            SELECT b.bookingID, b.hotelID, b.roomID, b.userID, b.numberOfRooms, b.checkInDate, b.checkOutDate, b.totalPrice
            FROM Bookings b
            INNER JOIN Users u ON b.userID = u.userID
            INNER JOIN Hotels h ON b.hotelID = h.hotelID
        `;

        db.query(strQry, (err, results) => {
            if (err) {
                return res.status(500).json({
                    status: 500,
                    error: err.message
                });
            }
            res.json({
                status: 200,
                results 
            });
        });
    }

    fetchBooking(req, res) {
        try{
            const stryQry = `
            SELECT b.bookingID, b.hotelID, b.roomID, b.userID, b.numberOfRooms, b.checkInDate, b.checkOutDate, b.totalPrice
            FROM Bookings b
            INNER JOIN Users u ON b.userID = ${req.params.uid}
            INNER JOIN Hotels h ON b.hotelID = h.hotelID
            WHERE u.userID = ${req.params.uid} AND b.bookingID = ${req.params.bookingID};`
            db.query(stryQry, (err, result) => {
                if (err) throw new Error(err.message)
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

    addBooking(req, res) {
        try {  
            const strQry = `
            INSERT INTO Bookings
            SET ? ;   
            `  // or you can use this VALUES (?, ? , ?, ?)
            db.query(strQry, [req.body], (err) =>{
                if(err) throw new Error ('Unable to add a new booking.')
                    res.json({
                        status: res.statusCode,
                        msg: 'Booking was added'
                    })
        })
        
        } catch(e) {
            res.json({
                status: 400, // Mistake on the clients side (Maybe syntax error)
                err: e.message //The error message from the if statement
        })
        }
    }

    updateBooking(req, res) {
        try {
            const strQry = `
            UPDATE Bookings
            SET ?
            WHERE userID = ${req.params.id} AND bookingID = ${req.params.id};
            `  
            db.query (strQry, [req.body], (err) => {
                if (err) throw new Error ('Unable to update a booking.')
                    res.json({
                        status: res.statusCode,
                        msg: 'Booking was updated.'
                })
            })
        } catch(e) {
            res.json({
                status: 400,
                err: e.message //The error message from the if statement
        })
        }
    }

    deleteBooking(req, res) {
        try{
            const strQry = `
            DELETE FROM Bookings
            WHERE bookingID = ${req.params.id} AND userID =  ${req.params.id};
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a booking, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'A booking was removed.'
                })
            })
        } catch(e) {
            res.json({
                status: 404, //Resource not found
                err: e.message
            })
        }
    }

    deleteBookings(req, res) {
        try{
            const strQry = `
            DELETE FROM Bookings;
            `
            db.query (strQry, (err) => {
                if(err) throw new Error('To delete a bookings, please review your delete query.')
                    res.json({
                        status: res.statusCode,
                        msg: 'All bookings were removed.'
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
    Bookings
};
