// Audio player at the bottom


// change audio controls to hidden at blog height
  const audioControl = document.querySelector(".blog-audio");

if (audioControl !== null) {
  window.onscroll = function () {
    hide_Audio_Controls();
    displayTopBtn();
  }
}

function hide_Audio_Controls() {
  const pageHeight = document.documentElement.scrollHeight;
  const footerHeight = footer.offsetHeight;
  const blogHeight = document.querySelector("#blogs").offsetHeight;
  const viewportHeight = window.innerHeight;
  
  let offControlHeight = pageHeight - (footerHeight + blogHeight + viewportHeight);

  if (window.scrollY > offControlHeight) {
    // console.log(window.scrollY);
    audioControl.style.opacity = 0;
  } else {
    audioControl.style.opacity = 1;
  }
}

