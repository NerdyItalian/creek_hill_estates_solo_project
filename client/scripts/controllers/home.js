myApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.onSubmit = function (user){
        console.log("this is the user info", user);
        console.log("CLICKED!");
        $http.post ('/home', user).success(function(data, status, headers, config){
            console.log('Logged in!');
            $location.path('/loggedin');
        });
    }
}]);