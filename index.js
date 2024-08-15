const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname , "public")));

app.get('/',function(req,res){ 
  fs.readdir(`./files`,function(err,files){
    // console.log(files); it is making an array and whatever the file is in the files folder it'll put it into that array 
    res.render("index", {files:files});
  })
})

app.get('/',function(req,res){ 
  fs.readdir(`./files`,function(err,files){
    // console.log(files); it is making an array and whatever the file is in the files folder it'll put it into that array 
    res.render("index", {files:files});
  })
})

app.listen(3000,function(){
  console.log("Its working")
});