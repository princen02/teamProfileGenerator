const Manager = require("../library/Manager");

test("Test Manager constructor name iniitialization",() => {
    const testManager = new Manager("Prince")
    expect(testManager.getName()).toBe("Prince")
})
test("Test Manager constructor ID",() => {
    const testManager = new Manager("Prince", 123)
    expect(testManager.getId()).toBe(123)
})
test("Test Manager constructor Email",() => {
    const testManager = new Manager("Prince", 123, "Prince@gmail.com")
    expect(testManager.getEmail()).toBe("Prince@gmail.com")
})
test("Test Manager constructor Github",() => {
    const testManager = new Manager("Prince", 123, "Prince@gmail.com","princen02")
    expect(testManager.getGithub()).toBe("princen02")
})