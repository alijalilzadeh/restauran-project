const moonIcon = document.querySelector(".fa-moon");
const imageBoxes = document.querySelectorAll(".image-box");
const pElements = document.querySelectorAll("p");
const navbarList = document.querySelector(".navbar-list");
const aLinks = document.querySelectorAll(".navbar-link a");
const container = document.querySelector(".container");
const hElements = document.querySelectorAll(".section-title");
const navbarLinks = document.querySelector(".navbar-links");
const hamburgerIcon = document.querySelector(".fa-bars");
let isDark = true;
let isOpen = false;
hamburgerIcon.addEventListener("click", () => {
  navbarLinks.classList.toggle("open");
  const isOpenCheck = isOpen ? "none" : "flex";
  navbarLinks.style.display = isOpenCheck;
  isOpen = !isOpen;
    if (isOpen) {
   
    hamburgerIcon.className = "fa-solid fa-xmark";
  } else {
    hamburgerIcon.className = "fa-solid fa-bars";
      
  }
})
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
  hElements.forEach(hElement => {
    hElement.classList.toggle("night-effect");
  })
  container.classList.toggle("night-effect");
  navbarList.classList.toggle("night-effect");
  hamburgerIcon.classList.toggle("night-effect");
  const changingTema = isDark ? "ri-sun-line" : "fa-solid fa-moon";
  moonIcon.className = changingTema;
  isDark = !isDark;

});


