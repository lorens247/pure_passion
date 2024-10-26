// Global Font

const googleApis = document.createElement('link');
googleApis.setAttribute("rel", "preconnect");
googleApis.setAttribute("href", "https://fonts.googleapis.com");
document.head.appendChild(googleApis);

const gstatic = document.createElement('link');
gstatic.setAttribute("rel", "preconnect");
gstatic.setAttribute("href", "https://fonts.gstatic.com");
gstatic.setAttribute("crossorigin", "");
document.head.appendChild(gstatic);

const gFont = document.createElement('link');
gFont.setAttribute("rel", "stylesheet");
gFont.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
document.head.appendChild(gFont);



// Global Nav
const nav = document.querySelector("nav");
nav.innerHTML = `
  <div class="nav">
    <div class="wrapper">
      <div class="logo">
        <a href="./">
          <span>Pure</span>
          <span>Passion</span>
        </a>
      </div>
      <div class="nav__items">
      <div id="mode">
            <!-- system -->
            <svg id="system" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z" />
            </svg>
            <!-- moon -->
            <svg id="moon" style="display: none;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>

            <!-- sun -->
            <svg id="sun" style="display: none;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
              <path
                d="M 12 0 C 11.4 0 11 0.4 11 1 L 11 2 C 11 2.6 11.4 3 12 3 C 12.6 3 13 2.6 13 2 L 13 1 C 13 0.4 12.6 0 12 0 z M 4.1992188 3.1992188 C 3.9492188 3.1992187 3.7 3.3 3.5 3.5 C 3.1 3.9 3.1 4.5003906 3.5 4.9003906 L 4.1992188 5.5996094 C 4.5992187 5.9996094 5.1996094 5.9996094 5.5996094 5.5996094 C 5.9996094 5.1996094 5.9996094 4.5992188 5.5996094 4.1992188 L 4.9003906 3.5 C 4.7003906 3.3 4.4492188 3.1992188 4.1992188 3.1992188 z M 19.800781 3.1992188 C 19.550781 3.1992188 19.299609 3.3 19.099609 3.5 L 18.400391 4.1992188 C 18.000391 4.5992187 18.000391 5.1996094 18.400391 5.5996094 C 18.800391 5.9996094 19.400781 5.9996094 19.800781 5.5996094 L 20.5 4.9003906 C 20.9 4.5003906 20.9 3.9 20.5 3.5 C 20.3 3.3 20.050781 3.1992188 19.800781 3.1992188 z M 12 5 A 7 7 0 0 0 5 12 A 7 7 0 0 0 12 19 A 7 7 0 0 0 19 12 A 7 7 0 0 0 12 5 z M 1 11 C 0.4 11 0 11.4 0 12 C 0 12.6 0.4 13 1 13 L 2 13 C 2.6 13 3 12.6 3 12 C 3 11.4 2.6 11 2 11 L 1 11 z M 22 11 C 21.4 11 21 11.4 21 12 C 21 12.6 21.4 13 22 13 L 23 13 C 23.6 13 24 12.6 24 12 C 24 11.4 23.6 11 23 11 L 22 11 z M 4.9003906 18.099609 C 4.6503906 18.099609 4.3992188 18.200391 4.1992188 18.400391 L 3.5 19.099609 C 3.1 19.499609 3.1 20.1 3.5 20.5 C 3.9 20.9 4.5003906 20.9 4.9003906 20.5 L 5.5996094 19.800781 C 5.9996094 19.400781 5.9996094 18.800391 5.5996094 18.400391 C 5.3996094 18.200391 5.1503906 18.099609 4.9003906 18.099609 z M 19.099609 18.099609 C 18.849609 18.099609 18.600391 18.200391 18.400391 18.400391 C 18.000391 18.800391 18.000391 19.400781 18.400391 19.800781 L 19.099609 20.5 C 19.499609 20.9 20.1 20.9 20.5 20.5 C 20.9 20.1 20.9 19.499609 20.5 19.099609 L 19.800781 18.400391 C 19.600781 18.200391 19.349609 18.099609 19.099609 18.099609 z M 12 21 C 11.4 21 11 21.4 11 22 L 11 23 C 11 23.6 11.4 24 12 24 C 12.6 24 13 23.6 13 23 L 13 22 C 13 21.4 12.6 21 12 21 z">
              </path>
            </svg>
        </div>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul>
          <li><a href="./blogs.html">Blogs</a></li>
          <li><a href="./events.html">Events</a></li>
          <li><a href="./about-us.html">About Us</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const hamburger = document.querySelector("nav .hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});




// Scroll to Top
const topBtn = document.querySelector(".to-top");

if (topBtn !== null) {
  topBtn.innerHTML= `
  <div class="wrapper">
  <?xml version="1.0" encoding="utf-8"?>
  <svg width="6.247" height="10.536" viewBox="0 0 6.247 10.536" fill="none" stroke="none" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
  <path id="Path" d="M2.4158 5.2458C2.4158 5.2458 5.9558 1.7058 5.9558 1.7058C6.34352 1.31576 6.34352 0.685836 5.9558 0.295798C5.76803 0.106486 5.51244 0 5.2458 0C4.97916 0 4.72357 0.106485 4.5358 0.295798C4.5358 0.295798 0.295798 4.5358 0.295798 4.5358C0.106485 4.72357 0 4.97916 0 5.2458C0 5.51244 0.106485 5.76803 0.295798 5.9558C0.295798 5.9558 4.5358 10.2458 4.5358 10.2458C4.72452 10.433 4.97999 10.5373 5.2458 10.5358C5.5116 10.5373 5.76708 10.433 5.9558 10.2458C6.34352 9.85576 6.34352 9.22584 5.9558 8.8358C5.9558 8.8358 2.4158 5.2458 2.4158 5.2458Z" style=";fill-rule:evenodd;mix-blend-mode:normal;" />
  </svg>
  </div>
  `;

  topBtn.addEventListener("click", toTop);
  
  window.onscroll = function() {
    displayTopBtn();
  }
}

function displayTopBtn() {
  if (window.scrollY > 800) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

function toTop() {
  window.scrollTo(0, 0);
}



// Global Footer
const footer = document.querySelector("footer");
footer.innerHTML = `
<div class="nav">
<div class="logo">
  <a href="./">
    <span>Pure</span>
    <span>Passion</span>
  </a>
