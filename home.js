class Student {
    constructor(firstName, lastName, birthYear, course) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.course = course;
      this.grades = [];
      this.attendance = [];
    }
    addGrade(grade) {
      this.grades.push(grade);
    }
    addAttendance(attended) {
      this.attendance.push(attended);
    }
    getAverageGrade() {
        if (this.grades.length === 0) {
          return 0;
        } else {
          const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
          return sum / this.grades.length;
        }
      }
      getAverageAttendance() {
        if (this.attendance.length === 0) {
          return 0;
        } else {
          const sum = this.attendance.reduce((sum, attend) => sum + attend, 0);
          return sum / this.attendance.length;
        }
      }
    getAttendedClasses() {
      return this.attendance.length;
    }
  
    changeCourse(newCourse) {
      this.course = newCourse;
      this.grades = [];
      this.attendance = [];
    }
  
    getStudentInfo() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        birthYear: this.birthYear,
        course: this.course,
        grades: this.grades,
        attendance: this.attendance,
        averageGrade: this.getAverageGrade(),
        averageAttendance: this.getAverageAttendance(),
        attendedClasses: this.getAttendedClasses()
      };
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  const student = new Student('Іван', 'Іваненко', 2000, 1);
  student.addGrade(95);
  student.addGrade(85);
  student.addAttendance(true);
  student.addAttendance(false);
  
  console.log(student.getStudentInfo());
  
  student.changeCourse(2);
  console.log(student.getStudentInfo());
  