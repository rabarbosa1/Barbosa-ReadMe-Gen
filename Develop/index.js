// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

let licenseType = ""
let licenseBadge = ""
let licenseDescription = ""

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'Project Name'
    },
    {
        type: 'input',
        message: 'What is the  description?',
        name: ' Description'
    },
    {
        type: 'input',
        message: 'What are the contents?',
        name: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'Installation '
    },
    {
        type: 'input',
        message: 'What are the instructions for usage?',
        name: 'Usage '
    },
    {
        type: 'input',
        message: 'What are the contribution?',
        name: 'Contribution '
    },
    {
        type: 'input',
        message: 'What are the instructions for testing?',
        name: 'Testing'
    },
    {
        type: 'list',
        message: 'What is the project license?',
        name: 'License',
        choices: ['None', 'MIT License', 'Mozilla Public License 2.0', ]
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'Github Username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email Address'
    }
];

// TODO: Create a function to write README file
const createReadme = (answers) => 
`
# ${answers['Project Name']} 
${renderLicenseBadge(answers.License)}
    
## Table of Contents
* [Description](#project-description)
* [Installation](#installation-instructions)
* [Usage](#usage-instructions)
* [Contribution](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)
## Project Description
${answers['Description']}
## Installation Instructions
${answers['Installation ']}
## Usage Instructions
${answers['Usage ']}
## Contribution Guidelines
${answers['Contribution ']}
## Testing
${answers['Testing']}
## License
${answers.License}
${licenseDescription}
## Questions
For questions you can find me on Github or via my email:
My Github profile is https://github.com/${answers['Github Username']}
My email address is: ${answers['Email Address']}
`

// TODO: Create a function to initialize app

function promptQuestions() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        fs.writeFile('README.md', createReadme(data), () => {
            console.log('success')
            
        })
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    })
}

renderLicenseBadge = (data) => {
    licenseType = data
    // console.log(licenseType)

    
    if (licenseType === 'Mozilla Public License 2.0') {
        licenseBadge = `![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
       
        return licenseBadge
    } else if (licenseType === 'MIT License') {
        licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
       
        return licenseBadge
    } else {
        licenseExplained = 'There is no license chosen for this project.'
        return 'There is no license chosen for this project.'
    }
}
promptQuestions()
// Function call to initialize app
