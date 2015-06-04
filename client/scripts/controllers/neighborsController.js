myApp.controller('NeighborsController', ['$scope', '$http', function($scope, $http){
    $scope.neighbor = {};
    $scope.neighbors = [];

    var fetchNeighbor = function() {
        return $http.get('/neighbors').then(function (res) {
            if (response.status !== 200) {
                throw new Error("Failed to fetch neighbor from the API");
            }

            $scope.neighbor = {};
            $scope.neighbors = res.data;
            return res.data;
        });
    };

    $scope.add = function(neighbors){
        return $http.post('/neighbors', neighbors).then(fetchNeighbor());
    };

    fetchNeighbor();
}]);