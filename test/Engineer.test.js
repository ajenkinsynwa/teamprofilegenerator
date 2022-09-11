const Engineer = require("../lib/Engineer");
const engineer = new Engineer('dana', '1234567', 'danamason@gmail.com');

test('test the name, id, email for the emloyee object', () => {
    describe(engineer.name).toBe('dana');
    describe(engineer.id).toBe('1234567');
    describe(engineer.email).toBe('danamason@gmail.com')
});

test('test to get the name of employee from the getName() method', () => {
    describe(engineer.getName()).toBe('dana');
});

test('test if we can get the id from the getId() method', () => {
    describe(engineer.getId()).toBe('1234567');
});

test('test if we can get the email from the getemail() method', () => {
    describe(engineer.getEmail()).toBe('danamason@gmail.com');
});

test('test if we can get the role from the getrole() method', () => {
    describe(engineer.getrole()).toBe('Engineer');
});
