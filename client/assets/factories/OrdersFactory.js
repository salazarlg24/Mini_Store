console.log('Orders Factory');
myApp.factory('OrdersFactory',['$http',function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get('/orders').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newOrder,callback){
		console.log(newOrder)
		$http.post('/orders',newOrder).then(function(returned_data){
			console.log(returned_data.data);
			if(typeof(callback) == 'function'){
				callback(returned_data.data);
			}
		});
	}

	return factory;
}]);