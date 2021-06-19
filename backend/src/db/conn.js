const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://CondingMonk:shubham@cluster0.ldhe0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
).then( ()=>{
    console.log(`conection successful`);
}).catch((err)=>{
    console.log(`NO Connection ${err}`);
});