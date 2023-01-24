//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
// array of questions
const questions = [{
  type: "input",
  message: "Project title?",
  name: "Title"
}, {
  type: "input",
  message: "What's the project about? Give a detailed description of the project?",
  name: "Description"
}, {
  type: "input",
  message: "Table of Contents.",
  name: "Table of Contents"
}, {
  type: "input",
  message: "Any installation and or dependencies?",
  name: "Installation"
}, {
  type: "input",
  message: "Instructions",
  name: "Usage"
}, {
  type: "checkbox",
  message: "Please select a license applicable to this project.",
  choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  name: "License",
}, {
  type: "input",
  message: "Any contributors. (Use GitHub usernames):",
  name: "Contributors"
}, {
  type: "input",
  message: "What walkthrough of required tests if needed.",
  name: "Tests"
}, {
  type: "input",
  message: "Contact info for inquiries.",
  name: "Questions"
}, {
  type: 'input',
  message: 'Github username?',
  name: 'Username'
}, {
  type: 'input',
  message: 'contact email address?',
  name: 'Email'
},

]


// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();
