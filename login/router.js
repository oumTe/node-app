var express = require("express");
var router = express.Router();

const credential = {
    email: 'email@example.com',
    password: 'password'
}


//login user

router.post('/login',(req, res) => {
    if (req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');
        // res.end("Logged in")
    }else{
        res.end("Invalid Username")
    }
})


//route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }else{
        res.send("Unauthorized")
    }
})
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }else{
        res.send("Unauthorized")
    }
})

router.get('/logout', (req,res)=>{
    req.session.destroy((err)=>{
        if(err) {
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title: "Express", logout: "logout Successfully..!"})
        }
    })
})
module.exports = router;