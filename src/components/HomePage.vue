<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
  duration: 1200, // مدة الحركة بالميلي ثانية
  once: true,     // تعيين "true" لتشغيل الحركة مرة واحدة فقط عند التمرير
});


const fullText = "Hello there!";
const displayedText = ref("");
const typingSpeed = 120; // Adjust for smoothness
const nameTextFull = "My Name Is Mohammed Alzubaidy";
const displayedName = ref("");


function scrollToSection() {
  const section = document.querySelector('.content-container');
  section.scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  typeText();
  NameText();
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

function typeText() {
  let i = 0;
  const interval = setInterval(() => {
    displayedText.value += fullText[i];
    i++;
    if (i === fullText.length) {
      clearInterval(interval);
    }
  }, typingSpeed);
}
function NameText() {
  let j = 0;
  const interval = setInterval(() => {
    displayedName.value += nameTextFull[j];
    j++;
    if (j === nameTextFull.length) {
      clearInterval(interval);
    }
  }, typingSpeed);
}
// إضافة دالة التمرير إلى قسم "How is Mohammed Alzubaidy"
function scrollToAbout() {
  const aboutSection = document.getElementById('howIsSection');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const fullHeading = "who is Mohammed Alzubaidy?";
const fullDescription = `I was born in Baghdad 1997 , I grew up in love with learning everything about Technology in general
and programming in particular. In my college, I worked on C++ and MATLAB. After reaching the fourth stage, 
I worked in Linux systems, my project was (design and implementation of a campus firewall) and I got a degree (86).
Now, I can say I am excellent with HTML5, CSS3, Bootstrap, and Vue3. Right now I'm learning React.js and more.`;

const animatedHeading = ref("");
const animatedDescription = ref("");
const hasStartedTyping = ref(false);
const typingSpeed2 = 30; // Adjust for smoothness

function typeHeading() {
  let currentIndex = 0;
  const headingTimer = setInterval(() => {
    animatedHeading.value += fullHeading[currentIndex];
    currentIndex++;
    if (currentIndex === fullHeading.length) {
      clearInterval(headingTimer);
      typeDescription(); // Start typing the description after heading completes
    }
  }, typingSpeed2);
}

function typeDescription() {
  let currentIndex = 0;
  const descriptionTimer = setInterval(() => {
    animatedDescription.value += fullDescription[currentIndex];
    currentIndex++;
    if (currentIndex === fullDescription.length) {
      clearInterval(descriptionTimer);
    }
  }, typingSpeed2);
}

function onScroll() {
  const targetOffset = document.querySelector('.content-container').offsetTop;
  const currentScrollPosition = window.scrollY + window.innerHeight;

  // Start typing when user scrolls to the section
  if (currentScrollPosition > targetOffset) {
    if (!hasStartedTyping.value) {
      hasStartedTyping.value = true;
      typeHeading(); // Start with heading
    }
  }
}



const images = [
  'https://up6.cc/2024/10/172824893598191.png',
  'https://up6.cc/2024/10/172824893601222.png',
  'https://up6.cc/2024/10/172824893603963.png',
  'https://up6.cc/2024/10/172824893606884.png',
  'https://up6.cc/2024/10/172824893609595.png',
  'https://up6.cc/2024/10/172824918796811.png'
];

// الفهرس الحالي للصورة المعروضة
const currentImage = ref(0);

// دالة للتبديل إلى الصورة التالية
const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.length;
};

// دالة للتبديل إلى الصورة السابقة
const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.length) % images.length;
};



const imagesProject = [
    'https://up6.cc/2024/10/172829890914551.png',
    'https://up6.cc/2024/10/172829890919182.png',
    'https://up6.cc/2024/10/172829895932811.png',
    'https://up6.cc/2024/10/172829890923274.png'
];
let currentImageIndex = 0;

window.onload = function() {
  document.getElementById('slider').src = imagesProject[currentImageIndex];
};

const nextImageProject = () => {
  currentImageIndex = (currentImageIndex + 1) % imagesProject.length; // التنقل بين الصور دائريًا
  document.getElementById('slider').src = imagesProject[currentImageIndex];
}

function prevImageProject() {
  currentImageIndex = (currentImageIndex - 1 + imagesProject.length) % imagesProject.length; // التنقل بالعكس
  document.getElementById('slider').src = imagesProject[currentImageIndex];
}

