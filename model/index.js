import { Users } from "./User.js";
import { Hotels } from "./Hotel.js";
import { Bookings } from "./Bookings.js";

//creating an object
const users = new Users() 
const hotels = new Hotels()
const bookings = new Bookings()
export {
    users,
    hotels,
    bookings
}