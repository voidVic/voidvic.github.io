'use strict';
angular.module('blog')
.controller('navController', Controller);

function Controller($location) {
  var ctrl = this;
  ctrl.isMenuHidden = true;
  const mediaContent = document.querySelector('.media-page');
  const introPage = document.querySelector('.intro-page');

  function init(){
  }

  ctrl.hideShowMenu = function() {
    ctrl.isMenuHidden = !ctrl.isMenuHidden;
    let blur = ctrl.isMenuHidden ? 0 : 3;
    setBlur(blur);
  }

  ctrl.navHover = function(isEnter){
    setBlur(isEnter ? 3 : 0);
  }

  ctrl.changeLocation = function() {
      ctrl.hideShowMenu();
  }

  function setBlur(blur) {
    mediaContent.style.filter = "blur(" + blur + "px)";
    mediaContent.style.WebkitFilter = "blur(" + blur + "px)";
    introPage.style.filter = "blur(" + blur + "px)";
    introPage.style.WebkitFilter = "blur(" + blur + "px)";
  }

  init();
  
}