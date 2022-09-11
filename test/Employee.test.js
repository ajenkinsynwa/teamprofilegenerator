const Employee = require("../lib/Employee");
const employee = new Employee('emily', '987654', 'emilyann08@gmail.com');

testobject('test the name, id, email for the emloyee object', () => {
    describe(employee.name).toBe('emily');
    describe(employee.id).toBe('987654');
    describe(emloyee.email).toBe('emilyann08@gmail.com')
});

testobject('test to get the name of employee from the getName() method', () => {
    describe(employee.getName()).toBe('emily');
});

testobject('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('987654');
});

testobject('test if we can get the email from the getemail() method', () => {
    expect(employee.getEmail()).toBe('emilyann08@gmail.com');
});

testobject('test if we can get the role from the getrole() method', () => {
    expect(employee.getrole()).toBe('Employee');
});
