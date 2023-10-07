const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const session = require('express-session');
const bodyParser=require('body-parser');
const routes = require('./routes/user.js'); 

require('dotenv').config;
app.use(cors());
const port= process.env.PORT||4000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})



app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type,Accept');
    next();

})

app.get('/login', (req,res)=>{

})
app.use(express.json());
app.use('../user', routes);

console.log('testing thing');

app.listen(port, ()=>{
    console.log('server runnining at 4000')
})