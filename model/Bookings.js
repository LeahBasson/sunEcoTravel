import { connection as db } from '../config/index.js';

class Bookings {
    fetchBookings(req, res) {
        const strQry = `
        SELECT b.bookingID, b.hotelID, b.userID, b.numberOfRooms, b.checkInDate, b.checkOutDate, b.amount
        FROM Users u
        INNER JOIN Bookings b
        USING(userID)
        INNER JOIN Hotels h 
        USING(hotelID)
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

    fetchUserBookings(req, res) {
        const strQry = `
            SELECT b.bookingID, b.hotelID, b.userID, b.numberOfRooms, b.checkInDate, b.checkOutDate, b.amount
            FROM Bookings b
            INNER JOIN Users u ON b.userID = ${req.params.uid}
            INNER JOIN Hotels h ON b.hotelID = h.hotelID
            WHERE u.userID = ${req.params.uid};
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
            WHERE userID = ${req.params.uid} AND bookingID = ${req.params.bookingID};
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
            WHERE userID = ${req.params.uid} AND bookingID = ${req.params.bookingID};
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
            DELETE FROM Bookings
            WHERE userID = ${req.params.uid};
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
