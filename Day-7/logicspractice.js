//check number is 3 digit number or not
// let n = 101
// if(n>=100){
//     console.log(n,"it is 3 digit number");
    
// }
// else{
//     console.log(n,"it is 3 digit number");
// }


//  2.Check whether a given number is divisible by both 3 and 5 or not.

// let x = 12
// if(x%3==0 && x%5==0){
//     console.log(x,"is divisible by 3 and 5");
    
// }
// else{
//       console.log(x,"is not divisible by 3 and 5");
// }




// .Check whether a given triangle is a valid triangle or not.
// let a1 = 60
// let a2 = 60
// let a3 = 50
// if( a1>0 && a2>0 && a3>0 && a1+a2+a3 == 180){
//     console.log("the given triangle is valid");
    
// }
// else{
//     console.log("the given triangle is not valid");
    
// }


// 4.Check whether a given number is a multiple of 10 or not.
// x = 22
// if(x%10==0){
//     console.log(x,"is multiple of 10");
    
// }
// else{
//      console.log(x,"is not multiple of 10");
    
// }

// Check the type of triangle based on its sides.
//         Equilateral, Isosceles, or Scalene.
// let a1 = 70
// let a2 = 70
// let a3 = 50
// if(a1==a2 && a2==a3){
//     console.log("given triangle is equilateral");
    
// }
// else if(a1==a2 || a1==a3 || a2==a3){
//     console.log("given triangle is Isosceles");
    
// }
// else{
//      console.log("given triangle is Scalene");   
// }


// Calculate the electricity bill based on units consumed.
//     0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit
let unit = 345
let pay_bill = 0
if(unit<=100){
    pay_bill = unit *2
    console.log("per 1 unit it cost 2 rupee and bill to be paid:",pay_bill);
    
}
else if(unit>100 && unit<=200){
      pay_bill = unit *3
      console.log("per 1 unit it cost 3 rupee and bill to be paid:",pay_bill);
    }
else if(unit>200 && unit<=300){
    pay_bill = unit *5
      console.log("per 1 unit it cost 5 rupee and bill to be paid:",pay_bill);
}
else{
     pay_bill = unit *7
      console.log("per 1 unit it cost 7 rupee and bill to be paid:",pay_bill);
}


// Display the age category.
//     Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.
// let age = 20
// if(age<13){
//     console.log("you are child");
    
// }
// else if(age>=13 && age<=19){
//     console.log("you are teenager");
    
// }
// else if(age>=20 && age<=59){
//      console.log("you are Adult");
// }
// else{
//      console.log("you are senior citizen");
// }


// .Calculate the discount based on shopping amount.
//     Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
// let bill = 10000
// discount = 0
// if(bill<1000){
//     console.log("No discount");
    
// }
// else if(bill>=1000 && bill<=4999){
//     discount = bill *10/100
//     final_amount = bill-discount
//     console.log("for the bill",bill,"you got the 10% discount and pay remaining amount:",final_amount);
//     }
//     else if(bill>=5000 &&bill<=9999){
//          discount = bill *20/100
//     final_amount = bill-discount
//     console.log("for the bill",bill,"you got the 20% discount and pay remaining amount:",final_amount);
//     }
//     else{
//            discount = bill *30/100
//     final_amount = bill-discount
//     console.log("for the bill",bill,"you got the 30% discount and pay remaining amount:",final_amount);
//     }
    

// .Display the season based on the month number.
//     3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
// let season = 1
// if(season>=3 && season<=5){
//     console.log("its is spring");
    
// }
// else if(season>=6 && season<=8){
//      console.log("its is summer")
// }
// else if(season>=9 && season<=11){
//      console.log("its is autumn");
// }
// else if(season==12 || season==1 || season==2){
//            console.log("its is winter");
// }
// else{
//     console.log("invalid");
    
// }


// .Check whether a given year is a Leap Year or not.
//     Condition 1: year % 400 == 0
//     Condition 2: year % 4 == 0 and year % 100 != 0
// let year = 2016
// if(year %400==0){
//     console.log("leap year");
    
// }
// else if(year%4 ==0 && year % 100!=0){
//     console.log("leap year");
    
// }
// else{
//     console.log("not a leap year");
    
// }


//1.Check whether a person is eligible to donate blood.
//Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
// let age = 17
// let weight = 51
// if(age>=18 && age<=60){
//     if(weight>=50){
//            console.log("you are eligible to donate blood");
//     }
//     else{
//         console.log("you are not eligible because your weight is not above 50kgs");
        
//     }
// }
// else{
//         console.log("you are not eligible because your are below 18");
        

// }



// // 2.Display the grade based on average only if the student has passed in all 4 subjects.
// let sub1 = 100
// let sub2 = 60
// let sub3 = 34
// let sub4 = 90
// let avg = (sub1+sub2+sub3+sub4)/4
// if(sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35){
//     if(avg>=90){
//         console.log("grade is O :" ,avg);
//     }
//     else if(avg>=80 && avg<90){
//         console.log("grade is A :" ,avg);
//     }
//     else if(avg>=60 && avg<80){
//         console.log("grade is B :" ,avg);
//     }
//     else if(avg>=50 && avg<60){
//         console.log("grade is C :" ,avg);
//     }
//      else if(avg>=40 && avg<50){
//         console.log("grade is D :" ,avg);
//     }
//     else{
//         console.log("student fail");
//     }
// }
// else{
//     console.log("Average is not calculated because one subject is failed");
    
// }