import { connection as db } from '../config/index.js';

class Orders {
    fetchOrders(req, res) {
        const strQry = `
            SELECT b.bookingID, b.hotelID, b.userID, b.numberOfRooms, b.checkInDate, b.checkOutDate, b.totalPrice, u.username
            FROM Bookings b
            LEFT JOIN Users u ON b.userID = u.userID
            LEFT JOIN Hotels h ON b.hotelID = h.hotel_id
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
                results // creates a key and assigns a value to it
            });
        });
    }
}

export {
    Orders
};
