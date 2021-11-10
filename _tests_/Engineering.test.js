const Engineer = require("../library/Engineer");

test("Test Engineer constructor name iniitialization",() => {
    const testEngineer = new Engineer("Prince")
    expect(testEngineer.getName()).toBe("Prince")
})
test("Test Engineer constructor ID",() => {
    const testEngineer = new Engineer("Prince", 123)
    expect(testEngineer.getId()).toBe(123)
})
test("Test Engineer constructor Email",() => {
    const testEngineer = new Engineer("Prince", 123, "Prince@gmail.com")
    expect(testEngineer.getEmail()).toBe("Prince@gmail.com")
})
test("Test Engineer constructor Github",() => {
    const testEngineer = new github("Prince", 123, "Prince@gmail.com","princen02")
    expect(testGithub.getGithub()).toBe("princen02")
})