// example-1
class Transport {
    move() {
        console.log("Transport is moving");
    }
}
class Bus extends Transport {
    move() {
        console.log("Bus moves on the road");
    }
}
class Train extends Transport {
    move() {
        console.log("Train moves on the railway track");
    }
}
let t1 = new Bus();
let t2 = new Train();
t1.move();
t2.move();


// example-2
class Food {
    order() {
        console.log("Food is ordered");
    }
}
class Pizza extends Food {
    order() {
        console.log("Pizza is ordered");
    }
}
class Burger extends Food {
    order() {
        console.log("Burger is ordered");
    }
}
let f1 = new Pizza();
let f2 = new Burger();
f1.order();
f2.order();


// example-3
class HomeDevice {
    turnOn() {
        console.log("Home device is turned on");
    }
}
class SmartDevice extends HomeDevice {
    turnOn() {
        console.log("Smart device is turned on using WiFi");
    }
}
class SmartLight extends SmartDevice {
    turnOn() {
        console.log("Smart light is turned on using mobile app");
    }
}
let s1 = new HomeDevice();
let s2 = new SmartDevice();
let s3 = new SmartLight();
s1.turnOn();
s2.turnOn();
s3.turnOn();
