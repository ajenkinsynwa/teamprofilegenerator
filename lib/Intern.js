const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //same as engineer and manager but added school
    super(name, id, email);
    this.school = school;
  }

  getSchoole () {
    this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;