<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" :id="'updateUserModal' + user.userID" tabindex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="updateUserLabel">Update User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="updateUserForm" name="updateUserForm">
                  <div class="mb-3">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" pattern="[A-Za-z ]+" v-model="firstName">
                  </div>
                  <div class="mb-3">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" pattern="[A-Za-z ]+" v-model="lastName">
                  </div>
                  <div class="mb-3">
                    <label for="userAge" class="form-label">User Age</label>
                    <input type="number" class="form-control" id="userAge"  v-model="userAge">
                  </div>
                  <div class="mb-3">
                    <label for="Gender" class="form-label">Gender</label>
                    <input type="text" class="form-control" id="Gender"  v-model="Gender">
                  </div>
                  <div class="mb-3">
                    <label for="userRole" class="form-label">User role</label>
                    <input type="text" class="form-control" id="userRole"  v-model="userRole">
                  </div>
                  <div class="mb-3">
                    <label for="emailAdd" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="emailAdd"  v-model="emailAdd" required>
                  </div>
                  <div class="mb-3">
                    <label for="userPass" class="form-label">User password</label>
                    <input type="password" class="form-control" id="userPass"  v-model="userPass">
                  </div>
                  <div class="mb-3">
                    <label for="userProfile" class="form-label">User profile</label>
                    <input type="text" class="form-control" id="userProfile" v-model="userProfile">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="updateUser(user.userID)">Save changes</button>
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
    name: 'UpdateUserModal',
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        userAge: this.user.userAge,
        Gender: this.user.Gender,
        userRole: this.user.userRole,
        emailAdd: this.user.emailAdd,
        userPass: this.user.userPass,
        userProfile: this.user.userProfile
      };
    },
    methods: {
      async updateUser() {
        const payload = {
          userID: this.user.userID,
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          Gender: this.Gender,
          userRole: this.userRole,
          emailAdd: this.emailAdd,
          userPass: this.userPass,
          userProfile: this.userProfile
        };
  
        try {
          await this.$store.dispatch('updateUser', payload);
  
          const modalElement = document.getElementById('updateUserModal' + this.user.userID);
          const modal = Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
        } catch (error) {
          console.error("Error updating user:", error);
        }
      }
    },
    watch: {
      user: {
        handler(newUser) {
          this.firstName = newUser.firstName;
          this.lastName = newUser.lastName;
          this.userAge = newUser.userAge;
          this.Gender = newUser.Gender;
          this.userRole = newUser.userRole;
          this.emailAdd = newUser.emailAdd;
          this.userPass = newUser.userPass;
          this.userProfile = newUser.userProfile
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