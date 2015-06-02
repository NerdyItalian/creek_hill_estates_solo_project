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
        when('/users', {
            templateUrl: "/views/routes/users.html"
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
            templateUrl: "/views/routes/sale.html"
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
