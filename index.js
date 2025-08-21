const copyIcon1 = document.querySelector(".copy1");
const copyIcon2 = document.querySelector(".copy2");
const phoneDetail = document.querySelector(".phone-detail");
const locationDetail = document.querySelector(".location-detail");
const copyInfo = document.querySelector(".copy-info");

function showCopyInfo(text) {
  navigator.clipboard.writeText(text);
  copyInfo.style.display = "flex"; 
  clearTimeout(copyInfo.timeoutId); 
  copyInfo.timeoutId = setTimeout(() => {
    copyInfo.style.display = "none";
  }, 1700);
}

copyIcon1.addEventListener("click", () => {
  const textPhone = phoneDetail.innerText;
  showCopyInfo(textPhone);
});

copyIcon2.addEventListener("click", () => {
  const textLocation = locationDetail.innerText;
  showCopyInfo(textLocation);
});