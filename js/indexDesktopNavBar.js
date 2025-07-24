fetch('docs/desktopNavbar.txt')   // path to your file
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text(); // or .json() if it's JSON
  })
  .then(data => {
    document.getElementById('nav-bar-top').innerHTML = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  function closePopUP() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "none";
  console.log(" popupactionBar display set to none");
}

function openPopUp() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "flex";
}
