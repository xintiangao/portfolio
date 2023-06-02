<script>
    // import { goto } from '$app/navigation';
  
  let currentTheme = "retro";

  function toggleTheme() {
  currentTheme = currentTheme === "retro" ? "dracula" : "retro";
  document.documentElement.setAttribute("data-theme", currentTheme);
  }

  function scrollToMe() {
    const meSection = document.querySelector('#buffer1');
    const bufferRect = meSection.getBoundingClientRect();

    const bufferTop = bufferRect.top + window.pageYOffset;
    const bufferHeight = bufferRect.height;

    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const offset = bufferTop - (viewportHeight / 2) + (bufferHeight / 2);

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
}

function scrollToExperience() {
    const bufferSection = document.querySelector('#buffer2');
    const bufferRect = bufferSection.getBoundingClientRect();
    const bufferTop = bufferRect.top + window.pageYOffset;

    window.scrollTo({
    top: bufferTop,
    behavior: 'smooth'
    });
}

function scrollToHobbies() {
    const bufferSection = document.querySelector('#buffer3');
    const bufferRect = bufferSection.getBoundingClientRect();
    const bufferTop = bufferRect.top + window.pageYOffset;

    window.scrollTo({
    top: bufferTop,
    behavior: 'smooth'
    });
}
// import { onMount } from 'svelte';

// function moveImageWithCursor(containerId, imageId) {
//   const container = document.getElementById(containerId);
//   const image = document.getElementById(imageId);

//   function handleMouseMove(event) {
//     const x = event.clientX;
//     const y = event.clientY;

//     const containerRect = container.getBoundingClientRect();
//     const containerCenterX = containerRect.left + containerRect.width / 2;
//     const containerCenterY = containerRect.top + containerRect.height / 2;

//     const moveX = (containerCenterX - x) / containerCenterX * 10;
//     const moveY = (containerCenterY - y) / containerCenterY * 10;

//     image.style.transform = `translate(${moveX}px, ${moveY}px)`;
//   }

//   onMount(() => {
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   });
// }

// moveImageWithCursor('up-container', 'up-image');
// moveImageWithCursor('person-container', 'person-image');

</script>

<container>
  <nav>
    <div class="name text-primary flex align-middle justify-center animate__animated animate__fadeInUp">
      <a href="/">
        <button>Xintian Gao</button>
      </a>
    </div>
  </nav>

  
  <guideContainer>
      <div class="guide text-primary flex align-middle justify-center">
          <button on:click={scrollToMe}>Who Am I?</button>
      </div>

    <div class="guide text-primary flex align-middle justify-center">
        <button on:click={scrollToExperience}>Experience</button>
    </div>

    <div class="guide text-primary flex align-middle justify-center">
        <button on:click={scrollToHobbies}>Hobbies</button>
    </div>

    <div class="guide text-primary flex align-middle justify-center">
      <a href="section4">
        <button>Contact Me</button>
      </a>
    </div>
  </guideContainer>
</container>

<nav1>
    <ul>
        <button class="text-primary w-8 flex content-start" on:click={toggleTheme}>
            {#if currentTheme === "retro"}
            <svg class="svg-icon fill-secondary svelte-1dt9l3n" viewBox="0 0 20 20">
                <path d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z" class="svelte-1dt9l3n"></path>
            </svg>
            {:else}
            <svg class="svg-icon fill-primary svelte-1dt9l3n" viewBox="0 0 20 20">
                <path d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045" class="svelte-1dt9l3n"></path>
            </svg>
            {/if}
          </button>
    </ul>
</nav1>
  


<style>
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');


  container {
    position:flex;
    flex:wrap;
    align-content:space-between;
  }

  nav {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

  .name {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 70px;
    font-weight: 800;
    font-family: "Playfair Display", sans-serif;
    padding: 7px;
  }

  .name:hover {
    filter: drop-shadow(10px 10px 5px grey);
    border-radius: 10px;
    font-size: 75px;
    padding: 8px;
  }

  guideContainer {
    display: flex;
    align-items: center;
    align-content: space-around;
    justify-content: space-between;
    width: 80%;
    position: absolute;
    top: 130px;
    left:10%

  }

  .guide {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 7px;
    font-size: 40px;
    font-weight: 500;
    font-family: "Playfair Display", sans-serif;
  }

  .guide:hover {
    filter: drop-shadow(10px 10px 5px grey);
    border-radius: 10px;
  }

nav1 {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
}

nav1 ul {
  display: flex;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0;
  padding: 10px;
}

nav1 ul:hover {
  border-radius: 10px;
  filter: drop-shadow(10px 10px 5px rgb(198, 137, 205));
}



</style>