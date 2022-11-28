const  express=require("express");
// init exprtess
const app = express();
const PORT=5000;
const path=require("path");
const workingindays =["Monday","Tuesday","Wednesday","Thusday"];
const date = new Date();
const day=workingindays[date.getDay()-1];
const hour = date.getHours();
console.log(hour);
console.log(day);
app.get("/",(req,res,next)=>{
  if(workingindays.includes(day) && hour >=9 && hour<=17){
    app.get("/",function(req,res){
      res.send("hello word! from go my code");
    });
    next()
   }else{
   res.sendFile(path.join(__dirname,"public","closed.html"));
    }
});

// public/about
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","about.html"));
});
// public/home
app.get("/home",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","home.html"));
});
// public/contact
app.get("/contact",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","contact.html"));
});
// public/style
app.get("/style.css",(req,res)=>{
  res.sendFile(path.join(__dirname,"public","style.css"));
});
app.use(express.json());
// Listen on post
app.listen(PORT,console.log(`app is running on port ${PORT}`));
  const students = [
{id: 0, email: "dhiya@gmail.com"},
{id: 1, email: "wassim@gmail.com"},
{id: 2, email: "ayoub@gmail.com"},
  ];
// methode Get
app.get("/students",(req,res)=>{
    res.send({msg:"list of students",students});
  });
//  methode post 
app.post("/add",(req,res)=>{
    const newStudent= [...students,req.body];
    res.send({msg:"student added",newStudent});
  });
//methode delete
app.delete("/del/:id",(req,res)=>{
    const deleteUser = students.filter((student)=>student.id != req.params.id);
    res.send({msg:"user deleted",deleteUser});
  });
// methode PUT
app.put('/edit/:id',(req,res)=>{
    const editUser = students.map((student)=>
    student.id == req.params.id ? {...student,...req.body} : student);
res.send({msg:"user updated",editUser});
  });
