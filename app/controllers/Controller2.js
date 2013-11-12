ksa3.controller("Controller2", ['$scope', '$http', '$location', 'localStorageService', 'service1', 'service2',
    function ($scope, $http, $location, localStorageService, service1, service2) {

        $scope.scopeVariableExample = {
            variableWithinObject: [],
            stringVar: "This is displayed."
        };

        $scope.someFunctionWServiceCall = function () {
            service1.exampleFunction();
        };
}]);
