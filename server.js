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
    if (mainQuestion.answer === 'View All Departments') {
        const allDepartments = await db.query('SELECT * FROM department')
    console.table(allDepartments);
    mainMenu();
    } 
    // else if
    // esle if every single one of these
    // else statement needs a condition


}



mainMenu();