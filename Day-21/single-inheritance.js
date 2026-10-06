// Bank Account
class Bank {
    constructor(bankName) {
        this.bankName = bankName;
    }
    showBank() {
        console.log("Bank: " + this.bankName);
    }
}
class Account extends Bank {
    constructor(bankName, accountHolder) {
        super(bankName);
        this.accountHolder = accountHolder;
    }
    showAccount() {
        super.showBank();
        console.log("Account Holder: " + this.accountHolder);
    }
}
let account1 = new Account("SBI", "Hasini");
account1.showAccount();


// Hospital Appointment
class Hospital {
    constructor(hospitalName) {
        this.hospitalName = hospitalName;
    }
    showHospital() {
        console.log("Hospital: " + this.hospitalName);
    }
}
class Appointment extends Hospital {
    constructor(hospitalName, patientName) {
        super(hospitalName);
        this.patientName = patientName;
    }
    showAppointment() {
        super.showHospital();
        console.log("Patient Name: " + this.patientName);
    }
}
let appointment1 = new Appointment("Apollo Hospital", "Priya");
appointment1.showAppointment();


// Movie Booking
class Cinema {
    constructor(cinemaName) {
        this.cinemaName = cinemaName;
    }
    showCinema() {
        console.log("Cinema: " + this.cinemaName);
    }
}
class MovieTicket extends Cinema {
    constructor(cinemaName, movieName) {
        super(cinemaName);
        this.movieName = movieName;
    }
    showTicket() {
        super.showCinema();
        console.log("Movie: " + this.movieName);
    }
}
let ticket1 = new MovieTicket("PVR Cinemas", "Pushpa 2");
ticket1.showTicket();


// College Student
class College {
    constructor(collegeName) {
        this.collegeName = collegeName;
    }
    showCollege() {
        console.log("College: " + this.collegeName);
    }
}
class Student extends College {
    constructor(collegeName, studentName) {
        super(collegeName);
        this.studentName = studentName;
    }
    showStudent() {
        super.showCollege();
        console.log("Student Name: " + this.studentName);
    }
}
let student1 = new Student("KITSW", "Hasini");
student1.showStudent();
