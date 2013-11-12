ksa3.factory("service2", function ($http, $q, localStorageService) {

    var service2 = {
        localvar: "https://www.google.com/service?",
        exampleArray: [],
        exampleFunction: function () {
            return $http({
                url: service2.localvar,
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
    }; //end service2 Object
    return service2;
});
