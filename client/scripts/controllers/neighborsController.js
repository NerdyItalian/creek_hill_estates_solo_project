myApp.controller('NeighborsController', ['$scope', '$http', function($scope, $http){
    $scope.neighbor = {};
    $scope.neighbors = [];

    var fetchNeighbor = function(data) {
        return $http.get('/neighbors').then(function (res) {
            if (res.status !== 200) {
                throw new Error("Failed to fetch neighbor from the API");
            }

            $scope.neighbor = {};
            $scope.neighbors = res.data;
            console.log('in neighbors controller', res.data);
            return res.data;
        });
    };

    $scope.add = function(neighbor){
        return $http.post('/neighbors', neighbor).then(fetchNeighbor);
    };

    fetchNeighbor();
}]);