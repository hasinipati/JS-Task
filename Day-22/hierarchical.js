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
class C extends A{
    m3(){
        console.log("method 3 in class C");
        
    }
}
let t = new C()
t.m1()
t.m3()
// t.m2()

let t1 = new B()
t1.m1()
t1.m2()


// Hospital --> Doctor & Nurse

class Hospital {
    constructor(name) {
        this.a = name;
    }
    show() {
        console.log("Hospital:", this.a);
    }
}
class Doctor extends Hospital {
    constructor(name, specialization) {
        super(name);
        this.b = specialization;
    }
    showDoctor() {
        super.show();
        console.log("Specialization:", this.b);
    }
}
class Nurse extends Hospital {
    constructor(name, department) {
        super(name);
        this.c = department;
    }
   showNurse() {
        super.show();
        console.log("Department:", this.c);
    }
}
let d = new Doctor("Apollo Hospital", "Cardiology");
d.showDoctor();

let n = new Nurse("Apollo Hospital", "Emergency");
n.showNurse();



// Vehicle --> Car & Bike
class Vehicle {
    constructor(brand) {
        this.a = brand;
    }

    show() {
        console.log("Brand:", this.a);
    }
}
class Car extends Vehicle {
    constructor(brand, seats) {
        super(brand);
        this.b = seats;
    }
    showCar() {
        super.show();
        console.log("Seats:", this.b);
    }
}
class Bike extends Vehicle {
    constructor(brand, engine) {
        super(brand);
        this.c = engine;
    }
    showBike() {
        super.show();
        console.log("Engine:", this.c);
    }
}
let car = new Car("Hyundai", 5);
car.showCar();

let bike = new Bike("Honda", "125cc");
bike.showBike();


// School --> Student & Teacher

class School {
    constructor(name) {
        this.a = name;
    }
    show() {
        console.log("School:", this.a);
    }
}
class Student extends School {
    constructor(name, className) {
        super(name);
        this.b = className;
    }
    showStudent() {
        super.show();
        console.log("Class:", this.b);
    }
}
class Teacher extends School {
    constructor(name, subject) {
        super(name);
        this.c = subject;
    }

    showTeacher() {
        super.show();
        console.log("Subject:", this.c);
    }
}

let s = new Student("Delhi Public School", "10th Class");
s.showStudent();

let T = new Teacher("Delhi Public School", "Mathematics");
T.showTeacher();


// Bank --> Savings Account & Current Account

class Bank {
    constructor(name) {
        this.a = name;
    }
    show() {
        console.log("Bank:", this.a);
    }
}
class SavingsAccount extends Bank {
    constructor(name, interest) {
        super(name);
        this.b = interest;
    }
    showSavings() {
        super.show();
        console.log("Interest Rate:", this.b);
    }
}
class CurrentAccount extends Bank {
    constructor(name, limit) {
        super(name);
        this.c = limit;
    }
    showCurrent() {
        super.show();
        console.log("Transaction Limit:", this.c);
    }
}
let S = new SavingsAccount("SBI", "6%");
S.showSavings();

let c = new CurrentAccount("SBI", "5 Lakhs");
c.showCurrent();