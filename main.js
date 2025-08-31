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
let totalBasket = 0;

addClick.forEach(click => {
  click.addEventListener("click", () => {
    counter++;
    const audioClick = document.querySelector(".clickaudio");
    audioClick.play();

    const parentBox = click.parentElement;
    const foodPriceEl = parentBox.querySelector(".food-price");
    const aznCur = document.querySelector(".food-price span").textContent;

    let foodPriceText = foodPriceEl.textContent;
    let editItem = parseFloat(foodPriceText.replace("AZN", "").replace(",", "."));
    totalBasket += editItem;

    editTotal();

    const basketBox = click.parentElement.parentElement;
    const basketImage = basketBox.querySelector("img");
    const basketName = basketBox.querySelector(".food-name").textContent;
    const basketPrice = basketBox.querySelector(".food-price").textContent;

    displayBasketBox(basketImage.src, basketName, basketPrice);
  });
});

function displayBasketBox(basketImage, basketName, basketPrice) {
  const orderBox = document.querySelector(".orders-box");
  const newItem = document.createElement("div");
  newItem.classList.add("basket-content");

  newItem.innerHTML = `
    <div class="img-part">
      <img src="${basketImage}" alt="Pizza Photo" class="basket-img">
    </div>
    <div class="detail-part">
      <p class="basket-name">${basketName}</p>
      <p class="basket-price">${basketPrice}</p>
      <div class="basket-counter">
        <span class="minus">-</span>
        <span class="changer">1</span>
        <span class="plus">+</span>
      </div>
    </div>
    <span><i class="fa-solid fa-trash"></i></span>
  `;

  
  const deleteItem = newItem.querySelector(".fa-trash");
  deleteItem.addEventListener("click", () => {
    deleteBasketBox(newItem, basketPrice);
  });

  const plusEdit = newItem.querySelector(".plus");
  const minusEdit = newItem.querySelector(".minus");
  const counterEdit = newItem.querySelector(".changer");

  let itemCount = 1;

  plusEdit.addEventListener("click", () => {
    itemCount++;
    counter++;
    counterEdit.innerText = itemCount;

    let numeric = parseFloat(basketPrice.replace("AZN", "").replace(",", "."));
    totalBasket += numeric;

    editTotal();
  });

  minusEdit.addEventListener("click", () => {
    if (itemCount > 1) {
      itemCount--;
      counter--;
      counterEdit.innerText = itemCount;

      let numeric = parseFloat(basketPrice.replace("AZN", "").replace(",", "."));
      totalBasket -= numeric;

      editTotal();
    }
  });

  orderBox.appendChild(newItem);
  orderBox.scrollTop = orderBox.scrollHeight;
}

function deleteBasketBox(itemElement, price) {
  itemElement.remove();
  counter--;

  let numeric = parseFloat(price.replace("AZN", "").replace(",", "."));
  totalBasket -= numeric;

  if (totalBasket < 0) totalBasket = 0;
  if (counter < 0) counter = 0;

  editTotal();
}

function editTotal() {
  const counterPart = document.querySelector(".counter");
  const basketPart = document.querySelector(".left-side span");
  const emptyCheck = document.querySelector(".empty-box");

  const basketSubTotal = document.querySelector(".subtotal-price");
  const basketTotal = document.querySelector(".total-price");
  const aznCur = document.querySelector(".food-price span").textContent;

  basketPart.innerText = totalBasket + " " + aznCur;
  basketSubTotal.innerText = totalBasket + " " + aznCur;
  basketTotal.innerText = totalBasket + " " + aznCur;
  counterPart.innerText = counter;

  if (totalBasket === 0) {
    emptyCheck.style.display = "block";
  } else {
    emptyCheck.style.display = "none";
  }
}


basketIcon.addEventListener("click", () => {
  basketSideBar.classList.remove("closed");
  basketSideBar.classList.add("opened");
})

xMark.addEventListener("click", () => {
  basketSideBar.classList.remove("opened");
  basketSideBar.classList.add("closed");
});