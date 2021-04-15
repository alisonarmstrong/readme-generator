const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
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
            type: 'list',
            message: 'What type of lisence will you use?',
            name: 'lisence',
            choices: ["MIT", "APACHE 2.0", "None"]  
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
};  
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `![MIT](https://img.shields.io/badge/License%20-MIT-brightgreen)`
    }
    else if (license === "APACHE 2.0") {
        return `![APACHE 2.0] (https://img.shields.io/badge/License%20-Apache%202.0-blue)`
    }
    else if (lisence === "None") {
        return `![None] (https://img.shields.io/badge/License%20-None-red)`
    }
}
function renderLicenseLink(license) {
    if (license === "MIT") {
        return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`
    }
    else if (license === "APACHE 2.0") {
        return `[APACHE 2.0] (https://www.apache.org/licenses/LICENSE-2.0)`
    }
    else if (lisence === "None") {
        return `[None]`
    }
}
function renderLicenseSection(license) {
    if (license === "MIT") {
        return `!###### The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology`
    }
    else if (license === "APACHE 2.0") {
        return `###### The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative open source software development.`
    }
    else if (lisence === "None") {
        return `![None]`
    }
}

const generateReadMe = (answers) => {
return `# Project Name: ${answers.title}
## Description 
${answers.description}
## Installation
${answers.installation}
## Technologies
${answers.technologies}
## Usage
${answers.usage}
## Lisence
${answers.lisence}
## Contributors
${answers.contributors}
## Tests
${answers.tests}`};

const init = () => {
    promptUser ()
        .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
        .then(() => console.log('Successuly wrote to ReadMe'))
        .catch((err) => console.error(err));
};

init();