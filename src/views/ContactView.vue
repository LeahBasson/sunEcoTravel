<template>
    <div class="container">
      <div class="row" id="AdventureRoulette">
        <div class="banner-overlay"></div>
        <div class="banner-image">
          <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Contact Us</h1>
            <button class="scroll-btn animate__animated animate__fadeInUp">↓</button>
          </div> 
        </div>
      </div>

    </div>
  </template>
  
  <style scoped>
  #AdventureRoulette{
    position: relative;
    z-index: 1;
  }
  
  .banner-image{
      background-image: url("https://leahbasson.github.io/MyImages/sunEcoTravel/maldivesBanner.jpg");
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
      background-color:rgba(30, 35, 40, 0.4); 
      z-index: 1;
  }
  
  .banner-content{
    position: relative;
    z-index: 2;
    width: 44rem;
    margin: 16rem auto 16rem;
    color: var(--secondary);
    font-family: "Raleway", sans-serif;
  }
  
  .banner-content h1 {
      font-weight: 700;
      z-index: 2;
  } 
  
  .banner-content p{
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
  
  #gallery-heading{
    font-family: "Poppins",sans-serif;
    color: var(--primary);
  }

  @media (width < 999px)
{
  img[alt="banner-img"]{
    width: 80%;
  }

  .scroll-btn {
    display: none;
  }

  .banner-content{
    width: 100%;
    font-size: 0.8rem;
    margin: 6rem auto 6rem;
  }
}
 
  </style>
  