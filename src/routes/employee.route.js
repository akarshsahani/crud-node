const express = require('express');
const router =  express.Router();

const employeeController = require('../controllers/employee.controller');

// get all employees
router.get('/',authentication, employeeController.getEmployeeList);

// get employeee by id
router.get('/:id', employeeController.getEmployeeByID);

//create new employee
router.post('/',employeeController.createNewEmployee);

//update employee
router.put('/:id', employeeController.updateEmployee);

// Delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;