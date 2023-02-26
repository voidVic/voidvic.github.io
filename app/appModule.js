
var app = angular.module('blog', [
    'ui.router',
    'ui.bootstrap']);
/**
 * Configure the Routes
 */
app.config(function ($stateProvider) {

    var login = {
        name: 'home',
        url: '/',
        templateUrl: 'html/home.html',
        controller: ''
    }
    var travel = {
        name: 'travel',
        url: '/travel',
        templateUrl: 'html/travel.html',
        controller: 'travelController as tCtrl'
    }
    
    var contact = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'html/contact.html',
        controller: 'contactController as conCtrl'
    }

    var work = {
      name: 'work',
      url: '/work',
      templateUrl: 'html/work.html',
      controller: 'workController as wCtrl'
    }

    $stateProvider.state(login);
    $stateProvider.state(travel);
    $stateProvider.state(contact);
    $stateProvider.state(work);
    
    $stateProvider.state("otherwise", {
        url: "*path",
        templateUrl: 'html/home.html',
        controller: ''
    });
});

app.directive('inputM',['$compile', function($compile){
    return {
      restrict: 'E',
      scope: {
        mName: '@',
        mType: '@',
        mPlaceholder: '@',
        mModel: '=',
        mLabel: '@',
        mRow: '@'
      },
      // controllerAs: ',
       //bindToController: true,
      controller: ['$scope', function($scope){
        //var scope = this;
        $scope.activeC= "";
        $scope.activated = function(isActive){
          if(isActive || ($scope.mModel != '' && $scope.mModel != null)){
            $scope.activeC= "active";
          }else{
            $scope.activeC= "";
          }
        }
      }],
      template: `<div class="input-m-class">
                    <label class="{{activeC}}" ng-bind="mLabel"></label>
                    <input type="{{mType}}"
                        row="{{mRow}}"
                        name="{{mName}}"
                        placeholder="{{mPlaceholder}}"
                        ng-model="mModel"
                        ng-focus="activated(true)"
                        ng-blur="activated(false)">
                </div>`
    }
  }]);