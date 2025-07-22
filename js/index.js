console.log("my script is attached");

function closePopUP() {
    window.alert("in close");
    const popupActionNavBar = document.getElementById('popedUpActionBar');
    popupActionNavBar.style.display = 'none';
    console.log(" popupactionBar display set to none");
}

function openPopUp() {
    window.alert("in pop");
    const popupActionNavBar = document.getElementById('popedUpActionBar');
    popupActionNavBar.style.display = 'flex';
}
// for time delay
/*
 connect.addEventListener('mouseenter', () => {
    openTimeout = setTimeout(openPopUp, 1000); // 1.5 seconds delay
  });

  connect.addEventListener('mouseleave', () => {
    clearTimeout(openTimeout); // cancel if mouse leaves early
    console.log('Hover cancelled before opening popup');
  });
  */
 /*

  document.addEventListener('DOMContentLoaded', function() {
  const block = document.querySelector('.firstSection');
  const screenHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    // Check if scroll position is greater than one screen height
    if (window.scrollY > screenHeight) {
      block.style.opacity = '0';
      // Optional: remove the element completely after fade out
      setTimeout(() => {
        block.style.display = 'none';
      }, 300); // Match this with the CSS transition duration
    } else {
      block.style.opacity = '1';
      block.style.display = 'block';
    }
  });
});
*/