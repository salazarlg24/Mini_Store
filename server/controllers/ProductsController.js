var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

	index: function(req,res){
		Product.find({},function(err,product){
			if(err){
				console.log('You broke it...');
				res.json(err);
			}
			res.json({product});
		})
	},
	create: function(req,res){
		console.log(req.body)
		Product.create({name:req.body.name, image:req.body.image, text:req.body.text, qty:req.body.qty},function(err,product){
			if (err){
				res.json(err);
			}
			else{
				console.log('Product Made!', product);
				res.json(product);
			}
		});
	}


}