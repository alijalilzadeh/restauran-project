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
const arrowUp = document.querySelector(".arrow-up");
const addClick = document.querySelectorAll(".fa-plus");
let isDark = true;

window.addEventListener("scroll", () => {
  if (window.scrollY > 72) {
    downPart.classList.add("fixed");
  }
  else {
    arrowUp.classList.add("hidden");
    downPart.classList.remove("fixed");
  }
  if (window.scrollY > 110) {
    arrowUp.classList.remove("hidden");
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
  const changingTema = isDark ? "ri-sun-line" : "fa-solid fa-moon";
  moonIcon.className = changingTema;
  isDark = !isDark;
});
let counter = 0;
let priceBasket = 0;
addClick.forEach(click => {
   
  click.addEventListener("click", () => {
    counter++;
    const audioClick = document.querySelector(".clickaudio");
    audioClick.play();
    const counterPart = document.querySelector(".counter");
    const basketPart = document.querySelector(".left-side span");

    const parentBox = click.parentElement;
    const foodPriceEl = parentBox.querySelector(".food-price");
    const aznCur = document.querySelector(".food-price span").textContent;
    if (foodPriceEl) {
      const foodPriceText = foodPriceEl.textContent;
      const numericPrice = parseFloat(foodPriceText.replace("AZN", "").replace(",", "."));

      priceBasket += numericPrice;

      counterPart.innerText = counter;
      basketPart.innerText = priceBasket + " " + aznCur;
    }
  });
});

