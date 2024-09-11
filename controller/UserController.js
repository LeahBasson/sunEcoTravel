import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { bookings } from '../model/index.js'

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})

userRouter.get ('/:id', (req, res) => {
    users.fetchUser(req, res)
})

userRouter.post('/register', (req, res) => {
    users.registerUser(req, res)
})

userRouter.patch('/:id', (req, res) => {
    users.updateUser(req, res)
})

userRouter.delete('/:id', (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => {
    users.login(req, res)
})

// Booking
userRouter.get('/:uid/bookings', (req, res) => {
    bookings.fetchBookings(req, res)
})

userRouter.get('/:uid/booking', (req, res) => {
    bookings.fetchUserBookings(req, res)
})

userRouter.post('/:uid/booking', (req, res) => {
    bookings.addBooking(req, res)
})

userRouter.patch('/:uid/booking/:bookingID', (req, res) => {
    bookings.updateBooking(req, res)
})

userRouter.delete('/:uid/booking/:bookingID', (req, res) => {
    bookings.deleteBooking(req, res)
})

userRouter.delete('/:uid/bookings', (req, res) => {
    bookings.deleteBookings(req, res)
})

export {
    express,
    userRouter
}