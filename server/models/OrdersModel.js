console.log('Order Model');
var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name:{
		type:String,
		required: true,
	},
	qty:{
		type:Number,
		required: "need a quantity",
	},
	product:{
		type:String,
		required:true,
	}
},{timestamps:true});

var Order = mongoose.model('Order',OrderSchema);