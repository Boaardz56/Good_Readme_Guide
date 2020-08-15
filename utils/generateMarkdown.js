// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ![badge](https://img.shields.io/badge/License-${answers.badge}-blue)

  ## Description

  ${answers.description}

  ### Contact Information
  Email:  ${answers.email} <br>
  GitHub: https://github.com/${answers.GitHub}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](##usage)
  * [Credits](##credits)
  * [Tests](##tests)
  * [License](##license)
    
  ## Installation

    ${answers.installation}
    ${answers.installation2}

  ## Usage 

  > ${answers.usage}
  * ${answers.application}

  ## Credits

  ${answers.credits}

  ## Tests

  <img src ="${answers.image}" width="500">
  ![GIF](${answers.gif})
      
  ## License

  ${answers.license}

  `;
}

module.exports = generateMarkdown;
