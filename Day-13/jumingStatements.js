// for(let i=1;i<=10;i++){
//      console.log(i);
//     if(i==5){
//         break;
//     }
   
    
// }

// n = 10
// while(n<=20){
//      console.log(n);
//     if(n==14){
//         break;
//     }
   
//     n = n+1
    
// }

// for(let i=21;i<=32;i++){
//     if(i%5==0){
//         console.log(i);
//         break;
        
//     }
// }


// for(let i=10;i>=1;i--){
//     if(i%3==0){
       
//          console.log(i);
//           break;
   
//     }
// }

// count = 0
// for(let i=1;i<=15;i++){
//      count++;
//     console.log(i);
//     if(count==3){
//     break;
//     }
    
// }

// let n = 514369
// while(n>0){
//     x = n%10
//     if(x%2==0){
//         console.log(x);
//         break;
        
//     }
//     n = parseInt(n/10)
   
    
// }

// let n = 1924016
// console.log("first digit which is less than 3");

// while(n>0){
//     x = n%10
//     if(x<3){
//     console.log(x);
//     break;
//     }
//     n = parseInt(n/10)
   
    
// }

// for(let i=11;i<=20;i++){
   
//     if(i==13){
//         continue;
//     }
//     console.log(i);
// }

// for(let i=2015;i<=2026;i++){
//     if(i==2020){
//         continue;
//     }
//     console.log(i);
    
// }

//skip even numbers
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
    
// }
// n=1
// while(n<=5){
//     if(n==3){
//         n++;
//         continue;
//     }
//      console.log(n);
//     n++;
    
// }

// let n = 123456
// while(n!=0){
//     x = n%10
//     if(x%2!=0){
//          n = parseInt(n/10)
//         continue
//     }
//     console.log(x);
//      n = parseInt(n/10)
// }


// break

//Find the first even digit from the left in 753914286.
// let n = 753914286
// while(n!=0){
//     x = n%10
//     if(x%2==0){
//          console.log(x);
//         //  n = parseInt(n/10)
//          break
//     }
//     n = parseInt(n/10)
// }

// Find the first prime number between 50 and 100

// for(let j=50;j<=100;j++){
// let n=j
// count = 0
// for (let i=1;i<=n;i++){
//     if(n%i==0){
//         count = count+1
//     }
// }
// if(count==2){
//    console.log(j);
//    break;
   
    
// }
// }


//Find the first number whose digit sum is 10.
// for(let i=1;i<=50;i++){
//     let n = i
//     sum = 0
//     while(n!=0){
//         let x = n % 10
//         sum = sum + x
//         n = parseInt(n / 10)
//     }
//     if(sum == 10){
//         console.log(i);
//         break;
        
//     }
// }


//Find the first number with exactly 3 divisors between 1 and 100.
// for(let j=1;j<=100;j++){
// let n =j
// count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count= count+1
//     }
// }
// if(count==3){
//     console.log(n);
//     break;
    
// }
// }


//Stop when 3 consecutive odd numbers occur between 1 and 50.
// let count = 0
// for(let i = 1; i <= 50; i++){
//     if(i % 2 != 0){
//         console.log(i)
//         count = count+1
//     }
//     if(count == 3){
        
//         break
//     }
// }


//Find the first palindrome between 10 and 500.
// for(let j=10;j<=500;j++){
// let n= j
// let temp = n
// rev = 0
// while(n!=0){
//     let ld = n%10
//     rev = rev*10+ld
//     n = parseInt(n/10)
// }
// if(temp==rev){
//     console.log(rev);
//     break;
    
// }
// }


//Find the first perfect number between 1 and 1000.
// for (let j=1;j<=1000;j++){
// let n = j
// sum = 0
// for(let i=1;i<j;i++){
//     if(n%i==0){
//         sum= sum+i

//     }
// }
// if(sum == n){
//     console.log(j);
//     break;
    
    
// }
// }

// Print the first 5 even numbers.
count = 0
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         count = count+1
//         console.log(i);
        
