myApp.controller('SaleController', ['$scope', '$http', function($scope, $http){
    $scope.sale = {};
    $scope.sales = [];

    var fetchGoods = function(data) {
        return $http.get('/sale').then(function (res) {
            if (res.status !== 200) {
                throw new Error("Failed to fetch goods from the API");
            }

            $scope.sale = {};
            $scope.sales = res.data;
            console.log('in sales controller', res.data);
            return res.data;
        });
    };

    $scope.add = function(sale){
        return $http.post('/sale', sale).then(fetchGoods);
    };

    fetchGoods();
}]);


