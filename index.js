const moonIcon = document.querySelector(".fa-moon");
const imageBoxes = document.querySelectorAll(".image-box");
const pElements = document.querySelectorAll("p");
const navbarList = document.querySelector(".navbar-list");
const aLinks = document.querySelectorAll(".navbar-link a");
const container = document.querySelector(".container");
let isDark = true;
moonIcon.addEventListener("click", () => {
  imageBoxes.forEach(box => {
    box.classList.toggle("night-effect");
    box.classList.toggle("no-shadow");

  });
  pElements.forEach(pElement => {
    pElement.classList.toggle("night-effect");
  })
  aLinks.forEach(aLink => {
    aLink.classList.toggle("night-effect");

  })
  container.classList.toggle("night-effect");
  navbarList.classList.toggle("night-effect");
  const changingTema = isDark ? "ri-sun-line" : "fa-solid fa-moon";
  moonIcon.className = changingTema;
  isDark = !isDark;
});