//     }
//     if(count==5){
//         break;
//     }
// }

//Print the first 5 prime numbers.
// primecount = 0
// for(let j=1;j<=100;j++){
// let n=j
// count = 0
// for (let i=1;i<=n;i++){
//     if(n%i==0){
//         count = count+1
//     }
// }
// if(count==2){
//     primecount = primecount+1
//    console.log(j);
//   }
// if(primecount==5){
//     break;
// }
// }


//Print the first 3 numbers divisible by 7.
// count = 0
// for(let i=1;i<=100;i++){
//     if(i%7==0){
//         count = count+1
//         console.log(i);
        
//     }
//     if(count==3){
//         break;
//     }
// }

// Continue

// // Print 1–30, skipping even numbers.
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
    
// }

// Print 1–40, skipping multiples of 4.
// for(let i=1;i<=40;i++){
//     if(i%4==0){
//         continue;
//     }
//     console.log(i);
    
// }


// Print 1–30, skipping numbers from 10–20.
// for(let i=1;i<=30;i++){
//     if(i>=10 && i<=20 ){
//         continue
//     }
//     console.log(i);
    
// }

//Print 1–50, skipping multiples of 3.
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
    
// }

// Extract 502304, skipping digit 0.
// let n = 502304
// while(n!=0){
//     x = n%10
//     if(x==0){
//          n = parseInt(n/10)
//         continue;
        
//     }
//     console.log(x);
//     n = parseInt(n/10)
    
// }

//Extract 5832461, printing only even digits.
// let n = 5832561
// while(n!=0){
//     x = n%10
//     if(x%2==1){
//          n = parseInt(n/10)
//         continue;
        
//     }
//     console.log(x);
//     n = parseInt(n/10)
// }

//Extract 1432578, skipping odd digits.
// let n = 1432578
// while(n!=0){
//     x = n%10
//     if(x%2==1){
//          n = parseInt(n/10)
//         continue;
        
//     }
//     console.log(x);
//     n = parseInt(n/10)
// }

// Print 1–200, skipping multiples of 3 or 5.
// for(let i=1;i<=200;i++){
//     if(i%3==0 || i%5==0){
//         continue;
//     }
//     console.log(i);
    
// }

// Print 1–500, skipping numbers with odd digit sum.
// for(let i = 1; i <= 500; i++){

//     let n = i
//     let sum = 0

//     while(n != 0){
//         let x = n % 10
//         sum = sum + x
//         n = parseInt(n / 10)
//     }

//     if(sum % 2 != 0){
//         continue
//     }

//     console.log(i)
// }

// Print 1–500, skipping numbers containing digit 0.
// for(let i = 1; i <= 500; i++){
//     let n = i
//     let found = false
//     while(n != 0){
//         let x = n % 10
//         if(x == 0){
//             found = true
//         }
//         n = parseInt(n / 10)
//     }
//     if(found){
//         continue
//     }
//  console.log(i)
// }

// break + continue
// Print 1–50, skip multiples of 3, stop at 40.
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue;
//     }
//     console.log(i);
//     if(i==40){
//         break;
//     }
// }

// Print odd numbers, skip evens, stop at the first multiple of 7.
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
    
//     if(i%7==0){
//         break;
//     }
// }


// Extract 5830421, skip odd digits, stop at 0.
// let n = 5830421
// while(n!=0){
//     x = n%10
//     if(x%2!=0){
//          n = parseInt(n/10)
//         continue;
//     }
//     console.log(x);
//     n = parseInt(n/10)
//     if(x==0){
//         break;
//     }
// }

// Extract 8325147, print digits until 5.
// let n = 8325147
// while(n!=0){
//     x = n%10
//     console.log(x);
//     n = parseInt(n/10)
    
//     if(x==5){
//         break;
//     }
// }

// Search from 51, skip non-multiples of 9, stop at the first multiple of 9.
for(let i=51;i<=100;i++){
    if(i%9!=0){
        continue;
    }
    if(i%9==0){
        console.log(i);
        break;
        
    }
}