</div>
<div class="nav__items">
  <ul>
    <li><a href="./blogs.html">Blogs</a></li>
    <li><a href="./events.html">Events</a></li>
    <li><a href="./about-us.html">About Us</a></li>
    <li><a href="./contact.html">Contact</a></li>
  </ul>
</div>
<div class="socials">
  <p class="subtitle">FOLLOW US</p>
  <ul>
    <li><!-- X icon -->
      <a href="#" target="_blank" rel="noopener noreferrer"><?xml version="1.0" encoding="utf-8"?>
        <svg width="16" height="14.462" viewBox="0 0 16 14.462" fill="none" stroke="none" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
          <path id="Shape" d="M12.6009 0L15.0542 0L9.69434 6.12625L16 14.4625L11.0626 14.4625L7.19566 9.40647L2.77091 14.4625L0.315906 14.4625L6.04887 7.90987L0 0L5.06247 0L8.55797 4.62125L12.6009 0L12.6009 0ZM11.7398 12.9939L13.0993 12.9939L4.32385 1.39148L2.8651 1.39148L11.7398 12.9939L11.7398 12.9939Z"/>
        </svg></a>
    </li>
    <li><!-- instagram icon -->
      <a href="#" target="_blank" rel="noopener noreferrer">
        <svg 
          width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="none" version="1.1">
          <path id="Shape" d="M5.33321 8.00491C5.33062 6.53238 6.52244 5.33616 7.99469 5.33359C9.46722 5.33072 10.6637 6.522 10.6665 7.99482C10.6694 9.46763 9.47757 10.6636 8.00478 10.6664C6.53253 10.6693 5.33606 9.47773 5.33321 8.00491C5.33321 8.00491 5.33321 8.00491 5.33321 8.00491ZM3.89234 8.00779C3.89674 10.2766 5.7394 12.1118 8.00766 12.1073C10.2762 12.103 12.1124 10.2608 12.1079 7.99198C12.1035 5.72394 10.2606 3.88772 7.99185 3.89216C5.72356 3.89657 3.88793 5.73947 3.89234 8.00779C3.89234 8.00779 3.89234 8.00779 3.89234 8.00779ZM11.3018 3.72366C11.3029 4.25347 11.7336 4.68247 12.2635 4.68144C12.7935 4.68038 13.2225 4.24985 13.2217 3.72003C13.2207 3.19022 12.7899 2.76097 12.2598 2.76203C11.7298 2.76306 11.3008 3.19384 11.3018 3.72366C11.3018 3.72366 11.3018 3.72366 11.3018 3.72366ZM4.78009 14.5174C4.00015 14.4835 3.57662 14.3539 3.29437 14.2453C2.92059 14.1006 2.65387 13.9272 2.37315 13.6486C2.09296 13.3689 1.91902 13.103 1.77308 12.73C1.66346 12.4477 1.53152 12.0247 1.49496 11.2447C1.4553 10.4015 1.44624 10.1485 1.44237 8.01244C1.43821 5.87688 1.44599 5.62388 1.4828 4.77991C1.51621 4.0005 1.64662 3.57641 1.75496 3.29441C1.89959 2.92012 2.07249 2.6539 2.35165 2.37322C2.6313 2.0925 2.89724 1.91909 3.27049 1.77315C3.55253 1.66297 3.97553 1.53206 4.75521 1.49503C5.5989 1.45509 5.85162 1.44656 7.98719 1.4424C10.1232 1.43825 10.3762 1.44578 11.2202 1.48284C11.9996 1.51678 12.4236 1.64587 12.7054 1.755C13.0794 1.89962 13.3461 2.07203 13.6266 2.35169C13.907 2.63137 14.081 2.89678 14.2269 3.27084C14.337 3.55206 14.468 3.97559 14.5048 4.75503C14.5449 5.59872 14.554 5.85172 14.5579 7.98729C14.562 10.1234 14.5543 10.3764 14.5172 11.2199C14.4833 11.9998 14.3539 12.4236 14.2451 12.7061C14.1004 13.0796 13.9275 13.3464 13.6481 13.6271C13.3687 13.9067 13.1028 14.0812 12.7293 14.2271C12.4477 14.337 12.0242 14.4682 11.2451 14.5052C10.4014 14.5449 10.1486 14.554 8.01231 14.5579C5.87675 14.562 5.62406 14.554 4.78009 14.5174C4.78009 14.5174 4.78009 14.5174 4.78009 14.5174ZM4.68678 0.0553985C3.83556 0.0955861 3.25418 0.231899 2.74612 0.430993C2.22021 0.636025 1.7744 0.910775 1.33093 1.35609C0.886897 1.80165 0.614209 2.24825 0.41074 2.77468C0.213771 3.28403 0.0802704 3.86569 0.0426765 4.71744C0.00536397 5.57075 -0.00319854 5.84291 0.000957713 8.01529C0.00511397 10.1874 0.0146765 10.4601 0.0553641 11.3137C0.0960516 12.1646 0.231896 12.7458 0.430958 13.254C0.63624 13.78 0.910741 14.2256 1.3563 14.6693C1.80162 15.1131 2.24849 15.3855 2.77518 15.5893C3.28399 15.786 3.86587 15.92 4.71737 15.9573C5.57065 15.9949 5.84306 16.0032 8.01491 15.9991C10.1878 15.9949 10.4602 15.9853 11.3135 15.9449C12.1647 15.9042 12.7456 15.7679 13.2541 15.5693C13.78 15.3635 14.2259 15.0895 14.6694 14.6439C15.1129 14.1986 15.3855 13.7517 15.589 13.225C15.786 12.7162 15.92 12.1343 15.957 11.2834C15.9944 10.4295 16.0032 10.1568 15.999 7.98469C15.9949 5.81232 15.9851 5.54016 15.9446 4.68713C15.9042 3.83537 15.7679 3.2545 15.569 2.74593C15.3635 2.22003 15.0893 1.77468 14.644 1.33068C14.1987 0.887182 13.7518 0.613962 13.2251 0.411025C12.716 0.214024 12.1344 0.0797739 11.2829 0.0429614C10.4296 0.0051172 10.1572 -0.00316407 7.98457 0.000960941C5.81247 0.0051172 5.54006 0.0144297 4.68678 0.0553985C4.68678 0.0553985 4.68678 0.0553985 4.68678 0.0553985Z"/>
        </svg></a>
    </li>
    <li> <!-- facebook icon -->
      <a href="#" target="_blank" rel="noopener noreferrer">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="none" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <rect id="rect_2" x="0" y="0" width="16" height="16" />
          <clipPath id="clip_path_3">
            <use xlink:href="#rect_2" />
          </clipPath>
        </defs>
        <g id="facebook" opacity="1" clip-path="url(#clip_path_3)">
          <g>
            <use xlink:href="#path_1" style="mix-blend-mode:normal;" />
            <g>
              <g id="Group" transform="translate(0 -0)">
                <path id="facebook" d="M16 8.02934C16 3.59475 12.4184 0 8 0C3.58161 0 0 3.59475 0 8.02934C0 11.7951 2.58295 14.9545 6.06743 15.8224C6.06743 15.8224 6.06743 10.4829 6.06743 10.4829L4.41776 10.4829L4.41776 8.02934L6.06743 8.02934C6.06743 8.02934 6.06743 6.97212 6.06743 6.97212C6.06743 4.23899 7.29965 2.97228 9.97281 2.97228C10.4798 2.97228 11.3543 3.07229 11.7121 3.17198C11.7121 3.17198 11.7121 5.39622 11.7121 5.39622C11.5231 5.37635 11.1953 5.36625 10.7879 5.36625C9.47615 5.36625 8.96912 5.86505 8.96912 7.16173C8.96912 7.16173 8.96912 8.02934 8.96912 8.02934L11.5822 8.02934L11.1334 10.4829L8.96912 10.4829C8.96912 10.4829 8.96912 16 8.96912 16C12.9305 15.5198 16 12.1346 16 8.02934C16 8.02934 16 8.02934 16 8.02934Z"/>
              </g>
            </g>
          </g>
        </g>
      </svg>
  </a>
    </li>
    <li><!-- youtube icon -->
      <a href="#" target="_blank" rel="noopener noreferrer"><?xml version="1.0" encoding="utf-8"?>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="none" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
          <path id="youtube" d="M15.837 2.42807C15.837 2.42807 15.6808 1.3252 15.2001 0.84095C14.5909 0.204025 13.9088 0.1999 13.597 0.163C11.3597 0 7.9994 0 7.9994 0C7.9994 0 7.9935 0 7.9935 0C7.9935 0 4.6347 0 2.39618 0.163C2.08318 0.201075 1.40198 0.20375 0.793101 0.84095C0.312101 1.3252 0.159151 2.42807 0.159151 2.42807C0.159151 2.42807 0 3.72227 0 5.01915C0 5.01915 0 6.23187 0 6.23187C0 7.52608 0.15915 8.82295 0.15915 8.82295C0.15915 8.82295 0.31535 9.9258 0.7931 10.4109C1.40198 11.0479 2.20218 11.0272 2.55948 11.0951C3.8404 11.2174 8.00058 11.2543 8.00058 11.2543C8.00058 11.2543 11.3638 11.2483 13.6011 11.0883C13.9141 11.0514 14.595 11.0476 15.2042 10.4103C15.6852 9.9261 15.8411 8.82205 15.8411 8.82205C15.8411 8.82205 16.0003 7.52787 16.0003 6.23097C16.0003 6.23097 16.0003 5.01827 16.0003 5.01827C15.9971 3.72405 15.8379 2.4272 15.8379 2.4272C15.8379 2.4272 15.837 2.42807 15.837 2.42807C15.837 2.42807 15.837 2.42807 15.837 2.42807ZM6.342 7.70325L6.342 3.20645L10.6643 5.46238L6.342 7.70325L6.342 7.70325Z" transform="translate(-0 2.373)" />
        </svg>
      </a>
    </li>
  </ul>
