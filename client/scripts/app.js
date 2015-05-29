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
        when('/projects', {
            templateUrl: "/views/routes/projects.html"
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
