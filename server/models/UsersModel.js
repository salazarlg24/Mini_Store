console.log('Users Model');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
        name: {
          type: String,
          required: "Need a User name."
        },
},{timestamps:true});

var User = mongoose.model('User', UserSchema);
