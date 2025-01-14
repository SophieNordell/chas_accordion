// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;

// addEventListener
const section = document.querySelectorAll(".title");

section.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
});
