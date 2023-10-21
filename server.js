const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const session = require('express-session');
const bodyParser=require('body-parser');
const userrouter = require('./routes/user'); 
const excerciserouter= require('./routes/excercise')
require('dotenv').config;
app.use(cors());

const DB='mongodb+srv://stephanie:steph140@tracker.4iookc8.mongodb.net/?retryWrites=true&w=majority';
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

const port= process.env.PORT||7000;


app.use('excercise', excerciserouter);
app.use('user', userrouter);
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type,Accept');
    next();

})

app.use(express.json());

console.log('testing thing');

app.listen(port, ()=>{
    console.log('server runnining at 7000')
})