myApp.controller('DashboardController',['$scope', 'ProductsFactory','UsersFactory','OrdersFactory','$location',function ($scope,ProductsFactory,UsersFactory,OrdersFactory,$location) {
	$scope.order = [];
	$scope.product = [];
	$scope.user = [];

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
}])