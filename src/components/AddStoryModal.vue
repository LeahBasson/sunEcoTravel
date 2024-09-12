<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="addStoryModal" tabindex="-1" aria-labelledby="addStoryModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addStoryModalLabel">Add Story</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="addStoryForm" name="addStoryForm">
                  <div class="mb-3">
                    <label for="picture" class="form-label">Story Image</label>
                    <input type="text" class="form-control" id="picture" placeholder="Enter an image" v-model="picture">
                  </div>
                  <div class="mb-3">
                    <label for="title" class="form-label">Story Title</label>
                    <textarea type="text" class="form-control" id="title" placeholder="Enter story title" v-model="title"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="typeOfStory" class="form-label">Type of Review</label>
                    <textarea type="text" class="form-control" id="typeOfStory" placeholder="e.g. Review of paris" v-model="typeOfStory"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="review" class="form-label">Review</label>
                    <textarea type="text" class="form-control" id="review" placeholder="Enter your review" v-model="story"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="dateOfStory" class="form-label">Date</label>
                    <input type="text" class="form-control" id="dateOfStory" placeholder="e.g. Reviewed December 15, 2012" v-model="dateOfStory">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="addStory">Save changes</button>
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
  
  const picture = ref('');
  const title = ref('');
  const typeOfStory = ref('');
  const story = ref('');
  const dateOfStory = ref('');
  
  function addStory() {
    if (!picture.value || !title.value || !typeOfStory.value || !story.value || !dateOfStory.value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the fields",
        confirmButtonColor: '#FF9A00'
      });
      return;
    }
  
    const review = {
    picture: picture.value,
    title: title.value,
    typeOfStory: typeOfStory.value,
    story: story.value,
    dateOfStory: dateOfStory.value
    };
  
    store.dispatch('addStory', review).then(() => {
      // Clear form fields
      picture.value = '';
      title.value = '';
      typeOfStory.value = '';
      story.value = '';
      dateOfStory.value = '';
  
      // Hide the modal programmatically
      const modalElement = document.getElementById('addStoryModal');
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
  