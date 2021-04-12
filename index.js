const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is the title of your project?',
            name: 'title',  
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project.',
            name: 'description',  
        },
        {
            type: 'input',
            message: 'What packages need to be installed to run your project?',
            name: 'installation',  
        },
        {
            type: 'input',
            message: 'What technologies did you use to create this project?',
            name: 'technologies',  
        },
        {
            type: 'input',
            message: 'Please provide an example of how this project can be used?',
            name: 'usage',  
        },
        {
            type: 'input',
            message: 'What type of lisence do you have?',
            name: 'lisence',  
        },
        {
            type: 'input',
            message: 'Please list all contributors, including yourself',
            name: 'contributors',  
        },
        {
            type: 'input',
            message: 'What commands are used to run a test?',
            name: 'tests',  
        },
        
    ])