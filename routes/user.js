const router=require('express').Router();
let User=require('../models/user.models');

router.route('/').get((req,res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err=> res.status(400).json('Error:'+err))

});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const newUsername=new User({username})
    newUsername.save()
    .then(() => res.json('user Added'))
    .catch(err=> res.status(400).json('Error:' +err))

});


router.route('/delete/:id').delete((req,res)=>{
    User.findByIdAndDelete()
    .then(()=>res.json('user deleted'))
    .catch(err=> res.status(400).json('Error:'+ err))
});


module.exports=router;