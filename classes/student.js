const Person = require('./person');

// Overwrite `Person`'s `introduce` instance method in `Student` and `Teacher`
// classes.

// 1. `Student`'s `introduce` should return: "Hello. I am `<firstName>`
//    `<lastName>`, and I study `<major>`."


class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  introduce() {
    //return `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`;
    } else if (student2.GPA > student1.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}