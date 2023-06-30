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
  <a href="/" class="scroll-to-top">
    <span class="gg-arrow-up-r"></span>
  </a>


  <section class="parallax-container1"></section>

  <section id="buffer1" class="buffer1">
    <div id ="about" class="text-primary" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" >
      <h1 class="size-50 mb-3">About me</h1>
      <div class="flex content-center flex-col">
        <h5>Hello, my name is Xintian Gao. </h5><br />
        <h5>I graduated from Calvin University in with a degree in Secondary Education and Social studies, with minors in psychology and economics. In Fall 2023, I will enrolled in University of Michigan--Ann Arbor to pursue a degree in Design and Technologies in Learning. My career goal is to use technologies and online platforms to provide accessible and integrated education to learners across the world.</h5><br />
        <h5>Reach out to me via the contact section of the profile! Either scroll to the bottom or click "Contact Me" at the top of the page. </h5><br />
        <br />
        <h5>XoXo,</h5>
        <h5>Xintian</h5>
      </div>
    </div>
    
    <div class="about-border" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine"> </div>
    <div class="about-img-div">
      <img src="https://portfolio-xin.s3.amazonaws.com/photos/about.jpg" alt="about me">
    </div>

  </section>
  
  <!--UP Pictures and parallax container2-->
  <section class="parallax-container2">
    <div class="up_container flex align-start">

      <div class="w-11/12 absolute left-1/3 -bottom-2/4 z-10 up_item" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="1000" data--easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/UPBirds.jpg" alt="birds" />
      </div>
      
      <div class="w-11/12 absolute top-60   up_item" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/uPPerson.jpg" alt="person"/>
      </div>

      <div class="w-11/12 absolute top-14 up_item" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/UPPicturedRock.jpg" alt="rock" />
      </div>

      <div class="w-11/12 absolute top-1/3 up_item" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/UPTrees.jpg" alt="trees"/>
      </div>

      <div class="w-10/12 absolute left-16 top-1/3 up_item" data-aos="zoom-in-up" data-aos-offset="350" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/treesFilmUP.jpg" alt="trees"/>
      </div>

      <div class="w-11/12 absolute right-32 top-7 up_item" data-aos="zoom-in-up" data-aos-offset="400" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="https://portfolio-xin.s3.amazonaws.com/photos/birdsGroundUP.jpg" alt="bird"/>
      </div>

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

<section class="parallax-container3 relative"autoplay muted loop>
  <video class="video-background saturate-120 contrast-120" autoplay muted loop>
    <source src="/src/photos/cola.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</section>

<!--Hobbies-->
<section id="buffer3" class="buffer3">
  <div id="hobbies" class="text-primary">
     <!-- Hobbies -->
    <h1>My <br /> Hobbies</h1> 
    <!-- main container -->
    <div class="flex content-center justify-center align-middle">
      <div class="hobbies">
        <!-- header -->
        <div class="categories-grid">
          <ul class="w-1/2 flex justify-between">
            <li><button class="btn btn-secondary btn-outline active" data-filter="*"><h3>All</h3></button></li>
            <li><button class="btn btn-secondary btn-outline" data-filter="photography"><h3>Photography</h3></button></li> 
            <li><button class="btn btn-secondary btn-outline" data-filter="food"><h3>Food</h3></button></li> 
            <li><button class="btn btn-secondary btn-outline" data-filter="art"><h3>Art</h3></button></li> 
          </ul>
        </div>
        
        <!-- hobbies_container -->
        <div class="no-padding hobbies_container">
        
          <!-- photo1 -->
          <div class="hobbies_item mr-10 photography"> 
              <img src="https://portfolio-xin.s3.amazonaws.com/photos/chicagoBuilding.jpg" alt="building" />
            <div class="hobbies_item_hover">
              <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
            </div>
          </div>
  
          <!-- photo2-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="https://portfolio-xin.s3.amazonaws.com/photos/chicagoBus.jpg" alt="Bus" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>
                      
          <!-- photo3-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="https://portfolio-xin.s3.amazonaws.com/photos/chicagoClock.jpg" alt="Clock" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>
                      
          <!-- photo4-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="https://portfolio-xin.s3.amazonaws.com/photos/chicagoBirds.jpg" alt="Birds" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>

          <!-- photo5-->
          <div class="hobbies_item mr-10 food"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/food.jpg" alt="food" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Spicy Fish and Tofu</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <!-- photo5-->
          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/balconyKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/bbq.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Chinese Barbecue</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/beanChicago.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/burger.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Home Made Burger</span> <em>Food</em> </div>
                </div>
              </div>
          </div>          

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/cactus.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Grand Rapids, Michigan</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/dragonSin.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Marina Bay</span> <em>Singapore</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos//elkAri.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>
          
          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos//glassFlowersSin.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Marina Bay</span> <em>Singapore</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/housesKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/balconyKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/mountainGC.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/palmTreeAri.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Florida</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/ribs.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Barbecue Ribs</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/steamRibs.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Steamed Ribs</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/roundRoofKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/streeKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/sunCar.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/viewKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art1.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art2.png" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/photo2.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art3.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art4.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art5.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art6.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art7.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art8.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/art9.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="https://portfolio-xin.s3.amazonaws.com/photos/cookies.jpeg" alt="cookies" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Cookies</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

        </div>
        <!--Hobbies Container-->
      </div>
      <!--Hobbies Class-->
    </div>
  </div>
</section>
<!--end of hobbies-->


<!--Contact Me-->

<section class="parallax-container4">
</section>

<section class="buffer4" id="buffer4">
  <div id="contact" class="text-primary">
   <h1 class="flex justify-center">Contact Me</h1> 
   <h4 class="flex justify-center">I would love to hear from you! Reach out to me via the channels below and leave a message!</h4>
    <div class="contact-container">

      <div class="icons flex flex-row justify-start mt-5 space-x-7 rounded-md">
        <a href="mailto:gaoxintian08@gmail.com">
          <button><i class="gg-mail m-3 h-4"></i></button>
        </a>
        <a href="mailto:gaoxintian08@gmail.com">
         <h6>gaoxintian08@gmail.com</h6>
        </a>
      </div>
      

      <div class="icons flex flex-row justify-start mt-5 space-x-7 rounded-md">
        <a href="https://www.instagram.com/cynthia_gao_">
          <button><i class="gg-instagram flex m-3 h-4 justify-center align-middle"></i></button>
        </a>
        <a href="https://www.instagram.com/cynthia_gao_">
          <h6>cynthia_gao_</h6>
        </a>
      </div>
    </div>
  </div>
</section>

<div id="bottom"></div>