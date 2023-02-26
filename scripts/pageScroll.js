const navLeftPosPerc = 25;
const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;
const navigation = document.querySelector('.navigation');
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
}
