// Topics
// Remove Elements

// Tasks
//  Remove alternate languages from the home page languages listed

const lang = document.getElementById("SIvCob").children;
// loop over language array and remove 1/2 language
function remove(lang) {
  for (let i = 0; i < lang.length / 2; i++) {
    lang[i].remove();
  }
}
remove(lang);
