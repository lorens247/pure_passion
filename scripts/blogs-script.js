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




// Global favicon
const faviconApple = document.createElement("link");
faviconApple.setAttribute("rel", "apple-touch-icon");
faviconApple.setAttribute("sizes", "180x180");
faviconApple.setAttribute("href", "../../favicon/apple-touch-icon.png");
document.head.appendChild(faviconApple);

const faviconIcon = document.createElement("link");
faviconIcon.setAttribute("rel", "icon");
faviconIcon.setAttribute("type", "image/png");
faviconIcon.setAttribute("sizes", "32x32");
faviconIcon.setAttribute("href", "../../favicon/favicon-32x32.png");
document.head.appendChild(faviconIcon);

const faviconIcon16 = document.createElement("link");
faviconIcon16.setAttribute("rel", "icon");
faviconIcon16.setAttribute("type", "image/png");
faviconIcon16.setAttribute("sizes", "16x16");
faviconIcon16.setAttribute("href", "../../favicon/favicon-16x16.png");
document.head.appendChild(faviconIcon16);

const faviconManifest = document.createElement("link");
faviconManifest.setAttribute("rel", "manifest");
faviconManifest.setAttribute("href", "../../favicon/site.webmanifest");
document.head.appendChild(faviconManifest);
