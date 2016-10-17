var app = angular.module('Ticket', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Home/Index"
        })
         .when("/OpenTicket", {
             templateUrl: "OpenTicket/OpenTicket"
         })
        .otherwise({
            templateUrl: "/"
        })
});
