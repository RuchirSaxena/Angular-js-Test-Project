/// <reference path="angular.js" />

var app = angular.module("myapp", []);

app.controller("TabController", function() {
    this.tab = 1;
    this.selectedTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };


});