myApp.controller('OrdersController',['$scope','ProductsFactory','UsersFactory','OrdersFactory','$location',function ($scope,ProductsFactory,UsersFactory,OrdersFactory,$location) {
	$scope.order = [];
	$scope.product = [];
	$scope.user = [];
	$scope.message = [];

	var product_index = function () {
	  ProductsFactory.index(function(data) {
	      console.log(data);
	      $scope.product = data.product;
	  })
	}
	var user_index = function () {
	  UsersFactory.index(function(data) {
	      console.log(data);
	      $scope.user = data.user;
	  })
	}
	var order_index = function () {
	  OrdersFactory.index(function(data) {
	      console.log(data);
	      $scope.order = data.order;
	  })
	}
	product_index();
	user_index();
	order_index();

	$scope.create = function(){
		OrdersFactory.create($scope.newOrder, function(data){
			if(data.error){
				$scope.message.push(data.error);
			}
			else{
				$scope.order = data;
				$scope.newOrder = {};
				$scope.message = [];
			}
			product_index();
			user_index();
			order_index();
		})
	}
}])