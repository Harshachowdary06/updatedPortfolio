const mobileMenuBar = document.getElementById('mobileMenuBar');
const mobileMenuScreen = document.getElementById('mobileMenuScreen').style;
const menuData = document.getElementById('menuData');

mobileMenuBar.onclick = function (){
  if(mobileMenuScreen.display == 'grid'){
    mobileMenuScreen.display = 'none';
    menuData.innerText = 'Menu';
  }
  else{
    mobileMenuScreen.display='grid';
    menuData.innerText = 'Close Menu';
  }
};