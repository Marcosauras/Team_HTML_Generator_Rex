const Engineer = require("../lib/Engineer");

describe("name", () => {
    it("it should be the name Sue", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    
    expect(result.name).toBe("Sue");
    expect(result.getName()).toBe("Sue");
    });
});
describe("EmployeeId", () => {
    it("it should be the 1", () => {
    const result = new Engineer("Sue", 1, "sue@work.com", "github.com/sue");
    
    expect(result.id).toEqual(1);
    expect(result.getId()).toEqual(1);
    });
});