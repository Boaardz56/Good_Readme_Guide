const inquirer = require("inquirer");//so we can prompt user
const fs = require("fs");//so we can file system then write
const util = require("util");//so we have the promises
const generateMarkdown = require("./utils/generateMarkdown")


function promptUser() {
 return inquirer.prompt([
 {
     type: "input",
     message: "What is your project title?",
     name: "title"
 },
 {
     type: "input",
     message: "What is your project about?",
     name: "description"
 },
 {
     type: "input",
     message: "How do you install your project?",
     name: "installation" 
 },
 {
     type: "input",
     message: "How do you use your project?",
     name: "usage"
 },
 {
     type: "input",
     message: "Who contributed to this project?",
     name: "contributors"
}, 
{
    type: "input",
    message: "Any tests you would like to run?",
    name: "tests"
},
])
}


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

//need to ask the questions
promptUser()
   .then(function(answers) {
       //building readme with template literal
      const readme = generateMarkdown(answers);
       // write a file with the readme
      return writeFileAsync("README.md", readme);
    })
   .then(function() {
      console.log("successfully made readme file");
    })
   .catch(function(err) {
      console.log(err);
    });



//============may use===================
// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// async function fn() {
//     return 'hello world';
//   }
//   const callbackFunction = util.callbackify(fn);
  
//   callbackFunction((err, ret) => {
//     if (err) throw err;
//     console.log(ret);
//   });