const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
          type: 'input',
          message: 'what is the title of your project?',
          name: 'title',  
        }
    ])