<script>
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 
    AOS.init(); 
    let currentTheme = "retro";
    function toggleTheme() {
        currentTheme = currentTheme === "retro" ? "dracula" : "retro";
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

jQuery(document).ready(function() {
    // Filter photos based on category when a button is clicked
    jQuery('.categories-grid button').click(function() {
      var filter = jQuery(this).data('filter');
      if (filter === '*') {
        jQuery('.artifact_container .portfolio_item').show();
      } else {
        jQuery('.artifact_container .portfolio_item').hide();
        jQuery('.artifact_container .' + filter).show();
      }
    });
  });

function scrollToTimeline() {
    const bufferSection = document.querySelector('#timeline');
    const bufferRect = bufferSection.getBoundingClientRect();
    const bufferTop = bufferRect.top + window.pageYOffset;

    window.scrollTo({
    top: bufferTop,
    behavior: 'smooth'
    });
}

</script>

<nav class="bg-current h-32">
    <div class="name text-primary flex align-middle justify-center" data-aos-easing="ease-in-sine" data-aos="zoom-in-up">
        <a href="/"> <button>Xintian Gao</button> </a>
    </div>
</nav>

<a href="/projects" class="scroll-to-top">
</a>

<nav1>
    <ul>
        <button class="text-primary w-8 flex content-start" on:click={toggleTheme}>
            {#if currentTheme === "retro"}
            <svg class="svg-icon fill-secondary svelte-1dt9l3n" viewBox="0 0 20 20">
                <path d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z" class="svelte-1dt9l3n"></path>
            </svg>
            {:else}
            <svg class="svg-icon fill-primary svelte-1dt9l3n" viewBox="0 0 20 20">
                <path d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045" class="svelte-1dt9l3n"></path>
            </svg>
            {/if}
        </button>
    </ul>
</nav1>

<!-- <div class="parallax-intro"></div> -->

<div class="hero min-h-screen" style="background-image: url(https://portfolio-xin.s3.amazonaws.com/photos/balconyKL.jpg);">
  <div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-center text-white">
    <div class="max-w-2xl">
      <h1 class="mb-5 text-6xl font-bold">Hello there！</h1>
      <p class="mb-5 text-left text-lg">This page showcases artifacts that highlight my journey as a Learning Experience Design (LXD) fellow. It includes artifacts designed for a Massive Open Online Course (MOOC) course, <b>Real Estate Development: Building Value in Your Community</b>, during the LXD certificate program. Each artifact is accompanied by a description, my role in its construction, <a href="https://docs.google.com/document/d/1BZV1vVAVQu3h3nXQVjcRpA5ayveVpnFDtTq3zhSWvmk/edit?tab=t.0" target="_blank"><u>the LXD competencies</u></a> addressed, and a rationale explaining how those competencies were met.
      <br><br>During my time at During my time at the Center for Academic Innovation (CAI), I learned essential LXD skills such as collaborating with multiple stakeholders, such as the faculty team and the media team. I received genuine feedbacks from my LXD mentor and was able to develop a meaning insight of into the design process. Through hands-on experience and guided mentorship, I honed my abilities in creating engaging and effective learning experiences. This portfolio serves as a testament to my growth and proficiency in the field of Learning Experience Design.
      </p>
      <button on:click={scrollToTimeline} class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        
<!--Timeline header-->
<div class="flex relative w-full h-28 text-center bg-current" id="timeline">
    <span class="absolute top-1 left-0 right-0 z-10 font-bold text-7xl leading-none text-[#BE97C6] opacity-25 ">Timeline</span>
    <h2 class="absolute top-6 left-0 right-0 z-20 font-bold text-6xl leading-none text-primary">Timeline</h2>
</div>

<!--Timeline -->

<ol class="items-center sm:flex bg-current pl-10 pr-10 pb-10">
    <li class="relative sm:mb-0">
        <div class="flex items-center">
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Joined the BCV Design Team</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">October 9, 2023</h4>
            <h5 class=" text-white dark:text-white">Joined the LXD team.</h5>
        </div>
    </li>

    <li class="relative sm:mb-0">
        <div class="flex items-center">
    <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">First time creating a module outline</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">February 22, 2024</h4>
            <h5 class=" text-white dark:text-white">Using design resources to brainstorm and script a module outline, (and another module after this)</h5>
        </div>
    </li>
    <li class="relative sm:mb-0">
        <div class="flex items-center">
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="12" height="12">
            <polygon points="0,0 10,5 0,10" class="fill-white dark:bg-gray-700" />
        </svg>

        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Gave the first pitch</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">March 4, 2021</h4>
            <h5 class=" text-white dark:text-white">Pitched about the module outline to the faculty team and received positive feedbacks.</h5>
        </div>
    </li>
</ol>

<!--Timeline 2-->
<ol class="items-center sm:flex bg-current pl-10 pr-10 pb-10 min-h-fit">
    <li class="relative sm:mb-0">
        <div class="flex items-center">
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Accessibility with graphs</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">March 12, 2024</h4>
            <h5 class=" text-white dark:text-white">Collaborated with accessibility to adjust tags in Adobe Acrobat for voice over</h5>
        </div>
    </li>


    <li class="relative sm:mb-0">
    <div class="flex items-center">
        <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
    </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Engaged in XR script writing</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">March 21, 2024</h4>
            <h5 class=" text-white dark:text-white">Engaged in script-writing with the XR team and the LXD team</h5>
        </div>
    </li>
    <li class="relative sm:mb-0">
        <div class="flex items-center">
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="12" height="12">
            <polygon points="0,0 10,5 0,10" class="fill-white dark:bg-gray-700" />
        </svg>

        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">In-Class Presentation</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">April 5, 2021</h4>
            <h5 class=" text-white dark:text-white">Presenting to my peers who are also LXD residents as well as professors and colleagues</h5>
        </div>
    </li>
</ol>


<!--Timeline 3-->
<ol class="items-center sm:flex bg-current pl-10 pr-10 pb-10 min-h-fit">
    <li class="relative sm:mb-0">
        <div class="flex items-center">
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Student Showcase</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">April 18, 2024</h4>
            <h5 class=" text-white dark:text-white">Showcase my work along with other students who interned at CAI</h5>
        </div>
    </li>

        <li class="relative sm:mb-0">
        <div class="flex items-center">
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Course Development Assistant</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">May, 2024 - November, 2024</h4>
            <h5 class=" text-white dark:text-white">Support the development of a series of short courses titled Navigating Disruption: Generative AI in the Workplace</h5>
        </div>
    </li>
    
    <li class="relative sm:mb-0">
        <div class="flex items-center">
            <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-primary"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
        </div>
        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="12" height="12">
            <polygon points="0,0 10,5 0,10" class="fill-white dark:bg-gray-700" />
        </svg>
        </div>

        <div class="mt-3 sm:pe-8">
            <h1 class="text-3xl mb-2 text-primary dark:text-primary">Learning Experience Design Fellow</h1>
            <h4 class="block mb-2 text-md font-normal leading-none text-white dark:text-white">May, 2024 - Current</h4>
            <h5 class=" text-white dark:text-white">Design and build for-credit courses using advanced HTML and CSS to develop custom styles and layouts, ensuring a seamless and visually appealing user experience across various LMS</h5>
        </div>
    </li>
    
</ol>


<div class="parallax-portfolio">
</div>


<!-- ======= My Portfolio Section ======= -->
<div class="flex relative w-full h-28 text-center bg-current">
    <span class="absolute top-1 left-0 right-0 z-10 font-bold text-7xl leading-none text-[#BE97C6] opacity-25 ">My Portfolio</span>
    <h2 class="absolute top-6 left-0 right-0 z-20 font-bold text-6xl leading-none text-primary">My Portfolio</h2>
</div>

<div class="bg-current">
    <div class="p-5 categories-grid">
        <ul class="flex justify-left flex-wrap x-5">
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6] active" data-filter="*">
                <h3 class="no-underline">All</h3></button></li>
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="theories">
                <h3 class="no-underline">Applying Learning Theories and Design Frameworks</h3></button></li> 
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="creation">
                <h3 class="no-underline">Creating Design Resources and Project Documentation</h3></button></li> 
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="relationships">
                <h3 class="no-underline">Fostering Workplace Skills and Professional Relationships</h3></button></li> 
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="inclusive">
                <h3 class="no-underline">Integrating Inclusive Design Principles and Practices</h3></button></li> 
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="affordances">
                <h3 class="no-underline">Using Knowledge of Technology Affordances and Constraints</h3></button></li> 
            <li><button class="btn btn-outline w-fit m-2 text-primary capitalize focus:ring focus:ring-[#BE97C6]" data-filter="research">
                <h3 class="no-underline">Using Research and Evaluation Skills</h3></button></li> 
        </ul>
    </div>

<!-- ======= My Portfolio Artifacts ======= -->

    <div class="artifact_container p-10">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
            
        <!-- artifact: module outline -->
            <div class="portfolio_item w-auto creation affordances research">
                <div class="overflow-hidden relative">
                    <img src="https://portfolio-xin.s3.amazonaws.com/photos/detailedOutlineModule2.png" class="img-fluid transform transition duration-1000 hover:scale-125" alt="">
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://docs.google.com/spreadsheets/d/1Y4caeaohhtTolSESeab_KIUH-einM4BhXl_AcFauOPk/edit?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Module Detail Outline
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b>This artifact is a detailed outline for one of the six modules of the MOOC I was developing with the team. It's goal is to guide the advancement of the course and create a common ground for the LXD team and the faculty team to embed course resources.  <br>
                            <br><b>My Role: </b>I used resources such as former syllabus, course-pack, referenced reading, to construct a module outline that would fit the flow of the content and be considerate of providing opportunities for learners to reflect on the content and interact with peers through discussion prompts, and inserting assessments activities to cater to the learning objectives. <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Creating Design Resources and Project Documentation:</li>
                            The creation of the detailed outline corresponds with proficiency in creating design resources and project documentation. By compiling relevant information from reference books and syllabi, I developed a comprehensive guide that serves as a valuable resource for both learners and instructors. This document aids in the organization and systematization of course content and serves as a reference for project stakeholders.
                            <br><li>Using Knowledge of Technology Affordances and Constraints:</li>
                            The incorporation of multimedia features supported by Coursera demonstrates proficiency in utilizing knowledge of technology affordances and constraints. By leveraging the capabilities of the Coursera platform, I enhanced the learning experience through the integration of multimedia elements such as videos, interactive quizzes, and discussion forums. This utilization of technology aims to optimize learner engagement and comprehension.
                            <br><li>Using Research and Evaluation Skills:</li>
                            The selection of appropriate excerpts from reference books and the inclusion of varied assessment activities reflect proficiency in using research and evaluation skills. By drawing upon scholarly resources and aligning assessment activities with learning objectives, I ensured the effectiveness and validity of the module's instructional design. Additionally, the integration of formative and summative assessments serves to continuously evaluate learner progress and inform instructional decisions.
                        </p>
                    </div>
                </div>
            </div>

        <!-- artifact: multiple choice questions -->
            <div class="portfolio_item w-auto creation theories research">
                <div class="overflow-hidden relative">
                    <img src="https://portfolio-xin.s3.amazonaws.com/photos/multipleChoiceQuestions.jpg" class="img-fluid transform transition duration-1000 hover:scale-125" alt="">
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://docs.google.com/document/d/1ROZBr8qAylc3ccPyuH2Y8YdmVLcd7naKDCyzHixxZdI/edit?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Assessment: Multiple Choice Questions
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b>This artifact is a summative assessment following a lecture. It is meticulously designed to assess learners' comprehension on the learning objectives related to the lecture. The quiz is also crafted to ensure that the questions are accessible and easy to read. <br>
                            <br><b>My Role: </b>I curated assessment activities such as this to align with the module's learning objectives and provide examples for the faculty team to curate their own versions of questions.  <br>
                            <br><b>LXD Core Competencies </b>
                            <br><li>Applying Learning Theories and Design Frameworks:</li>
                            The crafting of the multiple-choice questions reflects proficiency in applying learning theories and design frameworks. By aligning each question with specific learning outcomes and incorporating principles of cognitive and affective taxonomies of learning, the questions prompt learners to engage with and apply their knowledge effectively.
                            <br><li>Using Research and Evaluation Skills:</li>
                            The process of designing the multiple-choice questions required the application of research and evaluation skills. Each question was carefully constructed to ensure validity and reliability, drawing upon evidence-based practices in assessment design. Through Backward Design Principles, the questions aim to cater to the learning objectives.
                            <br><li>Creating Design Resources and Project Documentation:</li>
                            The design of the assessment involved generating objectives, templates, and documentation (slides and scripts) to support the development and implementation of assessments within the module. 
                        </p>
                    </div>
                </div>
            </div>

        <!-- artifact: paraphrased article -->
            <div class="portfolio_item w-auto theories research">
                <div class="overflow-hidden relative">
                    <img src="https://portfolio-xin.s3.amazonaws.com/photos/paraphraseArticle.jpg" class="img-fluid transform transition duration-1000 hover:scale-125" alt="">
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://docs.google.com/document/d/1ALjcUzDgVcFzPcy6ffGHAYg_RbXayTiwJXrZ0eD6ZRI/edit?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Reading: Paraphrased Article
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b>The paraphrased article is a concise summary derived from a reference chapter in one of the suggested books, focusing on a specific topic within the objectives of interest. It aims to present the key ideas and arguments of the original chapter in a condensed form while maintaining clarity and coherence.. <br>
                            <br><b>My Role: </b>my role involved reviewing the reference chapter from the book and extracting the main points to create the paraphrased article. I ensured that the language used was clear and accessible to the target audience, and that the essence of the original content was preserved while avoiding plagiarism.  <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Applying Learning Theories and Design Frameworks: </li>
                            I applied knowledge of learning theories and design frameworks to distill the main concepts from the reference chapter into a concise summary. By understanding the underlying principles of the topic discussed in the chapter, I was able to articulate key ideas effectively in the paraphrased article.
                            <br><li>Using Research and Evaluation Skills:</li>
                            Utilizing research skills, I critically analyzed the reference chapter to identify the most salient points and arguments. Through this process, I demonstrated proficiency in evaluating and synthesizing academic literature to extract relevant information for the paraphrased article. 
                        </p>
                    </div>
                </div>
            </div>

        <!-- artifact: discussion prompt -->
            <div class="portfolio_item w-auto creation affordances research">
                  <div class="overflow-hidden relative">
                    <img src="https://portfolio-xin.s3.amazonaws.com/photos/discussionPrompt.jpg" class="img-fluid transform transition duration-1000 hover:scale-125" alt="">
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://docs.google.com/document/d/10iCD3MtxIGWL1jokVJt9-qnnHzOBERoQLWsd5L40qKk/edit?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Reading: Discussion Prompt
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b>The discussion prompt encourages learners to reflect on the perspectives presented by the article chosen regarding the definition and nature of real estate development. It prompts participants to engage critically with the reading material by sharing their insights and questions, as well as encouraging peer interaction through response to classmates' submissions. <br>
                            <br><b>My Role: </b> I crafted the discussion prompt to stimulate meaningful dialogue and reflection among learners. This involved synthesizing key points from the reading material and framing the prompt that caters to reading objective. A guided discussion prompt encourages deeper exploration of the topic. Additionally, I emphasized the importance of peer interaction by prompting participants to read and respond to their classmates' submissions, fostering a collaborative learning environment. <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Creating Design Resources and Project Documentation: </li>
                            The development of the discussion prompt corresponds with proficiency in creating design resources for learner engagement. By crafting thought-provoking questions and providing clear instructions, I created a structured framework for facilitating discussion within the module. This resource serves as a guide for learners to engage with the reading material and articulate their thoughts effectively.
                            <br><li>Using Knowledge of Technology Affordances and Constraints:</li>
                            Leveraging technology affordances, I ensured that the discussion prompt is compatible with the digital learning platform used for the MOOC. By utilizing features such as discussion forums or interactive platforms, learners can easily access and participate in the discussion, promoting active engagement and collaboration. Additionally, I considered the constraints of the technology platform to ensure the prompt is user-friendly and accessible to all participants.
                            <br><li>Using Research and Evaluation Skills:</li>
                            The formulation of the discussion prompt demonstrates proficiency in using research and evaluation skills. By drawing upon the insights presented by Miles et al. (2015), I designed questions that encourage learners to critically analyze and reflect on the reading material. Additionally, the prompt facilitates formative assessment by prompting learners to articulate their understanding and engage in peer review, providing valuable feedback to inform their learning journey.
                        </p>
                    </div>
                </div>
            </div>

        <!-- artifact: slides -->
            <div class="portfolio_item w-auto creation inclusive research">
                  <div class="overflow-scroll relative">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR4ZfOINVAewTjBqA5aXXEdVnvcDRh6FMQJwXaxxbZSccmDYBl5NxR_C0h5YfpJg_1tgGqcs0VC0pjn/embed?start=false&loop=false&delayms=3000" frameborder="0" width="850" height="475" allowfullscreen="true" title="slides"></iframe>
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://docs.google.com/presentation/d/1Rot9Q8D1A3P2d6pCujl32b0TO7Rxf1DydUw6b7eGt6c/edit?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Lecture: Slides
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b>The slideshow presentation for a lecture which corresponds with learning objectives. The slideshow aims to complement the video recording of lecture content, visually illustrating key concepts and definitions to enhance learner understanding and engagement. It aims to be visually appealing, well-organized, and conducive to effective knowledge transfer. <br>
                            <br><b>My Role: </b>My responsibility is to design the slideshow presentation in alignment with the content and visually accessible. This involves noting key points and selecting appropriate visual elements to effectively convey abstract concepts. Additionally, I ensure the slideshow is structured logically, with clear headings and subheadings. <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Creating Design Resources and Project Documentation: </li>
                            The creation and design of the slideshow correspond with proficiency in creating design resources for instructional purposes. By synthesizing lecture content into visually engaging slides, I provide learners with a resource that complements the lecture recordings and supports their understanding of key concepts. The slideshow serves as a valuable reference for learners to review and reinforce their learning after the lecture.
                            <br><li>Integrating Inclusive Design Principles and Practices:</li>
                            I prioritize inclusive design principles to ensure that the slideshow is welcoming and accessible to all learners. This involves color-contrasting and content alignment to cater to different learner audience, as well as strategically utilize text decorations such as italicize and bolding. 
                            <br><li>Using Research and Evaluation Skills:</li>
                            I drew upon principles of visual accessibility and cognitive load theory to structure the slideshow in a way that optimizes learner comprehension and retention. Additionally, I solicited feedback from LXD to iteratively improve the design and effectiveness of the slideshow presentation.
                        </p>
                    </div>
                </div>
            </div>
            
        <!-- artifact: Phases -->
            <div class="portfolio_item w-auto creation inclusive relationships research">
                  <div class="overflow-hidden relative">
                    <iframe src="https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/preview" width="780" height="580" allow="autoplay" frameborder="0" allowfullscreen="true" title="image"></iframe>
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/view?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Material: Eight-Stages Image
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b> The image depicts the Eight-Stage Model of Real Estate Development, illustrating the sequential process that developers typically follow from initial ideation to property management, with iterations throughout the process. Each stage include a clear overview of the key steps involved in the development process. The image serves as a visual aid to enhance learners' understanding of the non-linear nature of real estate development and the various stages involved. <br>
                            <br><b>My Role: </b> I designed the image based on the reading on real estate development stages and the original version of the visual representation. I incorporated accessibility principles to recreate the visual and collaborated with LXD and accessibility team to revise the tags for the learners who require voice-over of the model. <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Creating Design Resources and Project Documentation: </li>
                            By designing the image based on readings and existing visual representations, I demonstrated proficiency in creating design resources that support learning objectives. The image serves as a valuable visual aid for learners to understand the stages of real estate development, enhancing their comprehension of the topic.
                            <br><li>Integrating Inclusive Design Principles and Practices:</li>
                            Incorporating accessibility principles into the design process reflects proficiency in promoting DEI within instructional materials. By considering the needs of learners requiring voice-over assistance, I ensured that the image was accessible to all learners, regardless of their individual abilities or preferences.
                            <br><li>Collaborating with Stakeholders:</li>
                            Collaboration with the LXD and accessibility teams exemplifies proficiency in working with stakeholders to enhance the effectiveness and accessibility of instructional materials. By soliciting feedback and revising tags for learners requiring alternative formats, I facilitated the creation of a more inclusive learning experience.
                        </p>
                    </div>
                </div>
            </div>

                    <!-- artifact: real estate listing -->
            <div class="portfolio_item w-auto creation inclusive affordances research">
                  <div class="overflow-hidden relative">
                    <iframe src="https://drive.google.com/file/d/1qApOhb63T2-Sn5bIHIYc-S_d3TYlVj0S/preview" width="800" height="480" allow="autoplay" title="listing"></iframe>
                    <div class="banner">
                        <div class="flex flex-end ">
                            <a href="https://drive.google.com/file/d/1anN8diBfC3_7TImop0xqSfjBxLRJwSZ_/view?usp=sharing" target="_blank" class="flex flex-end">&#x1F517;</a>
                        </div>
                    </div>
                </div>
                <div class="collapse collapse-arrow bg-base-200">
                    <input type="checkbox" class="peer" /> 
                    <div class="md:font-bold text-xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        Material: Real Estate Listing
                    </div>
                    <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                        <p>
                            <b>Description: </b> This artifact is a real estate listing used as a resource for students to familiarize themselves with typical features and components found in real estate listings. The listing will include essential elements such as property details, description, images, and contact information, presented in a visually appealing and professional manner. <br>
                            <br><b>My Role: </b> my role is to design the real estate listing template using Adobe Illustrator. This involves creating a layout that organizes the property information effectively, selecting appropriate fonts and colors for readability and visual appeal, and incorporating graphics and images that align with copyright rules to enhance the presentation. Additionally, I ensure that the listing template is user-friendly and accessible to students, facilitating their learning experience. <br>
                            <br><b>LXD Core Competencies</b> 
                            <br><li>Creating Design Resources and Project Documentation: </li>
                            The creation of the real estate listing template demonstrates proficiency in creating design resources for instructional purposes. By designing a visually appealing and informative template, I provide students with a valuable resource to practice analyzing and interpreting real estate listings, enhancing their understanding of the industry.
                            <br><li>Integrating Inclusive Design Principles and Practices:</li>
                            I ensure that the real estate listing template is accessible to all students, regardless of their individual abilities or preferences. This involves using clear and legible fonts and organizing information in a logical and intuitive manner. 
                            <br><li>Using Knowledge of Technology Affordances and Constraints:</li>
                            Leveraging Adobe Illustrator, I utilize the software's features and tools to create the real estate listing template. This involves selecting appropriate design elements, such as shapes, text boxes, and difference styles, to effectively communicate property information.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<footer class="footer items-center p-8 bg-neutral text-neutral-content">
  <aside class="items-center grid-flow-col">
    <svg width="46" height="46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <h2 class="text-xl">Copyright © 2024 - All right reserved and any questions?</h2>
  </aside> 
</footer>

<!-- End My Portfolio Section -->

    <!-- <div class="w-full bg-current p-10 flex justify-between relative">
        <container class="carousel carousel-center w-1/2 h-1/2 p-10 space-x-10 rounded-box flex content-start overflow-x-auto mr-auto">
            <div class="carousel-item object-scale-down w-auto h-96"> 
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/detailedOutlineModule2.png" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item object-scale-down w-auto h-96">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/multipleChoiceQuestions.jpg" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item object-scale-down w-auto h-96">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/paraphraseArticle.jpg" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item object-scale-down w-auto h-96">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/BCV+Color+Scheme.jpg" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item object-scale-down w-auto h-96 ">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/BCV+Color+Scheme+copy.jpeg" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item object-scale-down w-auto h-96">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/BCV+Color+Scheme+copy+2.jpeg" class="rounded-box" alt=" "/>
            </div> 
            <div class="carousel-item">
                <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" alt=" "/>
            </div>
        </container>

        <container class="carousel carousel-center max-w-3xl p-10 space-x-10 rounded-box flex content-end overflow-x-auto ml-auto">
            <div class="carousel-item object-scale-down w-auto h-96">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/EightStages1.png" class="rounded-box" alt=" ">
            </div>
            <div class="carousel-item object-scale-down w-auto h-fit ">
                <img src="https://portfolio-xin.s3.amazonaws.com/photos/EightStages2.png" class="rounded-box" alt=" ">
            </div>
        </container>
    </div> -->

   


<style>
 @import "../../utils/styles.css";
</style>