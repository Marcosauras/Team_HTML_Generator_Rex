const Employee = require("./Employee");
// grabbing the functions and constructor from employee
class Engineer extends Employee {
    constructor (name, id, email, gitHubId) {
        super (name, id, email);
        this.gitHubId = gitHubId;
    }
    getGithubId() {
        return this.gitHubId
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer;