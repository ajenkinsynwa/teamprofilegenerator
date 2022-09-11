const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
   //used super to get parent 
    super(name, id, email);
    this.github = github;
  };

  getRole() {
    return "Engineer";
  };

  getGithub() {
    return this.github;
  }
}


module.exports = Engineer;