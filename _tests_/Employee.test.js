const Employee = require("../library/Employee");

test("Test Employee constructor name iniitialization",() => {
    const testEmployee = new Employee("Prince")
    expect(testEmployee.getName()).toBe("Prince")
})
test("Test Employee constructor ID",() => {
    const testEmployee = new Employee("Prince", 123)
    expect(testEmployee.getId()).toBe(123)
})
test("Test Employee constructor Email",() => {
    const testEmployee = new Employee("Prince", 123, "Prince@gmail.com")
    expect(testEmployee.getEmail()).toBe("Prince@gmail.com")
})