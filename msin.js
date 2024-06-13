// ************UNIVERSITY MANAGMENT SYSTEM************************************
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber, courses) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.courses = courses;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary, courses) {
        super(name, age);
        this.salary = salary;
        this.courses = courses;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addstudent(std, course) {
        this.students.push(std);
        std.registerForCourses(course);
    }
    setinstructor(ins) {
        this.instructors.push(ins);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) { this.courses.push(course); }
}
// *************Student********************
const std1 = new Student("azeem", 20, 1, []);
const std2 = new Student("hadi", 22, 2, []);
const std3 = new Student("owais", 25, 3, []);
const std4 = new Student("hafsa", 27, 4, []);
// console.log(std1)
// *********************instructor*************
const ins1 = new Instructor("Ami", 50, 4000, []);
const ins2 = new Instructor("Abu", 60, 5000, []);
// console.log(ins1)
// ************************Course************************
const course00 = new Course(1, "BlockChain");
const course01 = new Course(2, "Metaverse");
course00.addstudent(std1, course00);
course01.addstudent(std2, course00);
course01.addstudent(std3, course01);
course01.addstudent(std4, course01);
course00.setinstructor(ins1);
course00.setinstructor(ins2);
course01.setinstructor(ins2);
console.log(std1.courses);
// console.log(course00.instructors);
// console.log(course01.students);
// std1.registerForCourses(course00)
// std1.registerForCourses(course01)
// std2.registerForCourses(course00)
// std4.registerForCourses(course00)
// std3.registerForCourses(course01)
// console.log(std4.courses)
// console.log(course00.students)
// console.log(std1.courses)
// ***********************Department***************************************
const dept1 = new Department("IT");
const dept2 = new Department("PT");
dept1.addCourse(course00);
dept1.addCourse(course01);
export {};
// console.log(dept1.courses[1]);
