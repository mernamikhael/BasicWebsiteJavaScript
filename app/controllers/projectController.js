let Projects = require('../models/Projects');

let student= require('../models/studentdb');
var sess ;

let projectController = {
    
    getAllProjects:function(req, res){
        
        student.find(function(err, login){
            
            if(err)
                res.send(err.message);
            else
                res.render('index', {login});
        })
    },


    createProject:function(req, res){
        
     if (!(req.body.URL == ""& req.body.workphoto =="" & req.body.code=="")){
        let project = new Projects({"username":sess.username, "name": req.body.name,"code":req.body.code,"URL":req.body.URL});
       if(req.file) project.photo=req.file.originalname;
       if (req.body.name==""){res.send("please enter ur name");}
        project.save(function(err, project){
            if(err){
                res.send(err.message);
                console.log(err);
            }
            else{         

                console.log(project);
                res.redirect('/');
            }
        })
    } else
     {res.send("u must create project")}} ,
    
showPortofolio:function(req, res)
{
 
      Projects.find(function(err, projects){
            
            if(err)
                res.send(err.message);
            else
               res.render('show', {projects});
               // Projects.paginate({projects});
        })
        //Projects.paginate({}, {limit: 10 });
},

    studentlogin:function(req, res){
   student.findOne({username:req.body.username,password:req.body.password},function(err,Login){
            if(err)
                res.send(err.message);
            else {if (!Login) 
                res.redirect('/'); 
                else { sess=req.session;
                    sess.username=req.body.username
                     res.render('createPort',{Login});
                     }
}   })
    },

        register:function(req, res){
            try {
       let newstudent =new student({"username": req.body.username, "password": req.body.password});

        newstudent.save(function(err,newstudent){
            if(err){
               res.send("enter anther username");
                console.log(err);
            }
            else{

            
               res.send("done succ");
            }
        }) }
        catch (error){res.send("enter anther username");}
    },
       addwork:function(req, res){
Projects.findOne({username:sess.username},function(err,user){

            if(err){
                res.send("please create protfolio first")
                console.log(err);
            }
            else{
                if(req.body.codework!= "")
                {    
                    try {        
        user.code.push(req.body.codework); }
        catch(error){res.send("creat portfolio first")}
                }
                  if(req.body.URL!= "")
                  {try {
                     user.url.push(req.body.URL);
                  }
                  catch (err){res.send("creat portfolio first")}
                  }
  else
                 
                  {
//var line=req.file.originalname;  
try{
                      user.workphoto.push(req.body.workphoto);
}
catch(err){res.send("creat portfolio first")}
                  }
       
        user.save(function(err){
     // something here
             });
                console.log(user);
               // res.render('home', {user,person:sessionUser.username});
            
}})}}

module.exports = projectController;
