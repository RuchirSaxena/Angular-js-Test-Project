/// <reference path="angular.js" />
var app = angular.module("MyApp", []);

//Creating Service using Service Method
app.service("$calculateServiceUsingServiceMethod", function () {
    this.add = function (value1, value2) {
        return parseInt(value1) + parseInt(value2);
    };
    this.subtract = function (value1, value2) {
        return value1 - value2
    };

});

//Creating Service using Factory Method
app.factory("$calculateServiceUsingFactoryMethod", function () {
    var fact = {};
    fact.add = function (value1, value2) {
        return parseInt(value1) + parseInt(value2);
    };
    fact.subtract = function (value1, value2) {
        return value1 - value2
    };
    return fact;

});

//Creating Provider
app.provider("date", function () {
    var greet;
    return {
        setGreetMessage:function(greetValue){
            greet = greetValue;
            console.log(greet);
        },
        $get: function () {
            return {
                showDate: function () {
                    var date = new Date();
                    return "Hi "+greet+" time is"+  date.getHours();
                }
            }
        }
    }
});

app.config(function (dateProvider) {
    var time=dateProvider.$get().showDate();
    if (time > 0 && time < 12) {
        dateProvider.setGreetMessage("Good morning");
    } else {
        dateProvider.setGreetMessage("Good night");
    }
});


app.controller('MathController', function ($scope, $calculateServiceUsingServiceMethod, $calculateServiceUsingFactoryMethod,date) {
    $scope.add = function (a, b) {
        $scope.result = $calculateServiceUsingServiceMethod.add(a, b);
       // alert($scope.result);
    };

    $scope.sub = function (a, b) {
        $scope.result = $calculateServiceUsingFactoryMethod.subtract(a, b);
        // alert($scope.result);
    };

    $scope.currentDate = date.showDate();

});
