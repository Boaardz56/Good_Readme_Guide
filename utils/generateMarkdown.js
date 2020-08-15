// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![badge](https://img.shields.io/badge/License-${answers.badge}-blue)

  ## Description

  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](##usage)
  * [Credits](##credits)
  * [Tests](##tests)
  * [License](##license)
    
  ## Installation

  > ${answers.installation} 

  ## Usage 

    ${answers.usage}
  * ${answers.application1}
  * ${answers.application2}

  ## Credits

  ${answers.credits}

  ## Tests

  <img src ="${answers.image}" width="500">
  ![GIF](${answers.gif})
      
  ## License

  ${answers.license}

  ## Questions
  
  Email:  ${answers.email}
  GitHub: https://github.com/${answers.GitHub}
  `;
}

module.exports = generateMarkdown;
