myApp.controller('UsersController',['$scope','UsersFactory','$location',function ($scope,UsersFactory,$location) {
	$scope.user = [];
	$scope.message = [];
	var index = function () {
	  UsersFactory.index(function(data) {
	      console.log(data);
	      $scope.user = data.user;
	  })
	}
	index();
	$scope.create = function(){
		UsersFactory.create($scope.newCustomer, function(data){
			if(data.errors){
				if(typeof(data.errors) == 'object'){
					angular.forEach(data.errors,function(v,k){
						$scope.message.push(data.errors[k].message)
					})
				}
				else{
				$scope.message.push(data.errors);
				}
			}
			else{
				$scope.message = []
				$scope.user = data;
				$scope.newCustomer = {}
			}
			index();
		})
	}
	$scope.delete = function(data){
    	UsersFactory.delete(data);
    	index();
  }



}]);