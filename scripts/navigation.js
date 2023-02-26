const mediaPage = document.getElementById('media-page');
const mediaContent = document.querySelector('.media-page');
const introPage = document.querySelector('.intro-page');

const navLeftPosPerc = 25;
const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;
const navigation = document.querySelector('.navigation');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');
let isNavOpen = true;

//init 
navClose.style.display = 'none';
mediaPage.innerHTML = homeHTML;

window.onscroll = function (e) {
  if (pageWidth < 601) {
    return;
  } else {
    const background = document.querySelector('.intro-page');
    const name = document.querySelector('.name-block');
    var scrolled = window.pageYOffset;
    background.style.backgroundPositionY = -(scrolled * 0.4) + 'px';
    name.style.fontSize = 50 + scrolled * 0.04 + 'px';
    let navLeftPos = (navLeftPosPerc * scrolled) / pageHeight - navLeftPosPerc;
    if (navLeftPos > 0) navLeftPos = 0;
    navigation.style.left = navLeftPos + '%';
  }
};

function scrolltoContent() {
  window.scrollTo(0, pageHeight);
}

function menuClicked() {
  if (window.pageYOffset < pageHeight) {
    scrolltoContent();
  }
  if(isNavOpen) {
    showNav();
  } else {
    hideNav();
  }
}

function navClick(navId) {
  if (pageWidth < 601) {
    hideNav();
    navHover(false);
  }
  if (navId == 2) {
    mediaPage.innerHTML = getWorkHTML();
    return;
  }
  if (navId == 3) {
    mediaPage.innerHTML = getTravel();
    return;
  }
  mediaPage.innerHTML = homeHTML;
}

function navHover(isEnter) {
  setBlur(isEnter ? 3 : 0);
}


function hideNav() {
  navigation.style.left = '-80%';
    navOpen.style.display = 'block';
    navClose.style.display = 'none';
    isNavOpen = true;
}

function showNav() {
  navigation.style.left = '0%';
  navOpen.style.display = 'none';
  navClose.style.display = 'block';
  isNavOpen = false;
}


function setBlur(blur) {
  mediaContent.style.filter = 'blur(' + blur + 'px)';
  mediaContent.style.WebkitFilter = 'blur(' + blur + 'px)';
  introPage.style.filter = 'blur(' + blur + 'px)';
  introPage.style.WebkitFilter = 'blur(' + blur + 'px)';
}
