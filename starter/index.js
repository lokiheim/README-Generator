const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: "input",
    Message: "What is the project title?",
    name: "Title",
}, {
    type: "input",
    Message: "What is the project about, Please give a description of your project?",
    name: "Description",
}, {
    type: "input",
    Message: "Table of Contents (Optional)",
    name: "Table of Contents",
}, {
     type: "input",
     Message: "Installation, What are the steps required to install your project?",
    name: "Installation",
}, {
     type: "input",
     Message: "Provide instructions and examples for use. Include screenshots as needed.",
     name: "Usage",
}, {
    type: "input",
    Message: "List your collaborators, if any, with links to their GitHub profiles.",
    name: "Credits",
}, {
    //add a kind of list if you can, am I putting a badges section?
    type: "input", // instead of input use list create another header function maybe? That can switch
    Message: "This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/]",
    name: "License",
}, {
    type: "input",
    output: "If your project has a lot of features, list them here.",
    name: "Features",
}, {
    type: "input",
    output: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so",
    name: "How to Contribute",
}, {
    type: "input",
    output: "write tests for your application. Then provide examples on how to run them here.",
    name: "Tests",
}, {
    type: "input",
    output: "Inspiration, code snippets, etc.",
    name: "Acknowledgments",
}, {
    type: "input",
    output: "Please enter your full name",
    name: "Name",
}, {
    type: "input",
    output: "Enter your email",
    name: "Email",
}, {
    type: "input",
    output: "Please enter your Github link.",
    name: "Github",
},
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console,log(fileName)
        console,log(data)
        if (err) {
            return console.log(err)
        }else {
            return console.log("success")
        }
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
