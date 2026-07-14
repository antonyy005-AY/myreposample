const popup = document.getElementById("popup");
const surpriseBtn = document.getElementById("surpriseBtn");
const closePopup = document.getElementById("closePopup");
const newMsgBtn = document.getElementById("newMsgBtn");
const mainMessage = document.getElementById("mainMessage");

const messages = [
  "Wishing you happiness, health, and success!",
  "May your day be as special as you are!",
  "Sending you lots of love and birthday cheer!"
];

let msgIndex = 0;

surpriseBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

newMsgBtn.addEventListener("click", () => {
  mainMessage.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});
