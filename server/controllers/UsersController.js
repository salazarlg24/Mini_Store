var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		User.find({},function(err,user){
			if(err){
				console.log('You broke it...');
				res.json(err);
			}
			res.json({user});
		})
	},
	create: function (req,res) {
		User.findOne({name:req.body.name},function(err,user){
			if(err){
				console.log(err)
				res.json(err);
			}
			else if(!user){
				User.create(req.body, function(err,user){
					if(err){
						res.json(err);
					}
					else{
						console.log('Created User!', user);
						res.json(user);
					}
				})
			}
			else{
				res.json({errors:"Customer already exisits! Please submit a new Customer Name. Thank you."})
			}
		})
	},
	delete: function(req,res){
		User.deleteOne({_id:req.params.id},function(err,user){
			// console.log(user)
			if (err) {
				console.log('you broke it...')
			}
			else{
				console.log("User Deleted")
				res.json({user});
			}
		})
	},
}