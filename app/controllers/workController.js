'use strict';
angular.module('blog')
    .controller('workController', Controller);

function Controller($uibModal) {
    var ctrl = this;
    ctrl.video = [
        {
            heading: 'Human Tracking Camera',
            content: 'A rotating camera based solution which can track down any individual human. Rotates along with human moves and give back a timelapse video of the activity along with the description of what that person is doing.',
            videoLink: 'https://drive.google.com/uc?export=download&id=1-bXK4rAg_wIRaQir497p7myB_Yc6WfDX',
            showVideo: false
        },
        {
            heading: 'Home Bot',
            content: 'A chatbot which takes care of all the connected devices at your home including controlling them, and respond to all your queries related to the devices.',
            videoLink: 'https://drive.google.com/uc?export=download&id=1kFpKQHPIwOmw9_KMsnAuiwMOoiXRPrGQ',
            showVideo: true
        },
        {
            heading: 'IoT Device control via Augmented Reality',
            content: 'Solution which help humans to just scan the smart device and operate via the augmented conttrol over them. No need to remember the names from the long list of devices on your app.',
            videoLink: 'https://drive.google.com/uc?export=download&id=1KB2bsa3SW1QUBYLD6RQq2Q3dhYzF3aw_'
        }
    ];

    function init() {
        
    }


    ctrl.open = function (selection) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'videoModal.html',
            controller: 'videoModalController',
            controllerAs: 'vmCtrl',
            size: 'lg',
            resolve: {
                item: function () {
                    return ctrl.video[selection]
                }
            }
        });
    }

    init();


}

angular.module('blog')
    .controller('videoModalController', vmController);

    function vmController(item){
        var ctrl = this;
        ctrl.vid = item;
}