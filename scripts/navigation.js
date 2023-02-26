const mediaPage = document.getElementById('media-page');
const mediaContent = document.querySelector('.media-page');
const introPage = document.querySelector('.intro-page');

// onload
mediaPage.innerHTML = homeHTML;

function navClick(navId) {
  console.log({ navId });
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

function setBlur(blur) {
  mediaContent.style.filter = 'blur(' + blur + 'px)';
  mediaContent.style.WebkitFilter = 'blur(' + blur + 'px)';
  introPage.style.filter = 'blur(' + blur + 'px)';
  introPage.style.WebkitFilter = 'blur(' + blur + 'px)';
}
