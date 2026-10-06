// Named Function — With Input & Without Return

// 1.Print numbers from 1 to n.
// function printnum(n){
//     for(let i=1;i<=n;i++){
//     console.log(i);
    
// }
// }
// printnum(20)

// 2.Print even numbers from 1 to n.
// function printeven(n){
//     for(let i=1;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// }
// printeven(10)

// 3.Print odd numbers from 1 to n.
// function printodd(n){
//     for(let i=1;i<=n;i++){
//     if(i%2==1){
//         console.log(i);
        
//     }
// }
// }
// printodd(10)


// 4.Print the multiplication table of a given number n.
// function table(j){
//     let n = j
// for(let i=1;i<=10;i++){
//     console.log(n,"X",i,"=",n*i);
    
// }
// }
// table(5)
// table(9)

// 5.Check whether a given number is positive, negative, or zero.
// function checknum(n){
// if(n>0){
//     console.log(n,"is positive number");
    
// }
// else if(n<0){
//     console.log(n,"is negative number");
    
// }
// else{
//     console.log(n,"is a zero");
    
// }
// }
// checknum(0)


// 6.Find and print the sum of numbers from 1 to n.
// function sum(n){
//     sum = 0
// for(let i=1;i<=n;i++){
//     sum = sum+i
// }
// console.log(sum);

// }
// sum(10)

// 7.Count and print the number of digits in a given number.
// function count(n){
//     count = 0
//     temp = n
// while(n!=0){
//     ld = n%10
//     count = count+1
//     n = parseInt(n/10)
// }
// console.log("no of digits in given",temp,"is",count);

// }
// count(4367)

// 8.Find and print the sum of digits of a given number.
// function sumdigit(n){
//     sum = 0
//     temp = n
// while(n!=0){
//     ld = n%10
//     sum = sum+ld
//     n = parseInt(n/10)
// }
// console.log("sum of digits of",temp,"is",sum);

// }
// sumdigit(12345)

// 9.Find and print the largest digit in a given number.
// function maxdigit(n){
//     max = 0
// while(n!=0){
//     ld = n%10
//     if(max<ld){
//         max = ld
//     }
//     n = parseInt(n/10)
// }
// console.log(max);
// }
// maxdigit(12345)


// 10.Find and print the smallest digit in a given number.
// function mindigit(n){
//     min = 9
// while(n!=0){
//     ld = n%10
//     if(min>ld){
//         min = ld
//     }
//     n = parseInt(n/10)
// }
// console.log(min);
// }
// mindigit(12345)

// 11.Check whether a given number is prime and print the result.
// function primenum(n){
//     count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count = count+1
//     }
// }
//     if(count==2){
//         console.log(n,"is a prime number");
        
//     }
//     else{
//         console.log(n,"is not a prime number");
        
//     }
// }
// primenum(4)

// 12.Print all prime numbers between two given numbers start and end.
// function primerange(n,m){
//     for(let j=n;j<=m;j++){
//     count = 0
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             count = count+1
//         }
//     }
//     if(count==2){
//         console.log(j);
        
//     }

// }
// }
// primerange(1,10)

// 13.Print all factors of a given number and count the factors.
// function factors(n){
//     count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//         count = count+1
        
//     }
// }
// console.log("No.of factors for",n,"are",count);

// }
// factors(6)


// 14.Check whether a given number is an Armstrong number.
// function armstrong(n){

//     let original = n;
//     let temp = n;
//     let sum = 0;
//     let count = 0;
//     while(temp != 0){
//         count = count + 1;
//         temp = parseInt(temp / 10);
//     }

//     while(n != 0){

//         let ld = n % 10;
//         sum = sum + ld ** count;
//         n = parseInt(n / 10);
//     }

//     if(sum == original){
//         console.log(original, "is an Armstrong number");
//     }
//     else{
//         console.log(original, "is not an Armstrong number");
//     }
// }

// armstrong(153);

// 15.Check whether a given number is a perfect number.
function perfectnum(n){
    sum = 0
for(let i=1;i<n;i++){
     if(n%i==0){
        sum = sum+i
     }
}
if(sum == n){
    console.log(n,"is a perfect number");
    
}
else{
    console.log(n,"is not a perfect number");
    
}
}
perfectnum(6)