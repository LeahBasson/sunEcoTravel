<template>
  <div class="container">
      <div class="row" id="AdventureRoulette">
      <div class="banner-overlay"></div>
      <div class="banner-image">
        <div class="banner-content">
          <h1 class="animate__animated animate__fadeInDown">Top Stories</h1>
          <p class="animate__animated animate__fadeInUp">Discover inspiring travel stories from fellow adventurers. Let their experiences guide you to your next dream destination!</p>
          <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
        </div> 
      </div>
    </div>

    <div class="row">
      <div id="storyCards" v-if="stories">
              <Card v-for="story in stories" :key="story.storyID" class="card">
          <template #cardHeader>
            <img :src="story.picture" loading="lazy" class="img-fluid" :alt="story.title">
          </template>
          <template #cardBody>
            <h5 class="card-title">{{ story.title }}</h5>
            <p>{{ story.dateOfStory }}</p>
            <p class="review">{{ story.typeOfStory }}</p>
            <p v-html="formattedStory(story.story)"></p>
          </template>
        </Card>
          </div> 
          <div v-else>
        <Spinner />
      </div>

    </div>

    <div class="row">
      <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addStoryModal">
        Add A Review
      </button>
    </div>
    <AddStoryModal />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
import AddStoryModal from '@/components/AddStoryModal.vue'

const store = useStore()
const stories = computed(
  () => store.state.stories
)

onMounted(() => {
  store.dispatch('fetchStories')
}) 

function scrollDown() {
  window.scrollTo({
    top: document.getElementById('storyCards').offsetTop,
    behavior: 'smooth'
  })
}

function formattedStory(storyText) {
const charLimit = 1209;
let formattedText = '';

for (let i = 0; i < storyText.length; i += charLimit) {
  formattedText += storyText.slice(i, i + charLimit) + '<br><br>';
}

return formattedText;
}
</script>

<style scoped>
#AdventureRoulette {
  position: relative;
  z-index: 1;
}

.banner-image {
  background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/banner8.jpg");
  background-size: cover;
  background-position: center; 
  position: relative;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 35, 40, 0.5); 
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 14rem auto 14rem;
  color: var(--secondary);
  font-family: "Raleway", sans-serif;
}

.banner-content h1 {
  font-weight: 700;
} 

.banner-content p {
  font-weight: 500;
  font-size: 1.2rem;
}

.scroll-btn {
  width: 3rem;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
  background: rgba(255, 255, 255, 0.3); 
}

.card{
  width: 60%;
  margin: auto;
  font-family: "Poppins",sans-serif;
  color: var(--primary);
  padding-top: 4rem;
}

.card p{
  font-size: 1.1rem;
}

.card img{
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: 0.8rem 0.5rem 1rem var(--borderColor);
  margin-bottom: 1.5rem;
}

.review{
  font-weight: 500;
}

.admin-button{
background-color: var(--alternative);
border: none;
border-radius: 0.5rem;
width: 14rem;
padding: 0.5rem;
font-family: "Poppins", sans-serif;
font-weight: 600;
margin: auto;
color: var(--secondary);
}

.admin-button:hover{
background-color: var(--awesome);
}

@media (width < 999px)
{
#storyCards{
  width: 100%;
}

img[alt="banner-img"]{
  width: 80%;
}

.banner-content{
position: relative;
z-index: 2;
width: 44rem;
margin: 3rem auto 3rem;
color: var(--secondary);
font-family: "Raleway", sans-serif;
}

.banner-content{
  width: 90%;
}

.banner-content h1 {
  font-size: 2.5rem;
  text-align: center;
}

.banner-content p{
  font-size: 1rem;
  text-align: center;
}

.card{
  width: 90%;
  padding-top: 2rem;
}

.card img{
  margin-bottom: 1rem;
}

.admin-button{
width: 80%;
}
}
</style>