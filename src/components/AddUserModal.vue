<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addUserModalLabel">Add New User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="addUserForm" name="addUserForm">
                  <div class="mb-3">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" pattern="[A-Za-z ]+" placeholder="Enter user first name" v-model="firstName">
                  </div>
                  <div class="mb-3">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" pattern="[A-Za-z ]+" placeholder="Enter user last name" v-model="lastName">
                  </div>
                  <div class="mb-3">
                    <label for="userAge" class="form-label">User Age</label>
                    <input type="number" class="form-control" id="userAge" placeholder="Enter user age" v-model="userAge">
                  </div>
                  <div class="mb-3">
                    <label for="Gender" class="form-label">Gender</label>
                    <input type="text" class="form-control" id="Gender" placeholder="Enter user gender" v-model="Gender">
                  </div>
                  <div class="mb-3">
                    <label for="userRole" class="form-label">User role</label>
                    <input type="text" class="form-control" id="userRole" placeholder="Enter user role" v-model="userRole">
                  </div>
                  <div class="mb-3">
                    <label for="emailAdd" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="emailAdd" placeholder="Enter user role" v-model="emailAdd" required>
                  </div>
                  <div class="mb-3">
                    <label for="userPass" class="form-label">User password</label>
                    <input type="password" class="form-control" id="userPass" placeholder="Enter user password" v-model="userPass">
                  </div>
                  <div class="mb-3">
                    <label for="userProfile" class="form-label">User profile</label>
                    <input type="text" class="form-control" id="userProfile" placeholder="Enter user profile" v-model="userProfile">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="addUser">Save changes</button>
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

const firstName = ref('');
const lastName = ref('');
const userAge = ref('');
const Gender = ref('');
const userRole = ref('');
const emailAdd = ref('');
const userPass = ref('');
const userProfile = ref('');

function addUser() {
  // Regular expression to check if the name contains only letters and spaces
  const namePattern = /^[A-Za-z\s]+$/;

  // Validate that the names are not empty and contain only letters
  if (!firstName.value || !namePattern.test(firstName.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "First name must contain only letters",
      confirmButtonColor: '#FF9A00'
    });
    return;
  }

  if (!lastName.value || !namePattern.test(lastName.value)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Last name must contain only letters",
      confirmButtonColor: '#FF9A00',
    });
    return;
  }

  // Check if the email contains "@gmail.com"
  if (!emailAdd.value.includes('@gmail.com')) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid Gmail address ending with '@gmail.com'.",
      confirmButtonColor: '#FF9A00',
    });
    return;
  }

  // Check if other fields are filled
  if (!userAge.value || !Gender.value || !userPass.value || !userProfile.value) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all the fields",
      confirmButtonColor: '#FF9A00',
    });
    return;
  }

  // Create user object
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    userAge: userAge.value,
    Gender: Gender.value,
    userRole: userRole.value,
    emailAdd: emailAdd.value,
    userPass: userPass.value,
    userProfile: userProfile.value
  };

  // Dispatch action to add user
  store.dispatch('addUser', user).then(() => {
    // Clear form fields
    firstName.value = '';
    lastName.value = '';
    userAge.value = '';
    Gender.value = '';
    userRole.value = '';
    emailAdd.value = '';
    userPass.value = '';
    userProfile.value = '';

    // Hide the modal programmatically
    const modalElement = document.getElementById('addUserModal');
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
  