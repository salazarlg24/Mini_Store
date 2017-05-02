myApp.controller('ProductsController',['$scope','ProductsFactory','$location',function ($scope,ProductsFactory,$location) {
	$scope.product = [];
	var index = function () {
	  ProductsFactory.index(function(data) {
	      console.log(data);
	      $scope.product = data.product;
	  })
	}
	index();
	$scope.create = function(){
		ProductsFactory.create($scope.newProduct, function(data){
			$scope.product = data;
			$scope.newProduct = {};
		})
		index();
	}
}]);