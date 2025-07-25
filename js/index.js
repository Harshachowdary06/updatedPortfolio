function closePopUP() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "none";
  console.log(" popupactionBar display set to none");
}

function openPopUp() {
  const popupActionNavBar = document.getElementById("popedUpActionBar");
  popupActionNavBar.style.display = "flex";
}

document.getElementById("scrollSection2").addEventListener("click", () => {
  document
    .getElementsByClassName("secondSection")[0]
    .scrollIntoView({ behavior: "smooth" });
  console.log("button clicked");
});

/*
=============
adding desktopmenu only if screen is big enough


*/

function addingDesktopMenubars(){
  fetch('data/fileList.json')
    .then(Response =>{
      if(!Response.ok) throw new Error('file not loaded');
      return Response.json();

    }).then(data =>{
        if(data.desktop && Array.isArray(data.desktop.cssFiles)){
          
            data.desktop.cssFiles.forEach(cssFile => {
                console.log(cssFile);
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssFile;
                document.head.appendChild(link);
                console.log("desktop menu updated");
            });
        }
    })
}