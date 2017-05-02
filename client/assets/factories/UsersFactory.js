console.log('Users Factory');
myApp.factory('UsersFactory',['$http',function ($http) {
	var factory = {};
	factory.index = function(callback){
		$http.get('/users').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newUser,callback){
		$http.post('/users', newUser).then(function(returned_data){
			console.log(returned_data.data);
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		});		
	}
	factory.delete = function(data,callback){
		$http.delete('/users/'+data).then(function(returned_data){
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}
		})
	}
	return factory;

}]);