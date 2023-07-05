
// Load ready to start animations


// document.body.className += "js-loading";

// window.addEventListener(
//   "load",
//   () => {
//     document.body.className = document.body.className.replace("js-loading", "");
//   },
//   false
// );

// window.addEventListener(
//   "load",
//   () => {
//     document.getElementById("loading").style.display = "none";
//   },
//   true
// );


// Animation on scroll


// var scroll = window.requestAnimationFrame || 
//              function(callback) {
//                window.setTimeout(callback, 1000/60);
//              };

// var elementsToShow = document.querySelectorAll(".show-on-scroll"); // returns array with elements that have that class
// console.log(elementsToShow)

// function loop() {
//   elementsToShow.forEach(function(element) {
//     if (isElementInViewport(element)) {
//       element.classList.add("is-visible");
//     } else {
//       element.classList.remove("is-visible");
//     }
//     scroll(loop);
//   });
// }

// loop();

// function isElementInViewport(el) {
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }

//   var rect = el.getBoundingClientRect(); // rectangle around the element we want to check

//   return (
//     (rect.top <= 0 && rect.bottom >= 0)
//     || 
//     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) 
//     &&
//     (rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//     ||
//     (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//   );
// }


// Hamburger menu


const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});


// Carousel


const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}


//  Form


// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// const nameError = document.getElementById("nameError");
// const emailError = document.getElementById("emailError");
// const messageError = document.getElementById("messageError");
// const validString = /^[a-z]+$/i;
// const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let errors = [];

//   // Name
//   if (
//     name.value === "" ||
//     name.value === null ||
//     !name.value.length > 2 ||
//     !validString.test(name.value)
//   ) {
//     errors.push("Name is invalid");
//   }
//   if (errors.length > 0) {
//     nameError.innerText = errors[0];
//   }

//   // Email
//   if (
//     email.value === "" ||
//     email.value === null ||
//     !validEmail.test(email.value)
//   ) {
//     errors.push("Email is invalid");
//   }
//   if (errors.length > 0) {
//     emailError.innerText = errors[1];
//   }

//   // Message
//   if (
//     message.value === "" ||
//     message.value === null ||
//     !message.value.length > 10 ||
//     !validString.test(message.value)
//   ) {
//     errors.push("Message is invalid");
//   }
//   if (errors.length > 0) {
//     messageError.innerText = errors[2];
//   }
// });
