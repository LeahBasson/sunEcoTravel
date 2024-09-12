<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Modal -->
      <div class="modal fade" :id="'updateHotelModal' + hotel.hotelID" tabindex="-1" aria-labelledby="updateHotelModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="updateModalLabel">Update Hotel</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="updateHotelForm" name="updateHotelForm">
                <div class="mb-3">
                  <label for="hotelName" class="form-label">Hotel Name</label>
                  <input type="text" class="form-control" id="hotelName" v-model="hotelName">
                </div>
                <div class="mb-3">
                  <label for="hotelDescription" class="form-label">Hotel Description</label>
                  <textarea type="text" class="form-control" id="hotelDescription"  v-model="hotelDescription"></textarea>
                </div>
                <div class="mb-3">
                  <label for="hotelAdd" class="form-label">Hotel Address</label>
                  <textarea type="text" class="form-control" id="hotelAdd"  v-model="hotelAdd"></textarea>
                </div>
                <div class="mb-3">
                  <label for="country" class="form-label">Hotel Country</label>
                  <input type="text" class="form-control" id="country"  v-model="country">
                </div>
                <div class="mb-3">
                  <label for="city" class="form-label">Hotel City</label>
                  <input type="text" class="form-control" id="city"  v-model="city">
                </div>
                <div class="mb-3">
                  <label for="imgUrl" class="form-label">Hotel Image Url</label>
                  <input type="text" class="form-control" id="imgUrl"  v-model="imgUrl">
                </div>
                <div class="mb-3">
                  <label for="amenities" class="form-label">Hotel Amenities</label>
                  <textarea type="text" class="form-control" id="amenities"  v-model="amenities"></textarea>
                </div>
                <div class="mb-3">
                  <label for="contactInfo" class="form-label">Hotel Contact Info</label>
                  <input type="number" class="form-control" id="contactInfo"  v-model="contactInfo">
                </div>
                <div class="mb-3">
                  <label for="amount" class="form-label">Hotel Amount</label>
                  <input type="number" class="form-control" id="amount"  v-model="amount">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
              <button type="button" class="save-button" @click="updateHotel(hotel.hotelID)">Save changes</button>
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
  name: 'UpdateHotelModal',
  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hotelName: this.hotel.hotelName,
      hotelDescription: this.hotel.hotelDescription,
      hotelAdd: this.hotel.hotelAdd,
      country: this.hotel.country,
      city: this.hotel.city,
      imgUrl: this.hotel.imgUrl,
      amenities: this.hotel.amenities,
      contactInfo: this.hotel.contactInfo,
      amount: this.hotel.amount,
    };
  },
  methods: {
    async updateHotel() {
      const payload = {
        hotelID: this.hotel.hotelID,
        hotelName: this.hotelName,
        hotelDescription: this.hotelDescription,
        hotelAdd: this.hotelAdd,
        country: this.country,
        city: this.city,
        imgUrl: this.imgUrl,
        amenities: this.amenities,
        contactInfo: this.contactInfo,
        amount: this.amount,
      };

      try {
        await this.$store.dispatch('updateHotel', payload);

        const modalElement = document.getElementById('updateHotelModal' + this.hotel.hotelID);
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
    hotel: {
      handler(newHotel) {
        this.hotelName = newHotel.hotelName;
        this.hotelDescription = newHotel.hotelDescription;
        this.hotelAdd = newHotel.hotelAdd;
        this.country = newHotel.country;
        this.city = newHotel.city;
        this.imgUrl = newHotel.imgUrl;
        this.amenities = newHotel.amenities;
        this.contactInfo = newHotel.contactInfo;
        this.amount = newHotel.amount;
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