// let i= 3
// while(i<=12){
//     console.log(i);
//     i = i+3
    
// }

// let i = 10
// while(i>=5){
//     console.log(i);
//     i--
    
// }

// let n = 120
// while(n>=60){
//     console.log(n);
//     n = n-20 
    
// }

// let n = 345
// while(n>0){
// let id = n%10
// console.log("last number",id);
// n = parseInt(n/10);
// console.log("num",n);
// }


// display the digits in given number in reverse order
// let n = 345
// while(n!=0){
//     let id = n%10
//     console.log(id);
//     n = parseInt(n/10)
    
// }

// count the digits in given number
// let n = 3452
// count = 0
// while(n!=0){
//     let id = n%10
//     count = count +1
//     n = parseInt(n/10)
    
// }
// console.log("count:",count);

//sum of digits
// let n =123
// sum = 0
// while(n>0){
//     let id = n%10;
//     sum = sum +id
//     n = parseInt(n/10)
// }
// console.log(sum);


//print reverse string in variable
// let n = 234
// rev = 0
// while(n!=0){
//     let ld = n%10
//     rev = rev*10+ld
//     n = parseInt(n/10)
// }
// console.log(rev);


// let n = 2102
// let temp = n
// rev = 0
// while(n!=0){
//     let ld = n%10
//     rev = rev*10+ld
//     n = parseInt(n/10)
// }
// if(rev==temp){
//     console.log(rev,"is palindrome");
    
// }else{
//     console.log(rev,"is not palindrome");
    
// }

//print even numbers
// let n = 2345
// while(n!=0){
//     let ld = n%10
//     if(ld%2==0){
//         console.log(ld);
        
//     }
//     n = parseInt(n/10)
// }

//count odd numbers
// let n = 123456789
// count = 0
// while(n!=0){
//     let ld = n%10
//     if(ld%2==1){
//         count= count+1
//     }
//     n = parseInt(n/10)
// }
// console.log("count of odd digits",count);

//print largest digit in given number
// let n=23134
// max = 0
// while(n!=0){
//     let ld = n%10
//     if(ld>max){
//         max = ld
//     }
//     n = parseInt(n/10)
// }
// console.log(max);

//smallest number
// let n=23134
// min = 9
// while(n!=0){
//     let ld = n%10
//     if(ld<max){
//         max = ld
//     }
//     n = parseInt(n/10)
// }
// console.log(min);


//sum of digits
// let n = 123
// sum = 0
// while(n!=0){
//     let ld = n%10
//     sum = sum+ld
//     n = parseInt(n/10)

// }
// console.log(sum);


//average of given number
// let n = 624
// sum = 0
// count = 0
// while(n!=0){
//     ld = n%10
//     count = count+1
//     sum = sum + ld
//     n = parseInt(n/10)

// }
// avg = sum/count
// console.log(avg);



// Find the sum of the first digit and the last digit of a given number.
// let n = 9361
//  ld = n%10
// while(n!=0){
//     fd = n%10
//     n = parseInt(n/10)
// }
// console.log(ld+fd);


//Find the average of digits that are divisible by 5 in a given number.
// let n = 125755
// sum = 0
// count = 0
// while(n!=0){
//     ld = n%10
//     n = parseInt(n/10)
//     if(ld%5==0){
//         sum = sum+ld
//         count = count +1
       
//     }

// }
// console.log(sum/count);


//Find the difference between the largest digit and the smallest digit in a given number.
 let n = 9361
 max = 0
 min = 9
while(n!=0){
    ld = n%10
    if(ld>max){
        max = ld
    }
     if(ld<min){
        min = ld

    }
    
    n = parseInt(n/10)
}
console.log("max",max);
console.log("min",min);
console.log("differnece",max-min);


