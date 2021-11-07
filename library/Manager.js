const Employee = require("./Employee");
class Manager extends Employee{
    constructor(name,id,email,officeNumber){
       super(name,id,email)
       this.officeNumeber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumeber;
    }
    getRole(){
        return "Manager"
    }
  
}
module.exports =  Manager