const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")


inquirer
.prompt([
 {
     type: "input",
     message: "What is your user name?",
     name: "username"
 },
 {
     type: ""
 }
])


function generateMarkdown(answers) {
    return `
(#) ${answers.title}

 ## Description

${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](##usage)
* [License](##license)
* [Contributors](##contributors)
* [Tests](##tests)
    
## Installation

${answers.install}

## Usage 

${answers.usage}

##License

${answers.license}

## Contributors

${answers.contributors}

## Tests

${answers.tests}
`;
}

promptUser()
    .then(function(answers) {
        const readme = generateMarkdown(answers);

        return 
    })