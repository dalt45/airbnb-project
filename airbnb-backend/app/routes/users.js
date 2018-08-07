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
   
    const validateEmail = (email) => {
        var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return re.test(email);
    }

    const isOkPass = (pass) => {
        var anUpperCase = /[A-Z]/;
        var aLowerCase = /[a-z]/; 
        var aNumber = /[0-9]/;
        var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
        var obj = {};
        obj.result = true;
    
        if(pass.length < 8){
            obj.result=false;
            obj.error="Not long enough!"
            return obj;
        }
    
        var numUpper = 0;
        var numLower = 0;
        var numNums = 0;
        var numSpecials = 0;

        for(var i=0; i<pass.length; i++){
            if(anUpperCase.test(pass[i]))
                numUpper++;
            else if(aNumber.test(pass[i]))
                numNums++;
            else if(aSpecial.test(pass[i]))
                numSpecials++;
        }
    
        if(numUpper < 1 || numNums < 1 || aSpecial < 1){
            obj.result=false;
            obj.error="Wrong Format!";
            return obj;
        }
        return obj;
    }

   bcrypt.hash(userParams.password,SALT,(err, hash) =>{
    userParams.ifValidPass = isOkPass(userParams.password)
    userParams.password = hash;
    userParams.ifValidEmail = validateEmail(userParams.email)
    res.send(userParams);
   })

});

module.exports = router;