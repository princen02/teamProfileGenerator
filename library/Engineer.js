const Employee = require("./Employee");
class Engineer extends Employee{
    constructor(name,id,email,github){
       super(name,id,email)
       this.github = githbub
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
  
}
module.exports =  Engineer