var app = angular.module('Ticket', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/Index"
        })
        .otherwise({
            templateUrl: "/"
        })
});
