<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Modal -->
      <div class="modal fade" id="addHotelModal" tabindex="-1" aria-labelledby="addHotelModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="addHotelModalLabel">Add New Hotel</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addHotelForm" name="addHotelForm">
                <div class="mb-3">
                  <label for="hotelName" class="form-label">Hotel Name</label>
                  <input type="text" class="form-control" id="productName" placeholder="Enter a hotel name" v-model="hotelName">
                </div>
                <div class="mb-3">
                  <label for="hotelDescription" class="form-label">Hotel Description</label>
                  <textarea type="text" class="form-control" id="hotelDescription" placeholder="Enter hotel description" v-model="hotelDescription"></textarea>
                </div>
                <div class="mb-3">
                  <label for="hotelAdd" class="form-label">Hotel Address</label>
                  <textarea type="number" class="form-control" id="hotelAdd" placeholder="Enter hotel address" v-model="hotelAdd"></textarea>
                </div>
                <div class="mb-3">
                  <label for="country" class="form-label">Hotel Country</label>
                  <input type="text" class="form-control" id="country" placeholder="Enter the hotel country" v-model="country">
                </div>
                <div class="mb-3">
                  <label for="city" class="form-label">Hotel City</label>
                  <input type="text" class="form-control" id="city" placeholder="Enter the hotel city" v-model="city">
                </div>
                <div class="mb-3">
                  <label for="hotelImg" class="form-label">Hotel Image Url</label>
                  <input type="text" class="form-control" id="hotelImg" placeholder="Enter the hotel image" v-model="imgUrl">
                </div>
                <div class="mb-3">
                  <label for="amenities" class="form-label">Hotel amenities</label>
                  <textarea type="text" class="form-control" id="amenities" placeholder="Enter the hotel amenities" v-model="amenities"></textarea>
                </div>
                <div class="mb-3">
                  <label for="contactInfo" class="form-label">Hotel contact info</label>
                  <input type="number" class="form-control" id="contactInfo" placeholder="Enter the hotel contact info" v-model="contactInfo">
                </div>
                <div class="mb-3">
                  <label for="hotelAmount" class="form-label">Hotel amount</label>
                  <input type="number" class="form-control" id="hotelAmount" placeholder="Enter the hotel amount" v-model="amount">
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
              <button type="button" class="save-button" @click="addHotel">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

const store = useStore();

const hotelName = ref('');
const hotelDescription = ref('');
const hotelAdd = ref('');
const country = ref('');
const city = ref('');
const imgUrl = ref('');
const amenities = ref('');
const contactInfo = ref('');
const amount = ref('');

function addHotel() {
  if (!hotelName.value || !hotelDescription.value || !hotelAdd.value || !country.value || !city.value || !imgUrl.value || !amenities.value || !contactInfo.value || !amount.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all the fields",
      confirmButtonColor: '#FF9A00'
    });
    return;
  }

  const hotel = {
    hotelName: hotelName.value,
    hotelDescription: hotelDescription.value,
    hotelAdd: hotelAdd.value,
    country: country.value,
    city: city.value,
    imgUrl: imgUrl.value,
    amenities: amenities.value,
    contactInfo: contactInfo.value,
    amount: parseFloat(amount.value),
  };

  store.dispatch('addHotel', hotel).then(() => {
    // Clear form fields
    hotelName.value = '';
    hotelDescription.value = '';
    hotelAdd.value = '';
    country.value = '';
    city.value = '';
    imgUrl.value = '';
    amenities.value = '';
    contactInfo.value = '';
    amount.value = '';

    // Hide the modal programmatically
    const modalElement = document.getElementById('addHotelModal');
    const modalInstance = Modal.getInstance(modalElement);
    modalInstance.hide();

    // Remove modal-open class to restore scroll
    document.body.classList.remove('modal-open');
  });
}
</script>


<style scoped>
.close-button{
 background-color: var(--alternative);
 border: none;
 border-radius: 0.5rem;
 width: 10rem;
 padding: 0.5rem;
 font-family: "Poppins", sans-serif;
 font-weight: 600;
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
 font-weight: 600;
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
