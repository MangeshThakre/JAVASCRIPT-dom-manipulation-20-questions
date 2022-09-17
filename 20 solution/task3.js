// topics
// - Get Element By Id, Create Element, Create Text Node, Append Child

// Tasks
//  Add another FAQ 'My New FAQ' to the list

const hcfeContent = document.getElementById("hcfe-content");
const dropdown = hcfeContent.querySelector(
  ".primary-container .page-width-container .main-content .article .accordion-homepage"
);
const item = document.createElement("section");
item.className = "parent";
const text = (item.innerHTML = "<h3>My New FAQ</h3>");
console.log(dropdown.append(item));
