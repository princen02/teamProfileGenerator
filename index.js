const inquirer = require("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
let employeesDB =""

startTeamInputs()
function startTeamInputs(){
    inquirer.prompt([
        {
            type:"list",
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


function hireManager(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Manager name",
            name:"ename"
        },
        {
            type:"input",
            message:"Enter Manager ID",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Manager email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Manager Officenumber",
            name:"key"
        }
    ]).then(({ename,id,email,key})=> {
       const newManager = new Manager(ename,id,email,key);
       employeesDB += ``
       startTeamInputs()
    })
}


function exitApp(){
    process.exit(0);
}