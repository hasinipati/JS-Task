let hospital = {
    hospital_name: "Sunrise Hospital",

    location: {
        area: "Khaleelwadi",
        city: "Nizamabad",
        state: "Telangana"
    },

    departments: {
        cardiology: {
            doctor: "Dr.Mukesh",
            beds: 20,
            fee: 1000
        },

        neurology: {
            doctor: "Dr.Srujan",
            beds: 15,
            fee: 1200
        }
    },

    patients: {
        total: 1500,
        admitted: 100,
        discharged: 1400
    },

    facilities: {
        pharmacy: "Avaliable",
        laboratory:"Available",
        ambulance: "Available",
    },

    contact: {
        phone: 9876543210,
        email: "sunrise@gmail.com"
    },
};


// Retrieving the data

console.log(hospital["location"]);

console.log(hospital["location"]["city"]);

console.log(hospital["departments"]);

console.log(hospital["departments"]["cardiology"]);

console.log(hospital["departments"]["cardiology"]["doctor"]);

console.log(hospital["patients"]["total"]);


// Update the data
hospital["location"]["area"] = "Madhapur";
hospital["location"]["city"] = "Hyderabad";
hospital["patients"]["total"] = 1800;

console.log("After updating the data");
console.log(hospital["location"]);
console.log(hospital["patients"]);


// Add new property

hospital["patients"]["emergency"] = 50;

hospital["departments"]["cardiology"]["specialization"] = "Heart Specialist";

console.log("adding a new property");

console.log(hospital["patients"]);
console.log(hospital["departments"]["cardiology"]);


// Delete property

delete hospital["facilities"]["ambulance"];

delete hospital["patients"]["discharged"];

console.log("after deleting ");

console.log(hospital["facilities"]);
console.log(hospital["patients"]);
