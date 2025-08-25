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
function checkStatus(){
  const dayLists = {
  1 : "Bazar ertəsi",
  2 : "Çərşənbə axşamı",
  3 : "Çərşənbə",
  4 : "Cümə axşamı",
  5 : "Cümə",
  6 : "Şənbə",
  7 : "Bazar"
}
  const textStatus = document.querySelector(".status p");
  const statusCircle = document.querySelector(".circle");
  const dayStatus = document.querySelector(".day-status");
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  dayStatus.innerText = `${dayLists[day]} / 9:00 : 00:00`
  if(hour >= 9 && hour < 24){
    statusCircle.className ="circle open";
    textStatus.innerText = "Açıqdır";
  }
  else{
    statusCircle.className ="circle close";
    textStatus.innerText = "Bağlıdır";
  }
}

checkStatus();
setInterval(checkStatus, 60000);