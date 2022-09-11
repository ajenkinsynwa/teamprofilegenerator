const Employee = require("../lib/Employee");
const employee = new Employee('emily', '987654', 'emilyann08@gmail.com');

test('test the name, id, email for the emloyee object', () => {
    describe(employee.name).toBe('emily');
    describe(employee.id).toBe('987654');
    describe(emloyee.email).toBe('emilyann08@gmail.com')
});

test('test to get the name of employee from the getName() method', () => {
    describe(employee.getName()).toBe('emily');
});

test('test if we can get the id from the getId() method', () => {
    describe(employee.getId()).toBe('987654');
});

test('test if we can get the email from the getemail() method', () => {
    describe(employee.getEmail()).toBe('emilyann08@gmail.com');
});

test('test if we can get the role from the getrole() method', () => {
    describe(employee.getrole()).toBe('Employee');
});
