const inquirer = require("inquirer");
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
const fs = require("fs")
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
                 hireEngineer();
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
       employeesDB += `
       <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Manager</h5>
    <h6 class="card-subtitle mb-2 text-muted">${newManager.name}</h6>
    <p class="card-text">ID:${newManager.id}</p>
    <p class="card-text">Office Number: ${newManager.officeNumeber}</p>
    <a href="mail:${newManager.email}" class="card-link">Contact: ${newManager.email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
       `
       startTeamInputs()
    })
}
function hireEngineer(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Engineer name",
            name:"ename"
        },
        {
            type:"input",
            message:"Enter Engineer ID",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Engineer email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Engineer Officenumber",
            name:"key"
        }
    ]).then(({ename,id,email,key})=> {
       const newEngineer = new Engineer(ename,id,email,key);
       employeesDB += `
       <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Engineer</h5>
    <h6 class="card-subtitle mb-2 text-muted">${newEngineer.name}</h6>
    <p class="card-text">ID:${newEngineer.id}</p>
    <p class="card-text">Github : <a href="${newEngineer.github}">Profile</a></p>
    <a href="mail:${newEngineer.email}" class="card-link">Contact: ${newEngineer.email}</a>
  
  </div>
</div>
       `
       startTeamInputs()
    })
}
function hireIntern(){
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Intern name",
            name:"ename"
        },
        {
            type:"input",
            message:"Enter Intern ID",
            name:"id"
        },
        {
            type:"input",
            message:"Enter Intern email",
            name:"email"
        },
        {
            type:"input",
            message:"Enter Intern Officenumber",
            name:"key"
        }
    ]).then(({ename,id,email,key})=> {
       const newIntern = new Intern(ename,id,email,key);
       employeesDB += `
       <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Intern</h5>
    <h6 class="card-subtitle mb-2 text-muted">${newIntern.name}</h6>
    <p class="card-text">ID:${newIntern.id}</p>
    <p class="card-text">School: ${newIntern.schoolName}</p>
    <a href="mail:${newIntern.email}" class="card-link">Contact: ${newIntern.email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
       `
       startTeamInputs()
    })
}

function exitApp(){
    var StarterHTML=`
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>`

    var ClosingHTML =`

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    -->
  </body>
</html>
    `
    var HtmlFile = StarterHTML + employeesDB + ClosingHTML
    console.log(HtmlFile)
    fs.writeFileSync("./index.html",HtmlFile,function(err,dat){
        if (err) throw err;
    })

    console.log("------------------------Team File created----------------------------")


    process.exit(0);
}                                                                         