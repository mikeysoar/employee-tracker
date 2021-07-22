const db = require('./db/connection');
const inquirer = require('inquirer');

const mainMenu = async () => {
    const mainQuestion = await inquirer.prompt([{
        message: 'What would you like to do?',
        name: 'answer',
        type: 'list', 
        choices: [
           'View all employees',
           'View all departments',
        //    add more choices
        ]
    }]);
    console.log(mainQuestion);
    // if mainquestion === 
    // else statement needs a condition


}



mainMenu();