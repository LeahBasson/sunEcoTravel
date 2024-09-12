<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" :id="'updateBookingModal' + booking.bookingID" tabindex="-1" aria-labelledby="updateBookingModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="updateBookingLabel">Update Booking</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="updateBookingForm" name="updateBookingForm">
                  <div class="mb-3">
                    <label for="bookingID" class="form-label">Booking ID</label>
                    <input type="number" class="form-control" id="bookingID"  v-model="bookingID">
                  </div>
                  <div class="mb-3">
                    <label for="hotelID" class="form-label">Hotel ID</label>
                    <input type="number" class="form-control" id="hotelID"  v-model="hotelID">
                  </div>
                  <div class="mb-3">
                    <label for="roomID" class="form-label">Room ID</label>
                    <input type="number" class="form-control" id="roomID" v-model="roomID">
                  </div>
                  <div class="mb-3">
                    <label for="userID" class="form-label">User ID</label>
                    <input type="number" class="form-control" id="userID" v-model="userID">
                  </div>
                  <div class="mb-3">
                    <label for="numberOfRooms" class="form-label">Number of rooms</label>
                    <input type="number" class="form-control" id="numberOfRooms"  v-model="numberOfRooms">
                  </div>
                  <div class="mb-3">
                    <label for="checkInDate" class="form-label">Check in date</label>
                    <input type="datetime" class="form-control" id="checkInDate"  v-model="checkInDate">
                  </div>
                  <div class="mb-3">
                    <label for="checkOutDDate" class="form-label">Check out date</label>
                    <input type="datetime" class="form-control" id="checkOutDDate"  v-model="checkOutDate">
                  </div>
                  <div class="mb-3">
                    <label for="amount" class="form-label">Amount</label>
                    <input type="number" class="form-control" id="amount"  v-model="amount">
                  </div>
                  <div class="mb-3">
                    <label for="totalPrice" class="form-label">Total Price</label>
                    <input type="number" class="form-control" id="totalPrice"  v-model="totalPrice">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="updateBooking(booking.bookingID)">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Modal } from 'bootstrap';
  
  export default {
    name: 'UpdateBookingModal',
    props: {
      booking: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        bookingID: this.booking.bookingID,
        hotelID: this.booking.hotelID,
        roomID: this.booking.roomID,
        userID: this.booking.userID,
        numberOfRooms: this.booking.numberOfRooms,
        checkInDate: this.booking.checkInDate,
        checkOutDate: this.booking.checkOutDate,
        amount: this.booking.amount,
        total: this.booking.totalPrice
      };
    },
    methods: {
      async updateBooking() {
        const payload = {
          bookingID: this.booking.bookingID,
          hotelID: this.hotelID,
          roomID: this.roomID,
          userID: this.userID,
          numberOfRooms: this.numberOfRooms,
          checkInDate: this.checkInDate,
          checkOutDate: this.checkOutDate,
          amount: this.amount,
          total: this.totalPrice
        };
  
        try {
          await this.$store.dispatch('updateBooking', payload);
  
          const modalElement = document.getElementById('updateBookingModal' + this.booking.bookingID);
          const modal = Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        } catch (error) {
          console.error("Error updating hotel:", error);
        }
      }
    },
    watch: {
      booking: {
        handler(newBooking) {
          this.bookingID = newBooking.bookingID;
          this.hotelID = newBooking.hotelID;
          this.roomID = newBooking.roomID;
          this.userID = newBooking.userID;
          this.numberOfRooms = newBooking.numberOfRooms;
          this.checkInDate = newBooking.checkInDate;
          this.checkOutDate = newBooking.checkOutDate;
          this.amount = newBooking.amount;
          this.totalPrice = newBooking.totalPrice
        },
        deep: true,
        immediate: true,
      },
    },
  };
  </script>
  
  
  <style scoped>
  .close-button{
  background-color: var(--alternative);
  border: none;
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: var(--secondary);
  }
  
  .close-button:hover, .save-button:hover, .admin-button:hover{
  transition: 2s;
  background-color: var(--awesome);
  }
  
  .save-button{
  background-color: var(--alternative);
  border: none;
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: var(--secondary);
  }
  
  .form-label{
  display: flex;
  }
  
  .modal-footer{
  display: flex;
  justify-content: space-between;
  }
  
  @media (width < 999px) {
   .close-button{
     margin: auto;
     width: 100%;
   }
  
   .save-button{
     margin: auto;
     margin-top: 1rem;
     width: 100%;
   }
  
   .form-control::placeholder{
      font-size: 0.9rem;
   }
  }
  </style>