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
const basketIcon = document.querySelector(".right-side");
const basketSideBar = document.querySelector(".basket-sidebar");
const xMark = document.querySelector(".fa-xmark");
const basketUpgrade = document.querySelectorAll(".basket-counter .upgrade");
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
    const emptyCheck = document.querySelector(".empty-box");

    const basketSubTotal = document.querySelector(".subtotal-price");
    const basketTotal = document.querySelector(".total-price");

    const parentBox = click.parentElement;
    const foodPriceEl = parentBox.querySelector(".food-price");
    const aznCur = document.querySelector(".food-price span").textContent;

    const numericPrice = calculatePrice(foodPriceEl);

    priceBasket += numericPrice;

    counterPart.innerText = counter;
    basketPart.innerText = priceBasket + " " + aznCur;

    basketSubTotal.innerText = priceBasket + " " + aznCur;
    basketTotal.innerText = priceBasket + " " + aznCur;
    if (basketTotal.innerText == "0.00" + " " + aznCur) {
      emptyCheck.style.display = "block";
    }
    else {
      emptyCheck.style.display = "none";
    }

    const basketBox = click.parentElement.parentElement;
    const basketImage = basketBox.querySelector("img").src;
    const basketName = basketBox.querySelector(".food-name").textContent;
    const basketPrice = basketBox.querySelector(".food-price").textContent;
    displayBasket(basketImage,basketName,basketPrice)
    console.log(basketImage)
    console.log(basketName)
    console.log(basketPrice)
    console.log(basketBox)
    // displayBasket();

  });
});

// function  displayBasket(basketImage,basketName,basketPrice){
//   const basketContent = document.querySelector(".orders-box");

//   basketContent.innerHTML += 
//   `
//   <div class="basket-content">
//           <div class="img-part">
//              <img src="${basketImage}" alt="Pizza Photo" class="basket-img">
//            </div>
//           <div class="detail-part">
//              <p class="basket-name">${basketName}</p>
//              <p class="basket-price">${basketPrice}</p>
//              <div class="basket-counter">
//                <span class="minus">-</span>
//               <span class ="changer">1</span>
//                <span class="plus">+</span>
//              </div>
//            </div>
//            <span><i class="fa-solid fa-trash"></i></span>
//          </div>
  
  
//   `
//    basketContent.scrollTop = basketContent.scrollHeight;
// }

function calculatePrice(element) {
  let foodPriceText = element.textContent;
  let numeric = parseFloat(foodPriceText.replace("AZN", "").replace(",", "."));

  return numeric;
}

basketIcon.addEventListener("click", () => {
  basketSideBar.classList.remove("closed");
  basketSideBar.classList.add("opened");
})

xMark.addEventListener("click", () => {
  basketSideBar.classList.remove("opened");
  basketSideBar.classList.add("closed");
})

/*
<div class="image-box">
  <img src="Pizza/funghipolo.jpg" alt="Pizza Photo">
  <p class="food-name">Funghi polo</p>
  <div class="add-price">
    <p class="food-price">13 <span>&#8380;</span></p>
     <i class="fa-solid fa-plus"></i>
  </div>
</div>
*/


       




 // let count = 1;
    // let counterElement = document.querySelector(".basket-counter .changer");
    // basketItem.querySelector(".minus").addEventListener("click", () => {
    //   count--;
    //   counter = count;
    //   if (count < 0) {
    //     count = 1;
    //   }
    //   counterElement.innerText = counter;
    //   priceBasket -= numericPrice;

    //   counterPart.innerText = counter;
    //   basketPart.innerText = priceBasket + " " + aznCur;

    //   basketSubTotal.innerText = priceBasket + " " + aznCur;
    //   basketTotal.innerText = priceBasket + " " + aznCur;
    // }
    // );
    // basketItem.querySelector(".plus").addEventListener("click", () => {
    //   count++;
    //   counterElement.innerText = count;
    //   counter = count;
    //   counterElement.innerText = count;
    //   priceBasket += numericPrice;
    //   counterPart.innerText = counter;
    //   basketPart.innerText = priceBasket + " " + aznCur;

    //   basketSubTotal.innerText = priceBasket + " " + aznCur;
    //   basketTotal.innerText = priceBasket + " " + aznCur;
    // });