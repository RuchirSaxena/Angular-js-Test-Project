/// <reference path="angular.js" />

var app = angular.module("myApp", ['angularUtils.directives.dirPagination']);

app.controller("adminController", function ($scope) {
    $scope.myTestVariable = "hello World";
    $scope.myFunc = function () {
        alert("Welcome to the world of angular js"+$scope.myTestVariable);
    }
    
    $scope.myFunc2 = function (val) {
        alert("Welcome to the world of angular js" + val);
        $scope.myTestVariable = val;
    }
});

app.controller("departmentController", function ($scope,$http) {
    $scope.getDepartments = function () {
        //alert("In function");
        $http.get('/Home/GetDepartments').
        then(function (response) {
            $scope.deptData = response.data;
        });
    }
});

app.controller("employeeController", function ($scope,$http) {
    $scope.getEmployees = function (dId) {
        $http.get('/Home/GetEmployeeByDeptId/'+dId).
            then(function (response) {
                $scope.EmpData = response.data;
            });
    }

    $scope.sort = function (colName) {
        $scope.sortColumnKey = colName;
        $scope.ascOrDesc = !$scope.ascOrDesc;
    }
});



