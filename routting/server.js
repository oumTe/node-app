const express=require('express');
const app = express();
const port = 3000;
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended:false}))
const route = require("./router");


app.use('/api', route);
app.get('/',(req,res)=>{
    res.end("Routing");
})
app.listen(port, ()=> console.log('listening on port'));