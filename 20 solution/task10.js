// topic
//   querySelector, mouseover, click eventListener,  callback function, style,

// task
// Target the button and change background colour on mouseover

const button = document.querySelector(".col-lg-8 .btn-cta-big");
const buttonText = document.querySelector(
  ".col-lg-8 .btn-cta-big .login-btn-text"
);

// on hover
button.addEventListener("mouseover", () => {
  buttonText.style.background = "red";
});

// remove hover effect 
button.addEventListener("mouseout", () => {
  buttonText.style.background = "transparent";
});
