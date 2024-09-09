import { Users } from "./User.js";
import { Hotels } from "./Hotel.js";
import { Bookings } from "./Bookings.js";
import { Stories  } from "./Story.js";

//creating an object
const users = new Users() 
const hotels = new Hotels()
const bookings = new Bookings()
const stories = new Stories()
export {
    users,
    hotels,
    bookings,
    stories
}