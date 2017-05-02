console.log('future routes.');
var user = require('../controllers/UsersController.js')
var product = require('../controllers/ProductsController.js')
var order = require('../controllers/OrdersController.js')

module.exports = function (app) {
	app.get('/users',function(req,res){
		user.index(req,res);
	});
	app.post('/users', function(req, res) {
		user.create(req, res);
	});	
	app.delete('/users/:id', function(req, res) {
		user.delete(req, res);
	});
	app.get('/products',function(req,res){
		product.index(req,res);
	});
	app.post('/products', function(req, res) {
		product.create(req, res);
	});	
	app.get('/orders',function(req,res){
		order.index(req,res);
	});
	app.post('/orders', function(req, res) {
		order.create(req, res);
	});	
}