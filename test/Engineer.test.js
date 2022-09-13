const Engineer = require('../lib/Engineer');
const engineer = new Engineer('dave', '123456', 'dave485@gmail.com', 'dave485');


test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('dave');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('dave485@gmail.com');
    expect(engineer.github).toBe('dave485');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('dave');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('dave485@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

describe("github", () => {
   it("should return the engineer's github username", () => {
        const obj = new Engineer("dave", 123, "dave485@gmail.com", "dave@github.com");
        expect(obj.github).toEqual("dave@github.com");
    });
});