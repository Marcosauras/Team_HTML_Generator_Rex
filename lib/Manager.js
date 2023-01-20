const Employee = require("./Employee")
// grabbing the functions and constructor from employee
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super (name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum
    }
    getEmpRole() {
        return "Manager"
    }
}
module.exports = Manager