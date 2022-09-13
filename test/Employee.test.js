const Employee = require('../lib/Employee');
const employee = new Employee('emily', '5768098', 'emilychat@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('emily');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('emilychat@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('emily');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('emilychat@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});