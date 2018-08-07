const express = require('express');
const params = require('strong-params');
const bcrypt = require('bcrypt')
const SALT = parseInt(process.env.SALT);
const router = express.Router();
router.use(params.expressMiddleware());

router.post('/signup', (req,res) => {
    const params = req.parameters;
    console.log(params);
    let userParams = params.require('user').permit('email','password').value();
   
   bcrypt.hash(userParams.password,SALT,(err, hash) =>{
       userParams.password = hash;
       res.send(userParams);
   })
 
    
});

module.exports = router;