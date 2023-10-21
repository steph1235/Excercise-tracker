const router= require('express').Router();
let Excercise=require('../models/excercise.model');

router.route('/get').get((req,res) => {

    Excercise.find()
    .then(excercise => res.json(excercise))
    .catch(err=>err.status(400).json('Error:'+err))



});

router.route('/post').post((req,res) =>{
    const username=req.body.usename;
    const description=req.body.description;
    const duration= number(req.body.duration);
    const date= Date.parse(req.body.date);



    const newExcercise=new Excercise({
        username,
        description,
        duration,
        date,
    });

    new Excercise.save()
    .then(()=>res.json("Excercise added"))
    .catch((err)=>res.status(400).json('Error:'+err));

});


router.route('/delete/:id').delete((req,res)=>{
    Excercise.findByIdAndDelete()
    .then(()=>res.json('user deleted'))
    .catch(err=> res.status(400).json('Error:'+ err))
});

router.route('/get/:id').get((req,res)=>{
    Excercise.findById(req.params.id)
    .then((excercise)=>res.json(excercise))
    .catch(err=> res.status(400).json('Error:'+err))



});

router.route('/update/:id').post((req,res) =>{
    Excercise.findById(req.params.id)
    .then(excercise=>{
    excercise.username=req.body.usename;
    excercise.description=req.body.description;
    excercise.duration= number(req.body.duration);
    excercise.date= Date.parse(req.body.date);


    excercise.save()
    .then(()=>res.json('excercise updated'))
    .catch(err=> res.status(400).json('Error:'+err))
    })
    .catch(err=> res.status(400).json('Error:'+err))
});

module.exports= router;