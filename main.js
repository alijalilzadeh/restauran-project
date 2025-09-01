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
  const basketItems = orderBox.querySelectorAll(".basket-content");

  for (let item of basketItems) {
    const name = item.querySelector(".basket-name").textContent;
    if (name === basketName) {
      let countSpan = item.querySelector(".changer");
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;
      return; 
    }
  }

  const newItem = document.createElement("div");
  newItem.classList.add("basket-content");
  newItem.innerHTML = `
    <div class="img-part">
      <img src="${basketImage}" alt="Food Photo" class="basket-img">
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
  const singleItemPrice = parseFloat(basketPrice.replace("AZN", "").replace(",", "."));

  deleteItem.addEventListener("click", () => {
    const itemElement = deleteItem.closest(".basket-content");
    const itemCount = parseInt(itemElement.querySelector(".changer").textContent);
    deleteBasketBox(itemElement, singleItemPrice, itemCount);
  });

  const plusEdit = newItem.querySelector(".plus");
  const minusEdit = newItem.querySelector(".minus");
  const counterEdit = newItem.querySelector(".changer");

  plusEdit.addEventListener("click", () => {
    let currentCount = parseInt(counterEdit.textContent);
    currentCount++;
    counter++;
    counterEdit.innerText = currentCount;

    let numeric = parseFloat(basketPrice.replace("AZN", "").replace(",", "."));
    totalBasket += numeric;

    editTotal();
  });

  minusEdit.addEventListener("click", () => {
    let currentCount = parseInt(counterEdit.textContent);
    if (currentCount > 1) {
      currentCount--;
      counter--;
      counterEdit.innerText = currentCount;

      let numeric = parseFloat(basketPrice.replace("AZN", "").replace(",", "."));
      totalBasket -= numeric;

      editTotal();
    } else if (currentCount === 1) {
      const itemElement = minusEdit.closest(".basket-content");
      deleteBasketBox(itemElement, singleItemPrice, 1);
    }
  });

  orderBox.appendChild(newItem);
  orderBox.scrollTop = orderBox.scrollHeight;
}

function deleteBasketBox(itemElement, price, itemCount) {
  itemElement.remove();
  counter -= itemCount;

  totalBasket -= price * itemCount;

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
  const aznCur = "AZN"; 

  basketPart.innerText = totalBasket.toFixed(2) + " " + aznCur;
  basketSubTotal.innerText = totalBasket.toFixed(2) + " " + aznCur;
  basketTotal.innerText = totalBasket.toFixed(2) + " " + aznCur;
  counterPart.innerText = counter;

  if (totalBasket === 0) {
    emptyCheck.style.display = "flex";
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

