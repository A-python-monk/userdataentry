const express = require("express");
const path =require("path");
const app = express();
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../backend/public");

const Userdata = require("./models/mods");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/index",async (req,res)=>{
    try {
        const userregister= new Userdata({
            email:req.body.email,
            password:req.body.password,
            checked:req.body.checked
        })
      const useraddded = await userregister.save();
      res.status(201).render("index");
    } catch (error) {
        res.status(404).send(error);
    }

});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})