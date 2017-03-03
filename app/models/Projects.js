var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var projectSchema = mongoose.Schema({
    username:{
        type:String,
        required:true, 
        unique:true
    },
    name:{type:String,
        required:true},
    photo:String,
    workphoto:[String],
    code:[String],
    url:[String]
})
projectSchema.plugin(mongoosePaginate);
var Projects = mongoose.model("project2", projectSchema);

module.exports = Projects;