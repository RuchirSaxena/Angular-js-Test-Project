

var curdApp = angular.module("myApp", []);



curdApp.factory("curdServiceEmployee", function ($http) {
    var curdEmpobj = {};
    debugger;
    curdEmpobj.getAll=function() {
        var emps = null;
        emps = $http({
            method: 'Get',
            url:'Employees/Index' 
        }).then(function(response) {
            return response.data;
        });
        return emps;
    }

    curdEmpobj.getByEmpId=function(empId) {
        var emp = null; 
        emp = $http({
            method: 'Get',
            url: 'Employees/Details',
            params:{id:empId}
        }).then(function(response) {
            return response.data;
        });
        return emp;
    }
    return curdEmpobj;
});
curdApp.controller("employeesController", function ($scope, curdServiceEmployee) {
  
    curdServiceEmployee.getAll().then(function(result) {
        $scope.empData = result;
    });
    $scope.getById = function(empId) {
        curdServiceEmployee.getByEmpId(empId).then(function(result) {
            $scope.emp = result;
        });
    };
});