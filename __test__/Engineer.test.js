const Engineer = require("../lib/Engineer");

describe("name", () => {
    it("it should be the name Meowscarada", () => {
    const engineer = new Engineer("Meowscarada", "0908", "Meowscarada@pokemon.com", "github.com/Meow");
    
    expect(engineer.name).toBe("Meowscarada");
    });
});
describe("id", () => {
    it("it should be Meowscarada@pokemon.com", () => {
    const engineer = new Engineer("Meowscarada", "0908", "Meowscarada@pokemon.com", "github.com/Meow");
    
    expect(engineer.gitHubId).toBe("github.com/Meow");
    });
});