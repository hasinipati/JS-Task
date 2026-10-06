class A{
    m1(){
        console.log("method 1 in class A");
        
    }
}
class B extends A{
    m2(){
        console.log("method 2 in class B");
        
    }
}
class C extends B{
    m3(){
        console.log("method 3 in class c");
        
    }
}
let t = new C()
t.m1()
t.m2()
t.m3()


// Hospital --> Doctor --> Surgeon

class Hospital {
    m1() {
        console.log("Hospital: Apollo Hospital");
    }
}
class Doctor extends Hospital {
    m2() {
        console.log("I am a doctor");
    }
}
class Surgeon extends Doctor {
    m3() {
        console.log("I am a surgeon");
    }
}
let s = new Surgeon();
s.m1();
s.m2();
s.m3();


// Vehicle --> Car --> ElectricCar

class Vehicle {
    v1() {
        console.log("This is a vehicle");
    }
}
class Car extends Vehicle {
    v2() {
        console.log("This is a car");
    }
}
class ElectricCar extends Car {
    v3() {
        console.log("This is an electric car");
    }
}
let c = new ElectricCar();
c.v1();
c.v2();
c.v3();

// Company --> Employee --> Developer

// class Company {
//     constructor(name) {
//         this.a = name;
//     }
//     show() {
//         console.log("Company:", this.a);
//     }
// }
// class Employee extends Company {
//     constructor(name, empname) {
//         super(name);
//         this.b = empname;
//     }
//     showEmployee() {
//         super.show();
//         console.log("Employee:", this.b);
//     }
// }
// class Developer extends Employee {
//     constructor(name, empname, language) {
//         super(name, empname);
//         this.c = language;
//     }
//     showDeveloper() {
//         super.showEmployee();
//         console.log("Programming Language:", this.c);
//     }
// }
// let d = new Developer("Infosys", "Hasini", "JavaScript");
// d.showDeveloper();


// University --> Department --> Student

class University {
    constructor(name) {
        this.a = name;
    }
    show() {
        console.log("University:", this.a);
    }
}
class Department extends University {
    constructor(name, dept) {
        super(name);
        this.b = dept;
    }
    showDepartment() {
        super.show();
        console.log("Department:", this.b);
    }
}
class Student extends Department {
    constructor(name, dept, studentName) {
        super(name, dept);
        this.c = studentName;
    }
    showStudent() {
        super.showDepartment();
        console.log("Student:", this.c);
    }
}
let a = new Student("JNTU Hyderabad", "CSE", "Hasini");
a.showStudent();


