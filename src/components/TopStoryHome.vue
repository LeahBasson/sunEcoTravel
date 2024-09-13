<template>
    <div class="container" id="ourStoryHome" data-aos="fade-up"  data-aos-duration="4000">
        <div class="row">
            <h2>Top Stories</h2>
            
            <div class="storyCards" v-if="stories">
                <Card v-for="story in stories.slice(0, 4)" :key="story.storyID" class="card">
            <template #cardHeader>
              <img :src="story.picture" loading="lazy" class="img-fluid" :alt="story.title">
            </template>
            <template #cardBody>
              <h5 class="card-title">{{ story.title }}</h5>
              <p>{{ story.typeOfStory }}</p>
              <p>{{ story.story.length > 80 ? story.story.slice(0, 80) + '...' : story.story }}</p>
            </template>
          </Card>
            </div>
            <div v-else>
          <Spinner />
        </div>

        </div>
        <div class="row justify-content-center pt-4">
            <router-link to="/topStory">
                <button class="btn-ReadMore">Read More</button>
            </router-link>   
        </div>
    </div>
</template>

<script setup>
import AOS from 'aos';
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
const store = useStore()
const stories = computed(
    () => store.state.stories
)
onMounted(() => {
    store.dispatch('fetchStories'),
    AOS.init();
}) 
</script>

<style scoped>
#ourStoryHome{
    padding-top: 9rem;
}

#ourStoryHome h2{
    font-family: "Raleway", sans-serif;
    font-weight: 600;
}

img[alt="cardImage"] {
    width: 100%;
    height: 11rem;
}

.storyCards{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
}

#ourStoryHome .card{
    width: 18rem;
   text-align: left;
   border: 1px solid var(--borderColor);
   border-radius: 0.3rem;
   font-family: "Poppins",sans-serif;
   color: var(--primary);
}

.btn-ReadMore{
    background-color: var(--alternative);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.3rem;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    width: 10rem;
}

.btn-ReadMore:hover{
  background-color: var(--awesome);
}

@media (width < 999px)
{
    #ourStoryHome{
    padding-top: 5rem;
    }

    .storyCards{
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    
}

#ourStoryHome .card{
    width: 16rem;
   text-align: center;
   margin: auto;
}
}

</style>