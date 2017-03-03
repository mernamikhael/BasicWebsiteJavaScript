var mongoose = require('mongoose');

var login = mongoose.Schema({
    username:{
        type:String,
        required:true, 
        unique:true
              },
    password:{
              type:String,
              required:true
}
}
)
var student = mongoose.model("login2", login);

module.exports = student;
