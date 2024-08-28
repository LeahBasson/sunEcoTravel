<template>
    <div class="container" id="ourStoryHome">
        <div class="row">
            <h2>Top Stories</h2>
            
            <div class="storyCards">

            <div class="card">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/greece3.jpg" class="card-img-top" alt="cardImage">
            <div class="card-body">
                <h5 class="card-title">“athens and the greek isles”</h5>
                <p>Review of Greece</p>
                <p class="card-text">We had absolutely no problems traveling to Greece this past September...</p>
                <router-link to="topstory"><button class="btn-ReadMore">Read More</button></router-link>
            </div>
            </div>

            <div class="card">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/greece6.jpg" class="card-img-top" alt="cardImage">
            <div class="card-body">
                <h5 class="card-title">“Minos Magic - Greece trip”</h5>
                <p>Review of Greece</p>
                <p class="card-text">My husband and I have never been to Greece but we wanted to see a lot in 16...</p>
                <router-link to="topstory"><button class="btn-ReadMore">Read More</button></router-link>
            </div>
            </div>

            <div class="card">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/athens2.jpg" class="card-img-top" alt="cardImage">
            <div class="card-body">
                <h5 class="card-title">“Our first European vacation - GREECE”</h5>
                <p>Review of Greece</p>
                <p class="card-text">After an uneventful flight from Omaha to Newark to Athens...</p>
                <router-link to="topstory"><button class="btn-ReadMore">Read More</button></router-link>
            </div>
            </div>

            <div class="card">
            <img src="https://leahbasson.github.io/MyImages/sunEcoTravel/Bali3.jpg" class="card-img-top" alt="cardImage">
            <div class="card-body">
                <h5 class="card-title">Relaxing weekend - can recommend!</h5>
                <p>Review of Greece</p>
                <p class="card-text">Just a short but great weekend trip jenough to relax and...</p>
                <router-link to="topstory"><button class="btn-ReadMore">Read More</button></router-link>
            </div>
            </div>

            </div>

        </div>
        
    </div>
</template>

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
}

.btn-ReadMore{
    background-color: var(--alternative);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 0.3rem;
    color: var(--secondary);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
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