const scrollToProjectSection = () => {
  const element = document.getElementById("project-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


</script>

<template>
<section  class="all" >
    <header v-motion-slide-top class="header" >
        <div class="left" >
                <h2 class="welcome-text"
                v-motion
                :initial="{ opacity: 0, x: -100 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="250"
                :duration="1000">
                WELCOME!
            </h2>
        </div>
        <div 
        v-motion
                :initial="{ opacity: 0, x: 200 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="250"
                :duration="1000"
                    class="right" >
            <router-link class="link" to="/homepage" >HOME</router-link>
            <a class="link pointer" @click.prevent="scrollToAbout">About</a>
            <a class="link pointer" @click.prevent="scrollToProjectSection">Projects</a>
            <router-link class="link" to="/Contactme" >Contact me</router-link>
        </div>
    </header>
    <section class="top-section">
    <div class="right-section">
        <div class="container">
            <h1>{{ displayedText }}<span class="caret">|</span></h1><br>
            <h1 class="name-color">{{ displayedName }}<span class="caret">|</span></h1>
                <h3 class="job-title"
                v-motion
                :initial="{ opacity: 0, x: -300 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="400"
                :duration="2000"
                >COMPUTER ENGINEERING  | FRONT-END DEVELOPER</h3>
        </div>
    </div>
    

    <div class="left-section" 
                v-motion
                :initial="{ opacity: 0, x: 200 }"
                :enter="{ opacity: 1, x: 0, scale: 1 }"
                :variants="{ custom: { scale: 2 } }"
                :delay="1000"
                :duration="700">
    </div>



    </section>
    <section 
    id="howIsSection" class="center-section">
        <div class="content-container">
            <h2 v-if="hasStartedTyping" class="how-is">{{ animatedHeading }}<span class="blinking-cursor">|</span></h2>
            <p v-if="hasStartedTyping" class="des-text">{{ animatedDescription }}</p>
        </div>
    </section>
    <section class="detils">
        
        <div class="ciertifaction">
            <div class="flon-text2">
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="togther">
            <p class="qualifications change-d">My certificates</p>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="left-arror-qua">
                <svg class="test" width="56" height="51" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.672333 15.3209C29.9123 13.2956 44.3069 39.9304 47.6654 44.5548" stroke="white" stroke-opacity="0.9" stroke-width="1.01087" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M53.271 33.3483C49.648 40.6833 47.7558 44.447 47.5942 44.6396C47.3518 44.9285 41.3401 43.3306 36.7674 44.7306" stroke="white" stroke-opacity="0.9" stroke-width="1.01087" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        </div>
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="carousel">
                
                <button @click="prevImage" class="arrow left-arror">
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0759 26.8881L13.397 18.2093L22.0759 9.53043" stroke="white" stroke-width="2.89295" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <img :src="images[currentImage]" alt="carousel image" class="carousel-image" key="currentImage" />
                <button @click="nextImage" class="arrow left-arror right-arror">
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0759 26.8881L13.397 18.2093L22.0759 9.53043" stroke="white" stroke-width="2.89295" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
             </div>
        </div>
        <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" 
        class="photo-div">
            <img src="../photos/my-photo.png" class="photo">
        </div>
        <div class="flon-text">
            <div 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="togther">
            <p class="qualifications change-d">My qualifications</p>
            <svg  width="56" height="51" viewBox="0 0 56 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.99994 15.3209C30.2399 13.2956 44.6345 39.9304 47.993 44.5548" stroke="white" stroke-opacity="0.9" stroke-width="1.01087" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M53.5986 33.3483C49.9756 40.6833 48.0834 44.447 47.9218 44.6396C47.6794 44.9285 41.6677 43.3306 37.095 44.7306" stroke="white" stroke-opacity="0.9" stroke-width="1.01087" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        </div>

        <div class="education">
            <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            >           
                <p class="main-education">Bachelor of Computer Techniques Engineering</p>
                <p class="second-education">Al-Turath University / Baghdad</p>
                <p class="time-edc">2015-2019</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">Web Development Bootcamp</p>
                <p class="second-education">The App Brewery Online / UK</p>
                <p class="time-edc">2024-Now</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">React - The Complete Guide</p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2024-Now</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">The Complet Foundation Forex Trading Course</p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2023</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">HTML5 And CSS3 with User Experience</p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2022</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">Shopify Expert </p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2022</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">Facebook Ads & Facebook Marketing</p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2022</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
                <p class="main-education">AliExpress Dropship</p>
                <p class="second-education">Udemy Online / Iraq</p>
                <p class="time-edc">2022</p>
            </div>
        </div>
    </section>
    
    <div data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
        <hr class="line-b">
    </div>
    <section class="projects">
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        >
        <div class="left-project-side">
            <p class="descrption">
                It's a table that creates users with specific permissions or users for login, along with a Signup page and a login page
            </p>
        </div></div>
        <div data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <div class="right-project-side" id="project-section">
            <div class="login-logout-page">
                <button class="project-btn" @click="prevImageProject()">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00065 6.08964L0.52865 6.56164L0.0579834 6.08964L0.52865 5.61764L1.00065 6.08964ZM1.47265 5.61764L6.80598 10.951L5.86198 11.895L0.52865 6.56164L1.47265 5.61764ZM0.52865 5.61764L5.86198 0.284302L6.80598 1.2283L1.47265 6.56164L0.52865 5.61764ZM1.00065 5.42297L17.6673 5.42297V6.7563L1.00065 6.7563V5.42297Z" fill="white"/>
                    </svg>
                </button>
                <img class="project-img" id="slider" src="" alt="photo 1">
                <button class="project-btn" @click="nextImageProject()">
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7247 6.08969L17.1967 5.61769L17.6674 6.08969L17.1967 6.56169L16.7247 6.08969ZM16.2527 6.56169L10.9194 1.22835L11.8634 0.284352L17.1967 5.61769L16.2527 6.56169ZM17.1967 6.56169L11.8634 11.895L10.9194 10.951L16.2527 5.61769L17.1967 6.56169ZM16.7247 6.75635L0.0580249 6.75635L0.0580249 5.42302L16.7247 5.42302L16.7247 6.75635Z" fill="white"/>
                    </svg>
                </button>
        </div>
    </div>
        </div>
        
    </section>  
    <section class="projects-second">
        <div class="left-project-side-second">
            <p 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="descrption">
                It's a menu for a restaurant that shows all the food and drinks that the restaurant provides for the customers.
            </p>
            <a 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            class="resturent-link" href="https://keef2.netlify.app/" target="_blank">The link for the restaurant</a>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        class="right-project-side-second">
            <div class="project-keef-img"></div>
        </div>
    </section>  
    <footer class="footer">
        <a href="https://www.instagram.com/mmj.exe/profilecard/?igsh=bXNkYzM1azFla3p1" target="_blank" class="copyright">Copyright © Mohammed Alzubaidy</a>
    </footer>
</section>
</template>
<style scooped>
@media only screen and (min-width: 601px) {

.welcome-text{
    color : #B336FF;
    padding-left: 2vh;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-size: 3vh;
    font-style: normal;
}
.header{
        padding: 2vh;
        display: flex;
        box-shadow: 0px -30px 50px #B336FF;
        animation: change 3s ease infinite;
}
@keyframes change {
    0%{
        box-shadow: 0px -30px 50px #B336FF;
    }
    15%{
        box-shadow: 0px -30px 55px #B336FF;
    }
    25%{
        box-shadow: 0px -30px 60px #B336FF;
    }
    35%{
        box-shadow: 0px -30px 65px #B336FF;
    }
    50%{
        box-shadow: 0px -30px 70px #B336FF;
    }
    65%{
        box-shadow: 0px -30px 65px #B336FF;
    }
    75%{
        box-shadow: 0px -30px 60px #B336FF;
    }
    85%{
        box-shadow: 0px -30px 55px #B336FF;
    }
    100%{
        box-shadow: 0px -30px 50px #B336FF;
    }
}
.left{
    flex: 1.3;
}
.right{
    flex: 1;
    display: flex;
    justify-content: space-around;

}
.link{
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    color: white;
}
.link:hover{
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;
    color : #B336FF;
}
.top-section{
    display: flex;

    width: auto;
    height: 85vh;
    margin: 3vh;
}
.left-section{
    flex: 1;
    background: url(../photos/cv2.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.right-section{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0vh 0vh 1vh 7vh;

}
.center{
    display: flex;
    flex: 1;
    align-items: end;
}
.name{
    flex: 2;
    margin: 2vh 0vh 2vh 0vh;
}
.name-color{
    font-family: "Ubuntu", sans-serif;
    color: #B336FF;
    text-shadow: 0px 0px 30px #B336FF;

}
.container {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
}
h1 {
  font-size: 2em;
}
.job-title{
    font-family: "Roboto", system-ui;
    font-weight: 400;
    font-style: normal;
    padding-top: 2vh;
}
.caret {
  border-right: 2px solid black;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}
.center-section{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: auto;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content-container {
    margin: 2vh 20vh 2vh 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
}
.how-is {
  font-size: 2em;
  color: #B336FF;
  margin-bottom: 20px;
}
.des-text {
  font-size: 1.2em;
  line-height: 1.6;
}
.right-project-side-second{
    flex : 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.blinking-cursor {
  border-right: 2px solid black;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}
.pointer{
    cursor: pointer;
}
.detils{
    display: flex;
    width: auto;
    height: 100vh;
    margin: 20vh 10vh 0vh 10vh;
    position: relative;
}
.ciertifaction{
    flex: 1;
}
.photo-div{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 15vh 0vh 15vh 0vh;
    align-items: center;
}
.photo{
    width: 300px; 
    height: 500px; 
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0px 0px 50px #B336FF;
    filter: blur(5px); 
    transition: 0.5s ease-in-out;
}
.photo:hover{
    width: 300px; 
    height: 500px;
    border-radius: 100%;
    box-shadow: 0px 0px 90px #B336FF;
    transition: 0.5s ease-in-out;
    filter: blur(1px); 

}
.education{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5vh;
    gap: 3vh;
}
.main-education{
    font-size: 3vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration-line: underline;
    justify-content: center;
    display: flex;

}
.second-education{
    font-size: 2vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    justify-content: center;
}
.time-edc{
    font-size: 2.5vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    justify-content: center;
}
.togther{
    display: flex;
    flex-direction: row;
    gap: 2vh;
}
.flon-text{
    position: absolute;
    margin: -8vh 0vh 15vh 105vh
}
.qualifications{
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 4vh;
}
.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel-image {
  width: 280px;
  height: 190px;
  object-fit: cover;
  border-radius: 3vh;
  transition: 0.5s ease-in-out;
}
.carousel-image:hover{
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 3vh;
  transition: 0.5s ease-in-out;
  box-shadow: 0vh 0vh 2vh #B336FF;
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0vh 1vh;

}
.left-arror{
    box-shadow: 0vh 0vh 4vh 0.1vh #B336FF;
    border-radius: 100%;
    transition: 0.5s ease-in-out;
}
.left-arror:hover{
    box-shadow: 0vh 0vh 5vh 1vh #B336FF;
    border-radius: 100%;
    transition: 0.5s ease-in-out;
}
.right-arror{
    transform: rotate(180deg);
}
.left-arror-qua{
    margin: 0vh 0vh 2vh -7vh;
}
.change-d{
    margin-bottom: 20px;
    transform: rotate(-30deg);
}
.projects{
    height: 100vh;
    display: flex;
    margin: 2vh 15vh;
}
.projects-second{
    height: 100vh;
    display: flex;
    margin: 2vh 15vh; 
    justify-content: center;

}
.left-project-side{
    flex : 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 30vh;
    gap: 4vh;
}
.left-project-side-second{
    flex : 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 30vh;
    gap: 4vh;
}
.resturent-link{
    border: 0.2vh solid #B336FF;
    padding: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
    text-decoration: none;
    color: white;
    box-shadow: 0vh 0vh 1.5vh #B336FF;

}
.right-project-side{
    flex : 3;
    display: flex;
}
.login-logout-page{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.project-img{
    width: 130vh;
    height: 60vh;
    border-radius: 20px;
    box-shadow: 0vh 0vh 3vh #B336FF;
}
.project-btn{
    background: none;
    border: none;
    margin: 0vh 2vh;
}
.descrption{
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
}
.footer{
    height: 4vh;
    width: auto;
    background-color: black;
    box-shadow: 0vh 0vh 2vh #B336FF;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: change2 3s ease infinite;
}
.copyright{
    font-size: 2vh;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;
}
@keyframes change2 {
    0%{
        box-shadow: 0px 0px 20px #B336FF;
    }
    15%{
        box-shadow: 0px -0px 25px #B336FF;
    }
    25%{
        box-shadow: 0px -0px 30px #B336FF;
    }
    35%{
        box-shadow: 0px -0px 35px #B336FF;
    }
    50%{
        box-shadow: 0px -0px 40px #B336FF;
    }
    65%{
        box-shadow: 0px -0px 35px #B336FF;
    }
    75%{
        box-shadow: 0px -0px 30px #B336FF;
    }
    85%{
        box-shadow: 0px -0px 25px #B336FF;
    }
    100%{
        box-shadow: 0px -0px 20px #B336FF;
    }
}
.resturent-link{
    border: 0.2vh solid #B336FF;
    padding: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
    text-decoration: none;
    color: white;
    box-shadow: 0vh 0vh 1.5vh #B336FF;
    border-radius: 20px;
}
.resturent-link:hover{
    border: 0.2vh solid white;
    padding: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
    text-decoration: none;
    color: white;
    box-shadow: 0vh 0vh 1.5vh white;
    border-radius: 20px;
}
.project-keef-img{
    background: url('../photos/keef.png') no-repeat;
    height: 86vh;
    width: 39.5vh;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 0vh 0vh 3vh #B336FF;
}

.line-b{
    margin: 10vh 30vh 10vh 30vh;
}
}








@media only screen and (max-width: 600px) {
.test{
    margin: 3vh 0vh 0vh 0vh;
}
.line-b{
    margin: 0vh 5vh 2vh 5vh;
}
.right-project-side{
    flex : 3;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5vh 0vh 5vh 0vh;
}
.welcome-text{
    color : #B336FF;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    font-size: 2vh;
    font-style: normal;
}
.header{
        padding: 1vh;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px -30px 50px #B336FF;
        animation: change 3s ease infinite;
}
@keyframes change {
    0%{
        box-shadow: 0px -30px 50px #B336FF;
    }
    15%{
        box-shadow: 0px -30px 55px #B336FF;
    }
    25%{
        box-shadow: 0px -30px 60px #B336FF;
    }
    35%{
        box-shadow: 0px -30px 65px #B336FF;
    }
    50%{
        box-shadow: 0px -30px 70px #B336FF;
    }
    65%{
        box-shadow: 0px -30px 65px #B336FF;
    }
    75%{
        box-shadow: 0px -30px 60px #B336FF;
    }
    85%{
        box-shadow: 0px -30px 55px #B336FF;
    }
    100%{
        box-shadow: 0px -30px 50px #B336FF;
    }
}
.right{
    display: none;
}
.top-section{
    display: flex;
    flex-direction: column-reverse;
    width: auto;
    height: 75vh;
    margin: 1vh;
}
.left-section{
    flex: 1;
    background: url(../photos/cv2.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
.right-section{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: -10vh 3vh 0vh 3vh;
}
.center{
    display: flex;
    flex: 1;
    align-items: end;
}
.name-color{
    font-family: "Ubuntu", sans-serif;
    color: #B336FF;
    text-shadow: 0px 0px 30px #B336FF;

}
.container {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
}
h1 {
  font-size: 2em;
}
.job-title{
    font-family: "Roboto", system-ui;
    font-weight: 400;
    font-style: normal;
    padding-top: 1vh;
}
.caret {
  border-right: 2px solid black;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}
.center-section{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: auto;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.content-container {
    margin: 0vh 2vh 2vh 2vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0vh 2vh 0vh 2vh;
    font-family: 'Courier New', Courier, monospace;
}
.how-is {
  font-size: 1.36em;
  color: #B336FF;
  margin-bottom: 15px;
}
.des-text {
  font-size: 1.1em;
  line-height: 1.6;
}
.blinking-cursor {
  border-right: 2px solid black;
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
}
.pointer{
    cursor: pointer;
}
.detils{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100vh;
    margin: 70vh 2vh 70vh 2vh;
    position: relative;
}
.ciertifaction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.photo-div{
    display: flex;
    flex-direction: column;
    margin: 10vh 0vh 20vh 0vh;
    align-items: center;
}
.photo{
    width: 300px; 
    height: 500px; 
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0px 0px 50px #B336FF;
    filter: blur(5px); 
    transition: 0.5s ease-in-out;
}
.photo:hover{
    width: 300px; 
    height: 500px;
    border-radius: 100%;
    box-shadow: 0px 0px 90px #B336FF;
    transition: 0.5s ease-in-out;
    filter: blur(1px); 

}
.education{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-left: 5vh; */
    gap: 3vh;
}
.main-education{
    font-size: 2.5vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration-line: underline;
}
.second-education{
    font-size: 1.8vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    justify-content: center;
}
.time-edc{
    font-size: 1.5vh;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 100;
    font-style: normal;
    display: flex;
    justify-content: center;
}
.togther{
    display: flex;
    flex-direction: row;
    gap: 2vh;
    margin-bottom: 5vh;
    margin-left: -5vh ;
}
.flon-text{
    position: absolute;
    margin: 40vh 0vh 5vh 0vh;

}

.qualifications{
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
}
.carousel {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-rows: auto auto; /* صفان: واحد للصورة وواحد للأزرار */
  grid-template-columns: 1fr 1fr; /* عمودان للأزرار */
}
.carousel-image {
  width: 280px;
  height: 190px;
  object-fit: cover;
  border-radius: 3vh;
  transition: 0.5s ease-in-out;
  grid-column: 1 / -1; /* تجعل الصورة تمتد عبر العمودين */
  margin-bottom: 20px; /* مسافة بين الصورة والأزرار */
}
.carousel-image:hover{
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 3vh;
  transition: 0.5s ease-in-out;
  box-shadow: 0vh 0vh 2vh #B336FF;
  grid-column: 1 / -1; /* تجعل الصورة تمتد عبر العمودين */
  margin-bottom: 20px; /* مسافة بين الصورة والأزرار */
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0vh 1vh;

}
.left-arror{
    grid-row: 2; /* وضع الزر في الصف الثاني */
    grid-column: 1; /* العمود الأول للزر اليسار */
}

.right-arror{
    transform: rotate(180deg);
    grid-row: 2; /* وضع الزر في الصف الثاني */
    grid-column: 2; /* العمود الثاني للزر اليمين */
    margin-top: -1vh ;
}
.left-arror-qua{
    margin: 0vh 0vh 0vh -9vh;
}
.change-d{
    margin-bottom: 20px;
    transform: rotate(-20deg);
}

.projects{
    display: flex;
    align-content: center;
    justify-items: center;
    flex-direction: column-reverse;
    margin: 2vh 2vh 2vh 2vh;
}
.projects-second{
    display: flex;
    align-content: center;
    justify-items: center;
    flex-direction: column-reverse;
    margin: 2vh 2vh 2vh 2vh;
    gap: 5vh;
}
.left-project-side{
    flex : 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 30vh;
    gap: 4vh;
}
.resturent-link{
    border: 0.2vh solid #B336FF;
    padding: 2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
    text-decoration: none;
    color: white;
    box-shadow: 0vh 0vh 1.5vh #B336FF;
    border-radius: 20px;
}
.project-keef-img{
    background: url('../photos/keef.png') no-repeat;
    height: 86vh;
    width: 39.5vh;
    background-size: cover;
    border-radius: 20px;
    box-shadow: 0vh 0vh 3vh #B336FF;
}
.right-project-side-second{
    flex : 2;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-logout-page{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.project-img{
    width: 35vh;
    height: auto;
    display: grid;
    grid-template-rows: auto auto; /* صفان: واحد للصورة وواحد للأزرار */
    grid-template-columns: 1fr 1fr;
    border-radius: 20px;
    box-shadow: 0vh 0vh 3vh #B336FF;
}
.project-btn{
    background: none;
    border: none;
    margin: 1vh;
}
.descrption{
    font-family: 'Bradley Hand ITC', cursive;
    font-size: 3vh;
}
.footer{
    height: 4vh;
    width: auto;
    background-color: black;
    box-shadow: 0vh 0vh 2vh #B336FF;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: change2 3s ease infinite;
}
.copyright{
    font-size: 2vh;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
    text-decoration: none;
}
@keyframes change2 {
    0%{
        box-shadow: 0px 0px 20px #B336FF;
    }
    15%{
        box-shadow: 0px -0px 25px #B336FF;
    }
    25%{
        box-shadow: 0px -0px 30px #B336FF;
    }
    35%{
        box-shadow: 0px -0px 35px #B336FF;
    }
    50%{
        box-shadow: 0px -0px 40px #B336FF;
    }
    65%{
        box-shadow: 0px -0px 35px #B336FF;
    }
    75%{
        box-shadow: 0px -0px 30px #B336FF;
    }
    85%{
        box-shadow: 0px -0px 25px #B336FF;
    }
    100%{
        box-shadow: 0px -0px 20px #B336FF;
    }
}
.left-project-side-second{
    flex : 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 30vh;
    gap: 4vh;
}

}


</style>