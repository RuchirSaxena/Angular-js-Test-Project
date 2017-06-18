/// <reference path="angular.js" />
var app = angular.module("myCustomDirective", []);


app.directive("companyCopyRight", function () {
    var directive = {
        //We can restrict the directive using below values
        restrict: "EA", //E=Element, A=Attribute , C=CssClass , M=Comments
        template: "@CopyRight 2016-17 {{title}}"
    };
    return directive;
});

//Directive are useful in creating User Controls for our application
app.directive("userControl", function () {
    var directive = {
        templateUrl: "DirectiveUserControl.html"
    }
    return directive;
});

app.controller("homeCtrl", function ($scope) {
    $scope.title = "Custom Directives";

});