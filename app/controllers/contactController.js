'use strict';
angular.module('blog')
    .controller('contactController', Controller);

function Controller(contactService) {
    var ctrl = this;
    function init() {
        ctrl.mailText = "Don't be shy!\nJust send him a message.";

        initMaps()
    }

    ctrl.sendEmail = function () {
        let mailObj = {
            Name: ctrl.name,
            Email: ctrl.mail,
            Message: ctrl.message
        };
        ctrl.mailText = 'Sending Email...';
        ctrl.sendingMail = true;

        contactService.sendEmail(mailObj, function() {
            ctrl.name = '';
            ctrl.mail = '';
            ctrl.message = '';
            ctrl.sendingMail = false;
            ctrl.mailSent = true;
            ctrl.mailText = 'Sent your message on the fastest rocket we had. It will soon reach the galaxy where Ankit live.';
        }, function(){
            console.log('failed');
            ctrl.mailText = 'Something went wrong. Could not send your mail.';
            ctrl.sendingMail = false;
        });
    }

    function initMaps() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoidm9pZHZpYyIsImEiOiJjazBoNTNpZXMwMGl4M2Jxam03YWFldHZ5In0.tUp6K2THkBnrJVcSQE3ODA';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 12,
            center: [80.237054, 12.923097]
        });

        map.on('load', function () {
            map.loadImage('./images/location2.png', function (error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": "Feature",
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [80.237054, 12.923097]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "cat",
                        "icon-size": 0.08
                    }
                });
            });
        });
    }

    init();

}