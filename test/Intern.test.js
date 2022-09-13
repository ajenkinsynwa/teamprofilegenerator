const Intern = require('../lib/Intern');
const intern = new Intern('dana', '987654', 'dana485@gmail.com', 'Charlotte');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('dana');
    expect(intern.id).toBe('987654');
    expect(intern.email).toBe('dana485@gmail.com');
    expect(intern.school).toBe('Charlotte');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('dana');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('987654');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('dana485@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Charlotte');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});