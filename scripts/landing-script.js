


// Global favicon
const faviconApple = document.createElement("link");
faviconApple.setAttribute("rel", "apple-touch-icon");
faviconApple.setAttribute("sizes", "180x180");
faviconApple.setAttribute("href", "./apple-touch-icon.png");
document.head.appendChild(faviconApple);

const faviconIcon = document.createElement("link");
faviconIcon.setAttribute("rel", "icon");
faviconIcon.setAttribute("type", "image/png");
faviconIcon.setAttribute("sizes", "32x32");
faviconIcon.setAttribute("href", "./favicon-32x32.png");
document.head.appendChild(faviconIcon);

const faviconIcon16 = document.createElement("link");
faviconIcon16.setAttribute("rel", "icon");
faviconIcon16.setAttribute("type", "image/png");
faviconIcon16.setAttribute("sizes", "16x16");
faviconIcon16.setAttribute("href", ".favicon-16x16.png");
document.head.appendChild(faviconIcon16);

const faviconManifest = document.createElement("link");
faviconManifest.setAttribute("rel", "manifest");
faviconManifest.setAttribute("href", "./site.webmanifest");
document.head.appendChild(faviconManifest);
