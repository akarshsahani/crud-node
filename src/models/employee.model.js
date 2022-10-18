var dbConn = require('../../config/db.config');

var Employee = function(employee){
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

// get all employees

Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT *FROM employees',(err, res)=>{
        if(err){
            console.log('err while fetching employees', err);
            result(null, err);
        }
        else{
            console.log('Emplogees fetched successfully');
            result(null, res);
        }
    })
}

//get employee by ID from db
Employee.getEmployeeByID = (id, result) =>{
    dbConn.query('SELECT *FROM employees WHERE id=?', id,(err, res)=>{
        if(err){
            console.log('Error while fetching employee by ID', err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    })
}

//create new employee
Employee.createEmployee = (employeeData, result)=>{
    dbConn.query('INSERT INTO employees SET ?', employeeData, (err, res)=>{
        if(err){
            console.log('error while inserting data');
            //result(null, {status: false, message: 'Employee created successfully'});
            result(null, err);
        }
        else{
            console.log('Employee created successfully');
            //result(null, {status: true, message: 'Employee created successfully', insertId: res.id})
            result(null, res);
        }
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query('UPDATE employees SET first_name=?, last_name=?, email=?, phone=?, organization=?, designation=?, salary=?, status=? WHERE id =?', [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, employeeReqData.phone, employeeReqData.organization, employeeReqData.designation, employeeReqData.salary, employeeReqData.status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }
        else{
            console.log('Employee updated successfully');
            result(null, res);
        }
    })
}

// Delete Employee

/* Employee.deleteEmployee = (id, result)=>{
    dbConn.query('UPDATE employees SET is_deleted=? WHERE id=?', [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting');
            result(null, err);
        }
        else{
            console.log('Employee deleted successfully');
            result(null, res);
        }
    })
}
 */

Employee.deleteEmployee = (id, result)=>{
    dbConn.query('DELETE FROM employees WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting');
            result(null, err);
        }
        else{
            console.log('Employee deleted successfully');
            result(null, res);
        }
    })
}


module.exports = Employee;