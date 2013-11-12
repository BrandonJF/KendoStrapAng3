ksa3.factory("service1", function ($http, localStorageService, service2) {
    var service1 = {
        localvar: "https://www.google.com/service?",
        exampleArray: [],
        exampleFunction: function () {

            return $http({
                url: service1.localvar,
                method: 'GET',
                params: {
                    "user": "param1stuff",
                    "param2": "param2Stuff"
                }
            });
        },
        exampleFunction2: function (aiNumber) {
            return "Some stuff";
        }
    }; //end service1 Object
    return service1;

});
