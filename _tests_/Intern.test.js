const Intern = require("../library/Intern");

test("Test Intern constructor name iniitialization",() => {
    const testIntern = new Intern("Prince")
    expect(testIntern.getName()).toBe("Prince")
})
test("Test Intern constructor ID",() => {
    const testIntern = new Intern("Prince", 123)
    expect(testIntern.getId()).toBe(123)
})
test("Test Intern constructor Email",() => {
    const testIntern = new Intern("Prince", 123, "Prince@gmail.com")
    expect(testIntern.getEmail()).toBe("Prince@gmail.com")
})
test("Test Intern constructor Github",() => {
    const testIntern = new Intern("Prince", 123, "Prince@gmail.com","princen02")
    expect(testIntern.getGithub()).toBe("princen02")
})