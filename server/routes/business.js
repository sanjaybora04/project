const router = require("express").Router();

router.post('/getbusiness',(req,res)=>{
    console.log('hello')
    res.json({list:[1,2,3,4,5,6,7,8]});
})

module.exports = router;