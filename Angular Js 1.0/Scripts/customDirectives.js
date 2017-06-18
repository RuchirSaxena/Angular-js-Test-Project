/// <reference path="angular.js" />
var app = angular.module("myCustomDirective", []);


app.directive("companyCopyRight", function () {
    var directive = {
        //We can restrict the directive using below values
        restrict: "AE", //E=Element, A=Attribute , C=CssClass , M=Comments
        template: "<div>@CopyRight 2016-17 {{title}}</div>",
        replace: true //This is used to replace the actual Element  with only template Content ie. <user-Control></user-Control>
    };
    return directive;
});

//Directive are useful in creating User Controls for our application
app.directive("userControl", function () {
    var directive = {
        templateUrl: "DirectiveUserControl.html",
        // scope:{}, //For isolating scopes from its parent page control
        scope: {
            previewData: "@",//One Way Binding
            editFeild: "=",//Two Way Binding
            anyMethod: "&" //To attach controller method to directives
        }
    }
    return directive;
});

app.controller("homeCtrl", function ($scope) {
    $scope.title = "Custom Directives";

});

//By Default the parent Controller(personCtrl)
//and the directive Scopes are same
app.directive("personInformation", function () {
    return {
        restrict: "AE",
        templateUrl: "PersonDirective.html",
        //Now if we want to have a seperate scope for 
        //directive ie isolated scope from its parent controller
        //then below code is added
        // scope: {}

        //If we want that some properties of our parent controller is attached 
        //to our custome directive then we can use below code ,using below
        //code we can have scope properties from parent control
        //BUT it will be not attached to the parent control scope object
        //ie. changes in below property will not make changes int the parent
        //control scope properties 
        //One way binding
        //scope: {
        //    employeeName: "@"
        //}

        //Two way binding =>By default binding
        scope: {
            employeeName: "="
        },
        //compile: function (elem, attrs) {
        //    console.log("Compiling......");
        //    console.log(elem.html());
        //    return {
        //        pre: function (scope, elements, attrs) {
        //            console.log("Pre-linking......");
        //            console.log(elements);
        //        },
        //        post: function (scope, elements, attrs) {
        //            console.log("Post-Linking.....");
        //            console.log(elements);
        //        }
        //    }
        //}

        //Above code can also be written as below code
        //coz it is recommended to use post link 
        link: function (scope, elements, attrs) {
            console.log('Linking.....');
            console.log(scope);

            //Whatever conditional code neede to be written
        }
    }
});

app.controller("personCtrl", function ($scope) {

    var person = {
        name: "Ruchir Saxena",
        company: "Pyamid IT Consulting",
        position: "Team Lead"
    };
    $scope.person = person;
});