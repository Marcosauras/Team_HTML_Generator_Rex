const Intern = require("../lib/Intern");

describe("name", () => {
    it("it should be the name Sue", () => {
    const intern = new Intern("Meowscarada", "0908", "Meowscarada@pokemon.com", "Uva University");
    
    expect(intern.name).toBe("Meowscarada");
    });
});
describe("Email", () => {
    it("it should be Meowscarada@pokemon.com", () => {
    const intern = new Intern("Meowscarada", "0908", "Meowscarada@pokemon.com", "Uva University");
    
    expect(intern.school).toBe("Uva University");
    });
});