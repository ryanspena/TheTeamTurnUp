const Employee = require("../lib/Employee.js");

test('creates Employee object with name, id, email, and role properties', () => {
    const employee = new Employee("Bucky Barnes", 0, "buckyreginaldbarnes@bark.com");

    expect(employee.name).toBe("Bucky");
    expect(employee.id).toBe(0);
    expect(employee.email).toBe("buckyreginaldbarnes@bark.com");
    expect(employee.role).toBe("Employee");
});

test('Employee object has getters for name, id, and email', () => {
    const employee = new Employee("Winter Soldier", 1, "captainamerica@us.edu");

    expect(employee.getName()).toBe("Winter Soldier");
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe("captainamerica@us.edu");
    expect(employee.getRole()).toBe("Employee");
}); 
