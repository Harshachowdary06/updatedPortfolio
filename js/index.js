console.log("my script is attached");

function closePopUP() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "none";
  console.log(" popupactionBar display set to none");
}

function openPopUp() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "flex";
}

document.getElementById("scrollDown").addEventListener("click", () => {
  document
    .getElementsByClassName("secondSection")[0]
    .scrollIntoView({ behavior: "smooth" });
});
