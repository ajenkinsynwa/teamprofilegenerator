const Manager = require('../lib/Manager');
const manager = new Manager('mike', '2345678', 'mike485@gmail.com', '485');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('mike');
    expect(manager.id).toBe('2345678');
    expect(manager.email).toBe('mike485@gmail.com');
    expect(manager.officeNumber).toBe('485');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('mike');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('2345678');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('mike485@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('485');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});