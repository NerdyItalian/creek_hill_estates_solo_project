myApp.controller('RegistrationController', ['$scope', '$http', function($scope, $http){
    $scope.onSubmit = function (user){
        console.log("this is the user info", user);
        console.log("CLICKED!");
        $http.post ('/register', user);
    }
}]);