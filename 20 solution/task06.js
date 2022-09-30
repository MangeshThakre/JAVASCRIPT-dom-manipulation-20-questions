// Topics
// -   Query Selector, Event listeners, Changing Styles

// Tasks
//  Target the search box and on hover change thebackground color to red.

const searchBox = document.querySelector(".searchinput___zXLAR");
searchBox.addEventListener("mouseover", (e) => {
  searchBox.style.background = "red";
});
searchBox.addEventListener("mouseout", (e) => {
  searchBox.style.background = "white";
});
