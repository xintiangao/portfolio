<script>
    import Navbar from "../navbar.svelte";
    import AOS from 'aos';
    import 'aos/dist/aos.css'; 
    AOS.init(); 

</script>
  
  <style>
 @import "../utils/styles.css";
  </style>

  <Navbar />
  

  <section class="parallax-container1"></section>

  <section id="buffer1" class="buffer1">
    <div id ="about" class="text-primary" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <h1 class="size-50 mb-3">About me</h1>
      <div class="flex content-center flex-col">
        <h5>Hello, my name is Xintian Gao and this is my portfolio site. </h5><br />
        <h5>Feel free to scroll around and check out the site. Let me know if you like or have constructive criticisms about anything. </h5><br />
        <h5>Reach out to me via the contact section at the bottom of the profile! Either scroll or click "Contact Me" at the top of the page. </h5><br />
        <br />
        <h5>XoXo,</h5>
        <h5>Xintian</h5>
      </div>
    </div>
    
    <div class="about-border" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine"> </div>
    <div class="about-img-div" >
      <img src="/src/photos/about.jpg" alt="about me">
    </div>

  </section>
  
  <!--UP Pictures and parallax container2-->
  <section class="parallax-container2 absolute">
 
    <div class="w-3/12 relative left-1/3 top-10" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPBirds.jpg" alt="birds" />
    </div>
    
    <div class="w-3/12 relative left-24 -top-80" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPperson.jpg" alt="person"/>
    </div>

    <div class="w-3/12 relative left-1/3  -top-96 z-10" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPPicturedRock.jpg" alt="rock" />
    </div>

    <div class="w-4/12 relative left-2/3 -top-3/4" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPTrees.jpg" alt="trees"/>
    </div>

    <div class="w-5/12 relative left-3.5 -top-2/3" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPRoad.jpg" alt="road"/>
    </div>

    <div class="w-5/12 relative -right-2/4  bottom-full" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
      <img src="/src/photos/UPCar.JPG" alt="car"/>
    </div>

  </section>

  <!-- experience  -->
  <section id="buffer2"class="buffer2">
    <div id="experience" class="text-primary">

    <h1 class="mb-8">My <br /> Experience</h1>

    <ul class="timeline">
        <li class="timeline-event" data-aos="fade-up" data-aos-duration="2500"> 
            <div class="timeline-event-icon"></div>
            <div class="timeline-event-copy">
                <h2 class="timeline-event-thumbnail">January 2023 - April 2023</h2>
                <h3>Student Teacher</h3>
                <h4>East Kentwood High School, Grand Rapids, MI</h4>
                <h5>•	Plan and teach U.S. history and world history courses in an EL classroom independently </h5>
            </div>
        </li>

        <li class="timeline-event" data-aos="fade-up" data-aos-duration="2500">
            <div class="timeline-event-icon"></div>
            <div class="timeline-event-copy">
                <h2 class="timeline-event-thumbnail">August 2022 - May 2023</h2>
                <h3>Tutor and Academic Coach</h3>
                <h4>Peer-Support Center, Calvin University</h4>
                <h5>•	Identify problems and provide solutions to aid the student's progress in his/her coursework<br />
                    •	Instruct content, teach appropriate skills, provide methods of content mastery and provide students with appropriate and honest feedback</h5>
            </div>
        </li>

        <li class="timeline-event" data-aos="fade-up" data-aos-duration="2500">
            <div class="timeline-event-icon"></div>
            <div class="timeline-event-copy">
                <h2 class="timeline-event-thumbnail">March 2021 - May 2023</h2>
                <h3>President</h3>
                <h4>Society of Professional Educators at Calvin, Calvin University </h4>
                <h5>•	Initiated Spotlight Conversation for the purpose of promoting equity in the classrooms<br />
                    •	Publicly speak and manage events</h5>
            </div>
        </li>

        <li class="timeline-event" data-aos="fade-up" data-aos-duration="2500">
          <div class="timeline-event-icon"></div>
          <div class="timeline-event-copy">
              <h2 class="timeline-event-thumbnail">January 2022 - May 2023</h2>
              <h3>Student Ambassador</h3>
              <h4>Off Campus Programs, Calvin University </h4>
              <h5>•	Design promotion materials such as posters and videos <br />
                  •	Promote events and programs to the student body and prospective students </h5>
          </div>
      </li>
    </ul>
  </div>
</section>

<!-- ./experience -->

<section class="parallax-container3"></section>

<section id="buffer3" class="buffer3">
  <div id="hobbies" class="text-primary">
  </div>
</section>
