function closePopUP() {
    const popupActionNavBar = document.getElementById('popedUpActionBar');
    popupActionNavBar.style.display = 'none';
    console.log(" popupactionBar display set to none");
}

function openPopUp() {
    const popupActionNavBar = document.getElementById('popedUpActionBar');
    popupActionNavBar.style.display = 'flex';
}
// for time delay


 connect.addEventListener('mouseenter', () => {
    openTimeout = setTimeout(openPopUp, 1000); // 1.5 seconds delay
  });

  connect.addEventListener('mouseleave', () => {
    clearTimeout(openTimeout); // cancel if mouse leaves early
    console.log('Hover cancelled before opening popup');
  });
