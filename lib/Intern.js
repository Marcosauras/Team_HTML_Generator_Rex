const Employee = require("./Employee")
// grabbing the functions and constructor from employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getEmpRole() {
        return "Intern"
    }
}
module.exports = Intern;