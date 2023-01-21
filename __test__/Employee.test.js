const Employee = require("../lib/Employee");

describe("name", () => {
    it("it should be the name Meowscarada", () => {
    const employee = new Employee("Meowscarada", "0908", "Meowscarada@pokemon.com");
    
    expect(employee.name).toBe("Meowscarada");
    });
});
describe("Email", () => {
    it("it should be Meowscarada@pokemon.com", () => {
    const employee = new Employee("Meowscarada", "0908", "Meowscarada@pokemon.com");
    
    expect(employee.email).toBe("Meowscarada@pokemon.com");
    });
});