const express = require('express');
const bodyParser = require('body-parser');

//create expresss app
const app = express();

//set up port
const port = process.env.PORT || 5000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json()); 

//define root route 
app.get('/', (req, res) =>{
    req.setEncoding('Hello World');
});

// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

//create employee routes
app.use('/api/v1/employee', employeeRoutes)

//listen to the port
app.listen(port, ()=>{
    console.log(`Express server is runing at port ${port}`);
});