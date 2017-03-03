// require dependincies 
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');
var multer=require('multer');
var storage=multer.diskStorage({destination:function(req,file,cb){
    cb(null,'/home/meruna/Downloads/toot/app/public')},filename:function(req,file,cb){
        cb(null,file.originalname)}});
var upload=multer({dest:'public',})

// add routes
router.get('/', projectController.getAllProjects);
router.get('/home', projectController.getAllProjects);

router.post('/createport', upload.single("photo") ,projectController.createProject);
router.get('/show', projectController.showPortofolio);
///router.post('/', projectController.createPortofolio);
router.post('/proj', projectController.studentlogin); 
router.post('/index', projectController.register); 
router.post('/addwork',upload.single("workphoto"), projectController.addwork); 

// export router
module.exports = router;
