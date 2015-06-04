var myApp = angular.module('myApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html",
            controller: 'HomeController'
        }).
        when('/registration', {
            templateUrl: "/views/routes/registration.html",
            controller: 'RegistrationController'
        }).
        when('/neighbors', {
            templateUrl: "/views/routes/neighbors.html",
            controller: 'NeighborsController'
        }).
        when('/loggedin', {
            templateUrl: "/views/routes/loggedin.html"
        }).
        when('/about', {
            templateUrl: "/views/routes/about.html"
        }).
        when('/events', {
            templateUrl: "/views/routes/events.html"
        }).
        when('/sale', {
            templateUrl: "/views/routes/sale.html",
            controller: "SaleController"
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
