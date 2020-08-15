//global variables
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
            message: "Which license would you like to use? (i.e. MIT, Boost, MPL, ISC)",
            name: "badge"
        },
        {
            type: "input",
            message: "What is your project about?",
            name: "description"
        },
        {
            type: "input",
            name: "GitHub",
            message: "Enter your GitHub username for your project:",
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
            message: "Any collaborators or third party websites to credit?",
            name: "credits"
        },
        {
            type: "input",
            message: "Any pictures you would like to run? Enter url path here: ",
            name: "image"
        },
        {
            type: "input",
            message: "Any gifs you would like to run? Enter url path here: ",
            name: "gif"
        },
        {
            type: "input",
            message: "Enter license description here: ",
            name: "license"
        }
    ]);
}


//need to ask the questions
promptUser()
    .then(function (answers) {
        //building readme with template literal
        const readme = generateMarkdown(answers);
        // write a file with the readme
        fs.writeFile("README.md", readme, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        return;
    });



//============may use===================

// async function fn() {
//     return 'hello world';
//   }
//   const callbackFunction = util.callbackify(fn);

//   callbackFunction((err, ret) => {
//     if (err) throw err;
//     console.log(ret);
//   });

// return writeFileAsync("README.md", readme);
// })
// .then(function() {
//   console.log("successfully made readme file");
// })
// .catch(function(err) {
//   console.log(err);
// }