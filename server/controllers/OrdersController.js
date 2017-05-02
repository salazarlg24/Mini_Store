var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


module.exports = {

	index: function(req,res){
		Order.find({},function(err,order){
			if(err){
				console.log('You broke it...');
				res.json(err);
			}
			res.json({order});
		})
	},
	create: function(req,res){
		console.log(req.body)
		Product.findOne({name:req.body.product},function(err,product){
			if(!req.body.qty){
				res.json(err);
			}
			else if(product.qty < req.body.qty){
				res.json({error:'Not enough left'});
			}
			else{
				product.qty -= req.body.qty;
				product.save(function(err){
					if(err){
						res.json(err);
					}
					else{
						Order.create({name:req.body.name, qty:req.body.qty, product:req.body.product},function(err,order){
							if (err){
								res.json(err);
							}
							else{
								console.log('Order Made!', order)
								res.json(order)
							}
						});
					}
				})
			}
		});
	}
}