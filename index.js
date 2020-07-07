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
.then(answers => {
    generateMarkdown()
})

.catch(error => {
    if(error.isTtyError) {
        prompt("Nothing rendered with this text");
    }else {
        prompt("Input text!");
    }
})

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

async function fn() {
    return 'hello world';
  }
  const callbackFunction = util.callbackify(fn);
  
  callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });

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


