// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

    ![badge](https://img.shields.io/badge/License-${answers.badge}-blue)

    ## Description

      ${answers.description}

      <br>
      GitHub: https://github.com/${answers.GitHub}

    ## Table of Contents
      * [Installation](#installation)
      * [Usage](##usage)
      * [License](##license)
      * [Contributors](##contributors)
      * [Tests](##tests)
    
    ## Installation

      > ${answers.install}

    ## Usage 

      ${answers.usage}

    ## Credits

      ${answers.credits}

    ## Tests

    <img src ="${answers.tests}" width="500">
      
    ##License

    ${answers.license}
  `;
}

module.exports = generateMarkdown;
