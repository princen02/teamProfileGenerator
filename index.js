const inquirer = requirer("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");


function startTeamInputs(){
    inquirer.prompt([
        {
            type:"input",
            name:"entry",
            message: "What would you like to do?",
            choices:["Add Engineer","Add Manager","Add Intern","Exit App"]
        }
    ]).then(response =>{
        switch(response.entry){
            case "Add Engineer":
                 hireEnginner();
                 break;
            case "Add Manager":
                hireManager();
                break;
            case "Add Intern":
                hireIntern();
                break;
            case "Exit App":
                exitApp();
                break;        
         

        }
    })
}