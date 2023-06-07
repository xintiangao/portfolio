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
    <div id ="about" class="text-primary" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
      <h1 class="size-50 mb-3">About me</h1>
      <div class="flex content-center flex-col">
        <h5>Hello, my name is Xintian Gao. </h5><br />
        <h5>Feel free to scroll around and check out the site. Let me know if you like or have constructive criticisms about anything. </h5><br />
        <h5>Reach out to me via the contact section at the bottom of the profile! Either scroll or click "Contact Me" at the top of the page. </h5><br />
        <br />
        <h5>XoXo,</h5>
        <h5>Xintian</h5>
      </div>
    </div>
    
    <div class="about-border" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine"> </div>
    <div class="about-img-div">
      <img src="/src/photos/about.jpg" alt="about me">
    </div>

  </section>
  
  <!--UP Pictures and parallax container2-->
  <section class="parallax-container2">
    <div class="up_container flex align-start">

      <div class="w-11/12 absolute left-1/3 -bottom-2/4 z-10 up_item" data-aos="zoom-in-up" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/UPBirds.jpg" alt="birds" />
      </div>
      
      <div class="w-11/12 absolute top-60   up_item" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/uPPerson.jpg" alt="person"/>
      </div>

      <div class="w-11/12 absolute top-14 up_item" data-aos="zoom-in-up" data-aos-offset="200" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/UPPicturedRock.jpg" alt="rock" />
      </div>

      <div class="w-11/12 absolute top-1/3 up_item" data-aos="zoom-in-up" data-aos-offset="300" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/UPTrees.jpg" alt="trees"/>
      </div>

      <div class="w-10/12 absolute left-16 top-1/3 up_item" data-aos="zoom-in-up" data-aos-offset="350" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/treesFilmUP.jpg" alt="trees"/>
      </div>

      <div class="w-11/12 absolute right-32 top-7 up_item" data-aos="zoom-in-up" data-aos-offset="400" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <img src="../portfolio/src/photos/birdsGroundUP.JPG" alt="bird"/>
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
              <img src="/src/photos/chicagoBuilding.jpg" alt="building" />
            <div class="hobbies_item_hover">
              <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
            </div>
          </div>
  
          <!-- photo2-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="/src/photos/chicagoBus.jpg" alt="Bus" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>
                      
          <!-- photo3-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="/src/photos/chicagoClock.jpg" alt="Clock" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>
                      
          <!-- photo4-->
          <div class="hobbies_item mr-10 photography"> 
              <img src="/src/photos/chicagoBirds.jpg" alt="Birds" />
            <div class="hobbies_item_hover">
              <div class="hobbies-border">
                <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
              </div>
            </div>
          </div>

          <!-- photo5-->
          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/food.jpg" alt="food" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Spicy Fish and Tofu</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <!-- photo5-->
          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/balconyKL.jpg" alt="" />
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
            <img src="/src/photos/beanChicago.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Chicago, Illinois</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/burger.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Home Made Burger</span> <em>Food</em> </div>
                </div>
              </div>
          </div>          

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/cactus.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Grand Rapids, Michigan</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/dragonSin.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Marina Bay</span> <em>Singapore</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/elkAri.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>
          
          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/glassFlowersSin.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Marina Bay</span> <em>Singapore</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/housesKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/balconyKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/mountainGC.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/palmTreeAri.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Florida</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/ribs.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Barbecue Ribs</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/steamRibs.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Steamed Ribs</span> <em>Food</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/roundRoofKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/streeKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/sunCar.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Phoenix, Arizona</span> <em>United States</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 photography"> 
            <img src="/src/photos/viewKL.jpg" alt="" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Kuala Lumpur</span> <em>Malaysia</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art1.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art2.png" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/photo2.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Oil Pastel</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art3.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art4.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art5.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art6.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art7.jpg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art8.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 art"> 
            <img src="/src/photos/art9.jpeg" alt="art" />
              <div class="hobbies_item_hover">
                <div class="hobbies-border">
                  <div class="item_info"> <span>Sketching</span> <em>Art</em> </div>
                </div>
              </div>
          </div>

          <div class="hobbies_item mr-10 food"> 
            <img src="/src/photos/cookies.jpeg" alt="cookies" />
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

      <div class="icons flex flex-row justify-start mt-5 space-x-7">
        <a href="mailto:gaoxintian08@gmail.com">
          <button><i class="gg-mail"></i></button>
        </a>
        <a href="mailto:gaoxintian08@gmail.com">
         <h6>gaoxintian08@gmail.com</h6>
        </a>
      </div>
      

      <div class="icons flex flex-row justify-start mt-5 space-x-7">
        <a href="https://www.instagram.com/cynthia_gao_">
          <button><i class="gg-instagram"></i></button>
        </a>
        <a href="https://www.instagram.com/cynthia_gao_">
          <h6>cynthia_gao_</h6>
        </a>
      </div>
    </div>
  </div>
</section>

<div id="bottom"></div>