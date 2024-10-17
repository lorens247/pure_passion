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




// Blog favicon href correction
const favicons = document.querySelectorAll("link");

favicons.forEach((favicon) => {
  if (favicon.rel === "apple-touch-icon") {
    favicon.setAttribute("href", "../../apple-touch-icon.png");
  } 
  
  if (favicon.rel === "manifest") {
    favicon.setAttribute("href", "../../site.webmanifest");
  }

  if (favicon.type === "image/png") {
    favicon.setAttribute("href", "../../favicon-32x32.png");
  }
})




// home nav href correction
const homeLink = document.querySelectorAll(".logo a");

if (homeLink !== null) {
  homeLink.forEach((link) => {
    link.href = "../../";
  });
}

// contact link correction
const contactLinks = document.querySelectorAll(".nav__items li:last-child a");
console.log(contactLinks);

if (contactLinks !== null) {
  contactLinks.forEach((link) => {
    link.setAttribute("href", "../../contact.html");
  })
}