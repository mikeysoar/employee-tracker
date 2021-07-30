const db = require('./db/connection');
const inquirer = require('inquirer');

const mainMenu = async () => {
    const mainQuestion = await inquirer.prompt([{
        message: 'What Would You Like To Do?',
        name: 'answer',
        type: 'list',
        choices: [
            'View All Employees',
            'View All Roles',
            'View All Employees By Department',
            'View Employees by Manager',
            'Add Employee',
            'Add Department',
            "Add a Role",
            'Add Employee Role',
            'Update Employee Role',
            'View All Departments',
            'Update Employee Manager',
            'Exit'
        ]
    }]);
    console.log(mainQuestion);
    if (mainQuestion.answer === 'View All Employees') {
        const allEmployees = await db.query('SELECT * FROM employee')
        console.table(allEmployees);
        mainMenu();
    } else if (mainQuestion.answer === 'View All Roles') {
        const allRoles = await db.query('SELECT * from role')
        console.table(allRoles);
        mainMenu();
    } else if (mainQuestion.answer === 'View All Employees By Department') {
        const employeeByDepartment = await db.query('SELECT * FROM employee LEFT JOIN role ON employee.role_id = role.id')
        console.table(employeeByDepartment);
        mainMenu();
        // (bonus)
    } else if (mainQuestion.answer === 'View Employees by Manager') {
        const employeeByManager = await db.query('SELECT concat(manager.first_name, " ", manager.last_name) AS manager, employee.first_name AS employee FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE employee.manager_id IS NOT NULL; ')
        console.table(employeeByManager);
        mainMenu();
    } else if (mainQuestion.answer === 'Add Employee') {
        const roleDb = await db.query('SELECT title, id FROM role')
        const managerDb = await db.query('SELECT first_name, last_name, id FROM employee')

        const addEmployeeInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the employees first name?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the new employees last name?'
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is the employee role?',
                choices: roleDb.map(role => ({ name: role.title, value: role.id }))
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'Who will this employee report too?',
                choices: managerDb.map(manager => ({ name: manager.first_name + manager.last_name, value: manager.id }))
            },
        ])
        const addEmployee = await db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`,
            [
                addEmployeeInput.first_name,
                addEmployeeInput.last_name,
                addEmployeeInput.role_id,
                addEmployeeInput.manager_id
            ]);

        console.table(addEmployee);
        mainMenu();
        // this one is broken
    } else if (mainQuestion.answer === 'Add Department') {
        const addDepartment = await inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'What department would you like to add?'
            },
        ])
        const departmentInput = await db.query('INSERT INTO department (name) VALUES (?)',);
        console.table(addDepartment);
        mainMenu();

        // this one is broken
    } else if (mainQuestion.answer === 'Add Employee Role') {
        const addRoleInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the job title?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary?'
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'What is the department ID?'
            },
        ])
        const addRole = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)',
            [
                addRoleInput.title,
                addRoleInput.salary,
                addRoleInput.department_id
            ]
        );
        console.table(addRole);
        mainMenu();
        // this one is still broken
    } else if (mainQuestion.answer === 'Update Employee Role') {
        const updateEmployeeRole = await db.query('UPDATE employee')
        // need to update employee role
        console.log(updateEmployeeRole);
        mainMenu();
        // this one works
    } else if (mainQuestion.answer === 'View All Departments') {
        const allDepartments = await db.query('SELECT * FROM department')
        console.table(allDepartments);
        mainMenu();
    } else if (mainQuestion.answer === 'Exit') {
        process.exit();
    }

}

mainMenu();