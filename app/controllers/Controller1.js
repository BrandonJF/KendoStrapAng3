ksa3.controller("Controller1", ['$scope', '$http', '$location', 'localStorageService', 'service1', 'service2',
    function ($scope, $http, $location, localStorageService, service1, service2) {

        $scope.$on('$viewContentLoaded', function () {
            $(function () {
                // Initialize the Kendo DatePicker by calling the kendoDatePicker jQuery plugin
                $("#datepicker").kendoDatePicker();
            });
        });

        $scope.scopeVariableExample = {
            variableWithinObject: [],
            stringVar: "This is a string from a variable on the controller, displayed her via a template tag."
        };

        $scope.someFunctionWServiceCall = function () {
            service1.exampleFunction();
        };



}]);