</div>
</div>

<small class="copyright">
Copyright © 2024 . Pure Passion . All rights reserved
</small>
`;



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
faviconIcon16.setAttribute("href", "./favicon-16x16.png");
document.head.appendChild(faviconIcon16);

const faviconManifest = document.createElement("link");
faviconManifest.setAttribute("rel", "manifest");
faviconManifest.setAttribute("href", "./site.webmanifest");
document.head.appendChild(faviconManifest);



// Light mode control

document.getElementById('mode').addEventListener('click', function () {
  const html = document.documentElement;
  const systemIcon = document.getElementById('system');
  const sunIcon = document.getElementById('sun');
  const moonIcon = document.getElementById('moon');

  if (html.classList.contains('light-mode')) {
    // Switch to dark mode
    html.classList.remove('light-mode');
    html.classList.add('dark-mode');

    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
    systemIcon.style.display = 'none';
  } else if (html.classList.contains('dark-mode')) {
    // Switch to system mode
    html.classList.remove('dark-mode');
    html.classList.add('system-mode');

    sunIcon.style.display = 'none';
    moonIcon.style.display = 'none';
    systemIcon.style.display = 'block';
  } else {
    // Switch to light mode
    html.classList.remove('system-mode');
    html.classList.add('light-mode');

    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
    systemIcon.style.display = 'none';
  }
});