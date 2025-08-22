const moonIcon = document.querySelector(".fa-moon");
const imageBoxes = document.querySelectorAll(".image-box");
const pElements = document.querySelectorAll("p");
const navbarList = document.querySelector(".navbar-list");
const aLinks = document.querySelectorAll(".navbar-link a");
const container = document.querySelector(".container");
const hElements = document.querySelectorAll(".section-title");
const navbarLinks = document.querySelector(".navbar-links");
const downPart = document.querySelector(".down-part");
const arrowLeft = document.querySelector(".fa-arrow-left");
let isDark = true;
window.addEventListener("scroll",()=>{
  if(window.scrollY > 50){
    downPart.classList.add("fixed");
  }
  else{
    downPart.classList.remove("fixed");
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
  arrowLeft.classList.toggle("night-effect");
  container.classList.toggle("night-effect");
  navbarList.classList.toggle("night-effect");
  hamburgerIcon.classList.toggle("night-effect");
  const changingTema = isDark ? "ri-sun-line" : "fa-solid fa-moon";
  moonIcon.className = changingTema;
  isDark = !isDark;
});

