import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { bookings } from '../model/Bookings.js'
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const userRouter = express.Router()
const bookingRouter = express.Router()

userRouter.use(bodyParser.json())
bookingRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})

userRouter.get ('/:id', verifyAToken, (req, res) => {
    users.fetchUser(req, res)
})

userRouter.post('/register', (req, res) => {
    users.registerUser(req, res)
})

userRouter.patch('/:id', verifyAToken, (req, res) => {
    users.updateUser(req, res)
})

userRouter.delete('/:id', verifyAToken, (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => {
    users.login(req, res)
})
// Booking
bookingRouter.get('/:uid', verifyAToken, (req, res) => {
    bookings.fetchBookings(req, res)
})

bookingRouter.get ('/:id/:bookingID', verifyAToken, (req, res) => {
    bookings.fetchBooking(req, res)
})

bookingRouter.post('/:id', (req, res) => {
    bookings.addBooking(req, res)
})

bookingRouter.patch('/:id/:bookingID', verifyAToken, (req, res) => {
    bookings.updateBooking(req, res)
})

bookingRouter.delete('/:id/:bookingID', verifyAToken, (req, res) => {
    users.deleteBooking(req, res)
})

bookingRouter.delete('/:id', verifyAToken, (req, res) => {
    users.deleteBookings(req, res)
})

export {
    express,
    userRouter,
    bookingRouter
}