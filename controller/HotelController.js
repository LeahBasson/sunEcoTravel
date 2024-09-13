import express from 'express'
import bodyParser from 'body-parser'
import { hotels } from '../model/index.js'  //importing the object that will be used.
import { verifyAToken } from '../middleware/AuthenticateUser.js'

const hotelRouter = express.Router()

hotelRouter.use(bodyParser.json()) //to not call bodyParser on each and every endpoint, register once using 'router.use' // the body parser is used to pass the body as json. when you sending data from the database you need to have a pipeline body parser is that pipeline // when the user sends a request you need to have a body parser.

hotelRouter.get('/', (req, res) => {   //a middleware which is verifyAToken is placed between an endpoint and a callback function
    hotels.fetchHotels(req, res) 
})

hotelRouter.get('/recent', (req, res) => {  
    hotels.recentHotels(req, res) 
})

hotelRouter.get ('/:id', (req, res) => {
    hotels.fetchHotel(req, res)
})

hotelRouter.post('/add', verifyAToken, (req, res) => {
    hotels.addHotel(req, res)
})

hotelRouter.patch('/:id', verifyAToken, (req, res) => {
    hotels.updateHotel(req, res)
})

hotelRouter.delete('/:id', verifyAToken, (req, res) => { 
    hotels.deleteHotel(req, res)
})

export {
    express,
    hotelRouter
}