const express = require('express');
// set method (template engine : )
// create application 
const app = express();

const port = 3000



// get , post , delete , put , patch 
app.get('/' , (req , res)=>{
    res.end('hy')
} )
app.listen(port , ()=>{
    console.log(`Listening to Port : ${port}`)
})