
app.factory('contactService', ['$http', function ($http) {
    var contactService = {};

    contactService.sendEmail = function (contact, cbs, cbe) {
        $http({
            url: "/sendMail",
            method: "POST",
            data: contact
        }).then(function (data) {
                console.log(data);
                if (data.status == 200) return cbs();
                else return cbe();
            }, function (err) { 
                console.log(err); cbe(); 
            });
    }

    return contactService;
}
]);
