const Manager = require("../lib/Manager");

describe("name", () => {
    it("it should be the name Sue", () => {
    const manager = new Manager("Meowscarada", "0908", "Meowscarada@pokemon.com", "7405232");
    
    expect(manager.name).toBe("Meowscarada");
    });
});
describe("Email", () => {
    it("it should be Meowscarada@pokemon.com", () => {
    const manager = new Manager("Meowscarada", "0908", "Meowscarada@pokemon.com", "7405232");
    
    expect(manager.officeNum).toBe("7405232");
    });
});