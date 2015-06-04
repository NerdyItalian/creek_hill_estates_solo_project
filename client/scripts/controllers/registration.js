myApp.controller('RegistrationController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.onSubmit = function (user){
        console.log("this is the registration info", user);
        console.log("CLICKED!");
        $http.post ('/register', user).success(function(data, status, headers, config){
            $location.path('/home');
        });
    }
}]);

