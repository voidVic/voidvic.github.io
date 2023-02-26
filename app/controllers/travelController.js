'use strict';
angular.module('blog')
.controller('travelController', Controller);

function Controller() {
  var ctrl = this;
  function init(){
    console.log('loading IG');
    try{
    window.instgrm.Embeds.process();
    } catch(ex){
      console.log('supressing error');
    }
  }

  init();
  
}