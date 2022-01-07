// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const utils = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description for your README.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter any installation instructions.',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license for your application.',
        choices: ['MIT', 'Apache2.0', 'BSD3', 'GPL', 'Mozilla2.0', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
