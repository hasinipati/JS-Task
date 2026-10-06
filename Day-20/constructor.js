class Patient {

    static hospitalName = "Apollo Hospital";
    static location = "Hyderabad";

    constructor(patient_id, patient_name, age, disease, doctor_name) {
        this.Mypatient_id = patient_id;
        this.Mypatient_name = patient_name;
        this.Myage = age;
        this.Mydisease = disease;
        this.Mydoctor_name = doctor_name;
    }

    display() {
        console.log("Hospital Name:", Patient.hospitalName);
        console.log("Location:", Patient.location);
        console.log("Patient ID:", this.Mypatient_id);
        console.log("Patient Name:", this.Mypatient_name);
        console.log("Age:", this.Myage);
        console.log("Disease:", this.Mydisease);
        console.log("Doctor Name:", this.Mydoctor_name);
    }
}

let patient1 = new Patient(101,"Ravi",25,"Fever","Dr. Kumar");
let patient2 = new Patient(102,"Rahul",32,"Diabetes","Dr. Priya");
let patient3 = new Patient(103,"Praveena",28,"Migraine","Dr. Anil");

console.log("----patient1-----");
patient1.display();
console.log("----patient2-----");
patient2.display();
console.log("----patient3-----");
patient3.display();


class FoodOrder{
    static restaurant = "Paradise"
    static location = "JNTU metro"

    constructor(order_id,customer_name,food_item,quantity,price){
        this.Myorder_id = order_id
        this.Mycustomer_name = customer_name
        this.Myfood_item = food_item
        this.Myquantity = quantity
        this.Myprice = price
    }
    display(){
        console.log("Name of Restaurant:",FoodOrder.restaurant);
        console.log("Location of Restaurant:",FoodOrder.location);
        console.log("Order Id:",this.Myorder_id);
        console.log("Customer name:",this.Mycustomer_name);
        console.log("Name of food item:",this.Myfood_item);
        console.log("Quantity of food ",this.Myquantity);
        console.log("Price:",this.Myprice);
                
    }
}
let order1 = new FoodOrder(101,"Ravi","Biryani","Full",250)
let order2 = new FoodOrder(102,"Rahul","Veg Biryani","single",180)
let order3 = new FoodOrder(103,"praveena","Roti",2,150)
console.log("----order1-----");
order1.display()
console.log("----order2-----");
order2.display()
console.log("----order3-----");
order3.display()

class ParcelDelivery {

    static deliveryCompany = "DTDC";
    static location = "Hyderabad";

    constructor(tracking_id, sender_name, receiver_name, destination, weight) {
        this.Mytracking_id = tracking_id;
        this.Mysender_name = sender_name;
        this.Myreceiver_name = receiver_name;
        this.Mydestination = destination;
        this.Myweight = weight;
    }

    display() {
        console.log("Delivery Company:", ParcelDelivery.deliveryCompany);
        console.log("Location:", ParcelDelivery.location);
        console.log("Tracking ID:", this.Mytracking_id);
        console.log("Sender Name:", this.Mysender_name);
        console.log("Receiver Name:", this.Myreceiver_name);
        console.log("Destination:", this.Mydestination);
        console.log("Weight:", this.Myweight);
    }
}

let parcel1 = new ParcelDelivery("DTDC101","Ravi","Rahul","Hyderabad","2 KG");
let parcel2 = new ParcelDelivery("DTDC102","Praveena","Kiran","Warangal","1.5 KG");
let parcel3 = new ParcelDelivery("DTDC103","Arjun","Vijay","Nizamabad","3 KG");

console.log("----parcel1-----");
parcel1.display();
console.log("----parcel2-----");
parcel2.display();
console.log("----parcel3-----");
parcel3.display();


