// Topics
// - Query Selctory, Inner HTML

// Tasks
//     Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

// target the head
const heading = document.querySelectorAll(".crayons-subtitle-2")[1];
// target the description
const description = document.querySelectorAll(".color-base-70")[1];

//
heading.textContent = "Mangesh Thakre";
description.textContent =
  "I’m focused on building responsive applications while learning back-end technologies.";
