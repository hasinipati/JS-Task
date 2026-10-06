// Example 1 - Bank Account
class BankAccount {

    static bankName = "State Bank of India";
    static branch = "Hyderabad";
data(accountNum, customerName, accountType, balance, city) {
        this.accountNum = accountNum;
        this.customerName = customerName;
        this.accountType = accountType;
        this.balance = balance;
        this.city = city;
    }
display() {
        console.log("Bank Name:", BankAccount.bankName);
        console.log("Branch:", BankAccount.branch);
        console.log("Account Number:", this.accountNum);
        console.log("Customer Name:", this.customerName);
        console.log("Account Type:", this.accountType);
        console.log("Balance:", this.balance);
        console.log("City:", this.city);
        console.log("-------------------------");
    }
}
let account1 = new BankAccount();
account1.data(10001, "Hasini", "Savings", 25000, "Hyderabad");
let account2 = new BankAccount();
account2.data(10002, "Sathivka", "Current", 45000, "Warangal");
let account3 = new BankAccount();
account3.data(10003, "Vaishu", "Savings", 32000, "Nizamabad");
let account4 = new BankAccount();
account4.data(10004, "Sanjana", "Savings", 18000, "Karimnagar");

account1.display();
account2.display();
account3.display();
account4.display();


// Example 2 — Employee
class Employee {

    static companyName = "Infosys";
    static companyLocation = "Hyderabad";

    data(employeeId, employeeName, department, salary, experience) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.department = department;
        this.salary = salary;
        this.experience = experience;
    }

    display() {
        console.log("Company:", Employee.companyName);
        console.log("Company Location:", Employee.companyLocation);
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.employeeName);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
        console.log("Experience:", this.experience);
        console.log("-------------------------");
    }
}
let employee1 = new Employee();
employee1.data(101, "Rahul", "IT", 45000, "2 Years");
let employee2 = new Employee();
employee2.data(102, "Vedha", "HR", 40000, "3 Years");
let employee3 = new Employee();
employee3.data(103, "Prasad", "Finance", 50000, "4 Years");
let employee4 = new Employee();
employee4.data(104, "Srujan", "Testing", 42000, "2 Years");

employee1.display();
employee2.display();
employee3.display();
employee4.display();


// Example 3 — Hotel Room
class HotelRoom {

    static hotelName = "Taj Hotel";
    static hotelLocation = "Hyderabad";

    data(roomNumber, customerName, roomType, price, stayDays) {
        this.roomNumber = roomNumber;
        this.customerName = customerName;
        this.roomType = roomType;
        this.price = price;
        this.stayDays = stayDays;
    }
    display() {
        console.log("Hotel Name:", HotelRoom.hotelName);
        console.log("Hotel Location:", HotelRoom.hotelLocation);
        console.log("Room Number:", this.roomNumber);
        console.log("Customer Name:", this.customerName);
        console.log("Room Type:", this.roomType);
        console.log("Price Per Day:", this.price);
        console.log("Stay Days:", this.stayDays);
        console.log("-------------------------");
    }
}
let room1 = new HotelRoom();
room1.data(101, "Ravi", "Deluxe", 3500, 2);
let room2 = new HotelRoom();
room2.data(102, "Kesava", "Suite", 6000, 3);
let room3 = new HotelRoom();
room3.data(103, "Ramaa", "Standard", 2500, 1);
let room4 = new HotelRoom();
room4.data(104, "Revanth", "Deluxe", 3500, 4);

room1.display();
room2.display();
room3.display();
room4.display();

