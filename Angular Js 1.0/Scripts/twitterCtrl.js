/// <reference path="angular.js" />

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', { //Simple Route
        templateUrl: 'Pages_RountingEg/Home.html',
        controller: 'mainCtrl'
    })
    .when('/contactus/:num',  { //Route with query string (num is a query string variable)
        templateUrl: 'Pages_RountingEg/ContactUs.html',
        controller: 'contactCtrl'
    })
});

myApp.controller('mainCtrl', ['$scope', '$filter', '$http', '$log', function ($scope, $filter, $http, $log) {
    $scope.handle = "";

    $scope.lowerCaseHandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    //Using $http service to fire request to server
    $http.get('/Home/GetRules')
    .success(function (result) {
        $scope.rules = result;
    })
    .error(function (data, status) {
        $log.error(status);
        $log.info(data);
    });


    /*firing ajax request using vanila javascript
    
    var rulesXHRrequest = new XMLHttpRequest();
    rulesXHRrequest.onreadystatechange = function () {
        debugger;
        $scope.$apply(function () { //Its use to force digest cycle to run
            if (rulesXHRrequest.readyState == 4 && rulesXHRrequest.status == 200) {
                $scope.rules = JSON.parse(rulesXHRrequest.responseText);
               // alert($scope.rules);
            }
        });
    
    }

    rulesXHRrequest.open("GET", "/Home/GetRules", true);
    rulesXHRrequest.send();
    */

}]);

myApp.controller('contactCtrl', function ($scope,$routeParams) {

    $scope.contactDetails = "Twitter , 7th street ,New York";
    $scope.queryStringValue = $routeParams.num;
});