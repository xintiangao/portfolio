<script>
    import Navbar from "../navbar.svelte";
    import { onMount } from 'svelte';
    import image1 from './grandCanyon.jpg';
    import image2 from './lake.jpeg';
  
    let backgroundImage = image1;
  
    function handleScroll() {
      if (window.pageYOffset >= window.innerHeight) {
        backgroundImage = image2;
      } else {
        backgroundImage = image1;
      }
    }
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
    });
  </script>
  
  <style>

    .background-images {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-repeat: no-repeat;
      background-size: cover;
      transition: background-image 0.3s ease-in-out;
    }
  
    .section1 {
      position: relative;
      top: 800px;
      width: 100%;
      height: 10000px;
    }
  
    .section2 {
      position: relative;
      background: url(.lake.jpeg);
      z-index: 1;
      margin-top: 800px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      height: 800px;
    }
  
    .section3 {
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      height: 500px;
    }
  </style>
  
  <div class="background-images" style="background-image: url({backgroundImage})"></div>
  
  <div id="section1" class="section1" data-theme="'retro' ? 'dracula' : 'retro'" ></div>

  <div class="section2 section-space-padding bg-cover text-center" data-theme="'retro' ? 'dracula' : 'retro'"  data-stellar-background-ratio="0.3"></div>
  
  <div data-theme="'retro' ? 'dracula' : 'retro'" class="section3"></div>
  
  <Navbar />
  