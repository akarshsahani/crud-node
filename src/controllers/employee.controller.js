//const Employee = require('../models/employee.model');
const EmployeeModel = require('../models/employee.model')

// get employee list

exports.getEmployeeList = (req, res)=> {
    //console.log('here all employees list');
    EmployeeModel.getAllEmployees((err, employees) =>{
        console.log('we are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
};

// Get employee by id
exports.getEmployeeByID = (req, res) =>{
    //console.log('get employee id');
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data', employee);
        res.send(employee);
    })
}

// Create new employee
exports.createNewEmployee = (req, res) =>{
    //console.log('req data', req.body);
    const employeeReqData = new EmployeeModel(req.body);
    //console.log('employeeData', employeeReqData);
    // check null
    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all details'});
    }
    else{
        //console.log('valid data');
        EmployeeModel.createEmployee(employeeReqData,(err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee created successfully', data: employee.insertId})
        })
    }
}

// update employee
exports.updateEmployee = (req, res)=>{
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.send(400).send({success: false, message: 'Please fill all details'});
    }
    else{
        EmployeeModel.updateEmployee(req.params.id, employeeReqData,(err, employee)=>{
            if(err)
                res.send(err);
                res.json({status: true, message: 'Employee updated successfully', data: employee})
        })
    }
}

// Delete Employee
exports.deleteEmployee = (req, res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: 'Employee deleted successfully'});
    })
}