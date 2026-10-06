// Named Function — Without Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// student.display = function hello() {
//     console.log(student.name);
// }
// student.display();

// Named Function — With Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// function display(a) {
//     console.log(a.name);
//     console.log(a.course);
// }
// display(student);

// Named Function — Without Input & With Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad",
//     display: function hello() {
//         return student.name;
//     }
// }
// let result = student.display();
// console.log(result);

// Named Function — With Input & With Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// function display(a) {
//     return a.name;
// }
// let result = display(student);
// console.log(result);

// Anonymous Functions -Without Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad",
//     display: function() {
//         console.log(student.name);
//     }
// }
// student.display();

//  Anonymous Functions -With Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// let display = function(a) {
//     console.log(a.name);
//     console.log(a.course);
// }
// display(student);

//  Anonymous Functions -Without Input & With Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad",
//     display: function() {
//         return student.name;
//     }
// }
// let result = student.display();
// console.log(result);

// //  Anonymous Functions -With Input & With Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// let display = function(a) {
//     return a.name;
// }
// let result = display(student);
// console.log(result);

// Arrow Functions -Without Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad",
//     display: () => {
//         console.log(student.name);
//     }
// }
// student.display();


// Arrow Functions -With Input & Without Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad"
// }
// let display = (a) => {
//     console.log(a.name);
//     console.log(a.course);
// }
// display(student);

// Arrow Functions -Without Input & With Return
// let student = {
//     name: "Pati Hasini",
//     course: "FSD",
//     location: "Hyderabad",
//     display: () => {
//         return student.name;
//     }
// }
// let result = student.display();
// console.log(result);


// Arrow Functions -With Input & With Return
let student = {
    name: "Pati Hasini",
    course: "FSD",
    location: "Hyderabad"
}
let display = (a) => {
    return a.name;
}
let result = display(student);
console.log(result);


// Function with Input & Without Return — Object
// Ex-1
function mobile(a){
    console.log(a.brand);
    console.log(a.price);
}
let phone = {
    brand:"Samsung",
    model:"S24",
    price:50000,
    color:"Black"
}
mobile(phone);

// Ex-2
function college(a){
    console.log(a.name);
    console.log(a.location);
}
let collegeDetails = {
    name:"KITSW",
    location:"Nizamabad",
    course:"CSE",
    students:500
}
college(collegeDetails);

// Function with Input & With Return — Object
// Ex-1
// function laptop(a){
//     return a.price;
// }
// let laptopDetails = {
//     brand:"HP",
//     model:"Pavilion",
//     price:60000,
//     color:"Silver"
// }
// let b = laptop(laptopDetails);
// console.log(b);

// Ex-2
function movie(a){
    return a.name;
}

let movieDetails = {
    name:"Pushpa",
    language:"Telugu",
    year:2021,
    rating:9
}

let b = movie(movieDetails);
console.log(b);

