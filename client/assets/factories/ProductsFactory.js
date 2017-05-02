console.log('Products Factory');
myApp.factory('ProductsFactory',['$http',function ($http) {
	var factory = {};
	factory.index = function(callback){
		$http.get('/products').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newProduct,callback){
		console.log(newProduct)
		$http.post('/products',newProduct).then(function(returned_data){
			console.log(returned_data.data);
			if(typeof(callback) == 'function'){
				callback(returned_data.data);
			}
		});
	}

	return factory;

}]);