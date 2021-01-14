// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const generateLicense = require("./utils/generateLicense.js");
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "Input",
    name: "name",
    message: "Your Name:"
  },
  {
    type: "Input",
    name: "email",
    message: "Your Email:"
  },
  {
    type: "Input",
    name: "githubUsername",
    message: "Your GitHub username:"
  },
  {
    type: "Input",
    name: "title",
    message: "Project Title:"
  },
  {
    type: "list",
    name: "license",
    message: "Select A License:",
    choices: [
      {
        name: "Apache, Version 2.0",
        value: "apache",
        short: "Apache"
      },
      {
        name: "GNU GPLv3",
        value: "gpl3",
        short: "GNU GPLv3"
      },
      {
        name: "MIT License",
        value: "mit",
        short: "MIT License"
      }
    ]
  },
  {
  	type: "confirm",
  	name: "generateLicense",
  	message: "Do you want to generate the license File? ",
  	default: true
  },
  {
    type: "input",
    name: "description",
    message: "Project Description:"
  },
  {
    type: "editor",
    name: "installation",
    message: "Installation Instructions:"
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Instructions:"
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Contribution Guidelines:"
  },
  {
    type: "input",
    name: "tests",
    message: "How to Run the Tests:"
  },
  {
    type: "input",
    name: "screenshot",
    message: "Filename of screenshot:"
  },
  {
  	type: "input",
  	name: "directory",
  	message: "Where should this be saved? (*path name* only): "
  }
];

// TODO: Create a function to write README file
function writeToFile(path, data) {
  let markdown = generateMarkdown(data);
  let license = getLicense(data);

  if(path !== "") { path += "\\"; }

  // create markdown file
  fs.writeFile(`${path}README.md`, markdown.trim(), (err) =>
    err ? console.error(err) : console.log('Saved README.mdq')
  );

  // create license file IF user said "yes"
  if(data.generateLicense) {
  	fs.writeFile(`${path}LICENSE`, markdown.trim(), (err) =>
	    err ? console.error(err) : console.log('Saved LICENSE')
	  );
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(answers => {
      writeToFile(answers.directory, answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        console.error("prompt couldn't be rendered in the current environment");
      } else {
          console.error(error);
      }
    });
}

// Function call to initialize app
init();
