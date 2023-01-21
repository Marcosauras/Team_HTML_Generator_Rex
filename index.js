const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
const fs = require("fs");

const teamCreationTemplate = require("./src/TeamCreation-template.js");

// this is the array we are going to put the employee in and the file name.
employeeArray = [];
fileName = [];


function startTeamBuilder() {

    // asks if you would like to build your team page
    function teamBuilding() {
        inquirer.prompt([{
            type: "list",
            message: "Does your team have a Manager?",
            name: "employeeType",
            choices: ["Of course our team has a manager", "we are working on it"]

        }]).then(function (userInput) {
            switch(userInput.employeeType) {
                case "Of course our team has a manager":
                    newManager();
                    break;
                default:
                    buildRestOfTeam();
            }
        })
    }
    // Function used, if Manager is selected (it excludes manager from the future list of options)
    function buildRestOfTeam() {
        inquirer.prompt([{

            type: "list",
            message: "Are you adding an engineer or intern to the team?",
            name: "employeeType",
            choices: ["Engineer", "Intern", "That's everyone"]

        }]).then(function (userInput) {
            switch(userInput.employeeType) {
                case "Engineer":
                    newEngineer();
                    break;
                case "Intern":
                    newIntern();
                    break;
                default:
                    teamNamer();
            }
        })
    }

    // Puts managers information into an array based off inputs
    function newManager() {
        inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Manager Name:"
        },
        {
            type: "input",
            name: "managerId",
            message: "Manager ID:"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Manager eMail:"
        },
        {
            type: "input",
            name: "managerPhone",
            message: "Manager Phone Number:"
        }

        ]).then(value => {
            const manager = new Manager(value.managerName, value.managerId, value.managerEmail, value.managerPhone);
            employeeArray.push(manager);
            buildRestOfTeam();
        });
    }

    // Builds an array with the answers inside for each engineer that gets added.
    function newEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's Name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's eMail?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the engineer's GitHub Username?"
        }

        ]).then(value => {
            const engineer = new Engineer(value.engineerName, value.engineerId, value.engineerEmail, value.engineerGitHub);
            employeeArray.push(engineer);
            buildRestOfTeam();
        });
    }

    // Builds an array of data for an Intern, based off the end-user's inputs
    function newIntern() {
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's eMail address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does your intern go to?"
        }

        ]).then(value => {
            const intern = new Intern(value.internName, value.internId, value.internEmail, value.internSchool);
            employeeArray.push(intern);
            buildRestOfTeam();
        });
    }

    // this will be used to set the name of the team and as the webpage's header.
    function teamNamer() {
        inquirer.prompt([{
            type: "input",
            name: "file",
            message: "What is the name of your team?"
        }

    ]).then(value => {
        const filename = (value.file);
        fileName.push(filename);
        createHtmlFile();
    });
    }
    

    //creates 
    function createHtmlFile() {
        
        fs.writeFileSync(`./dist/${fileName}.html`, teamCreationTemplate(employeeArray), "UTF-8");
        console.log("-------------------------------------------");
        console.log("Your Team page has been created and is ready for use");
        console.log(`The name of your file is ${fileName}.html`);
        console.log("it is located inside of the dist folder");
        console.log(employeeArray)
    }

    teamBuilding();
}

startTeamBuilder();