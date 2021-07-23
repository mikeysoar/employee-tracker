const db = require('./db/connection');
const inquirer = require('inquirer');

const mainMenu = async () => {
    const mainQuestion = await inquirer.prompt([{
        message: 'What Would You Like To Do?',
        name: 'answer',
        type: 'list',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View Employees by Manager',
            'Add Employee',
            'Remove Employee',
            'Update Employee Role',
            'View All Departments',
            'Update Employee Manager'
            //    add more choices
        ]
    }]);
    console.log(mainQuestion);
    if (mainQuestion.answer === 'View All Employees') {
        const allEmployees = await db.query('SELECT * FROM employee')
        console.table(allEmployees);
        mainMenu();
        // this one needs help
    } else if (mainQuestion.answer === 'View All Employees By Department') {
        const employeeByDepartment = await db.query('SELECT * FROM employee, department')
        console.table(employeeByDepartment);
        mainMenu();
        // this one is broken
    } else if (mainQuestion.answer === 'View Employees by Manager') {
        const employeeByManager = await db.query('SELECT * FROM manager, employee')
        console.table(employeeByManager);
        mainMenu();
        //  this one is broken
    } else if (mainQuestion.answer === 'Add Employee') {
        const addEmployee = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        console.table(addEmployee);
        mainMenu();
        // this one is broken
    } else if (mainQuestion.answer === 'Remove Employee') {
        const removeEmployee = await db.query('DELETE from employee WHERE id = ?');
        console.log(removeEmployee);
        mainMenu();
    } else if (mainQuestion.answer === 'Update Employee Role') {
        const updateEmployeeRole = await db.query('UPDATE employee')
        // need to update employee role
        console.log(updateEmployeeRole);
        mainMenu();
    } else if (mainQuestion.answer === 'View All Departments') {
        const allDepartments = await db.query('SELECT * FROM department')
        console.table(allDepartments);
        mainMenu();
        // this one is broken
    } else if (mainQuestion.answer === 'Update Employee Manager') {
        const updateEmployeeManager = await db.query('UPDATE employee = ? WHERE manager = ?')
        console.table(updateEmployeeManager);
        mainMenu(); 
    }

    // else if every single one of these
    // else statement needs a condition


}



mainMenu();