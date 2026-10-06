// class MathamaticalOperations{
//     static addition(){
//         console.log(10+20);
        
//     }
//     static substraction(a,b){
//         console.log(a-b);
        
//     }

//     static multupliation(){
//         return 10*10
//     }

//     static division(x,y){
//           return x/y
//     }
// }
// MathamaticalOperations.addition();
// console.log( MathamaticalOperations.substraction(20,10));
// let res1 = MathamaticalOperations.multupliation()
// console.log(res1);
// let res2 = MathamaticalOperations.division(10,2)
// console.log(res2);



// without input and without return
// check the value is vowel or not
// class vowel{
//     static checkvalue(){
//         let n = "a"
// if(n=="a"|| n=="e"|| n=="i"|| n=="o"||n=="u"){
//     console.log("given value is vowel");
    
// }else{
//          console.log("given value is vowel");
       
// }
//     }
// }
// vowel.checkvalue()


// with input and without return
// check number is 3 digit number or not
class Digit{
    static checknum(n){
        if(n>=100){
        console.log(n,"it is 3 digit number");
    
   }
    else{
    console.log(n,"it is not 3 digit number");
}
    }
}
Digit.checknum(12)

// without input and with return
// check with number is divisible by 3 and 5 or not
class Divisible{
    static checknum(){
        let x = 15
       if(x%3==0 && x%5==0){
        return "is divisible by 3 and 5"
      
     }
    else{
        return "not divisible by 3 and 5"
     
    }
    }
}
let mynum = Divisible.checknum()
console.log(mynum);


// with input and with return
// Check the type of triangle based on its sides.
//  Equilateral, Isosceles, or Scalene.

class Triangle{
    static checktri(a1,a2,a3){
        if(a1==a2 && a2==a3){
        return "given triangle is equilateral";
    
}
else if(a1==a2 || a1==a3 || a2==a3){
    return "given triangle is Isosceles";
    
}
else{
    return "given triangle is Scalene";   
}
    }
}
let mytriangle = Triangle.checktri(30,40,50)
console.log(mytriangle);

