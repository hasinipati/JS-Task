// Named Function — Without Input & With Return

// 1.Return the number 100 from a function.
// function returnnum(){
//     return 100
// }
// let x = returnnum()
// console.log(x);

// 2.Return the sum of numbers from 1 to 10.
// function printsum(){
//     sum = 0
// for(let i=1;i<=10;i++){
//     sum = sum+i
// }
// return sum
// }
// let mysum = printsum()
// console.log(mysum);

// 3.Return the sum of even numbers from 1 to 50.
// function printevensum(){
//     sum = 0
// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         sum = sum+i
//     }
// }
// return sum
// }
// let evensum = printevensum()
// console.log(evensum);

// 4.Return the largest number among 10, 25, and 15.
// function largest(){
// let n1 = 10
// let n2 = 15
// let n3 =25
// if(n1>n2 && n1>n3){
//     return n1
    
// }
// else if(n2>n1 && n2>n3){
//     return n2
    
// }
// else{
//     return n3
    
// }
// }
// let large = largest()
// console.log(large);


// 5.Return the count of even numbers between 1 and 100.
// function counteven(){
// count = 0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         count = count+1
//     }
// }
// return count;

// }
// let mycount = counteven()
// console.log(mycount);


// 6.Return the sum of digits of a predefined number.
// function sumofdigits(){
//         let n = 46732
// sum = 0
// while(n!=0){
//     ld = n%10
//     sum = sum+ld
//     n = parseInt(n/10)
// }
// return sum;
// }
// let mysum = sumofdigits()
// console.log(mysum);


// 7.Return the number of digits in a predefined number.
// function countdigits(){
//     let n =62195793
// count = 0
// while(n!=0){
//     ld = n%10
//     count = count+1
//     n = parseInt(n/10)
// }
// return count

// }
// let mycount = countdigits()
// console.log(mycount);


// 8.Return the largest digit of a predefined number.
// function maxdigit(){
//     let n = 4203581
// max = 0
// while(n!=0){
//     ld = n%10
//     if(max<ld){
//          max = ld
//     }
//     n = parseInt(n/10)
// }
// return max
// }
// let mymax = maxdigit()
// console.log(mymax);


// 9.Return the smallest digit of a predefined number.
// function mindigit(){
// let n = 4203581
// min = 9
// while(n!=0){
//     ld = n%10
//     if(min>ld){
//          min = ld
//     }
//     n = parseInt(n/10)
// }
// return min
// }
// let mymin = mindigit()
// console.log(mymin);

// 10.Return the reversed form of a predefined number.
// function reversed(){
// let n = 533842
// rev = 0
// while(n!=0){
//     ld = n%10
//     rev = rev*10+ld
//     n = parseInt(n/10)
// }
// return rev;
// }
// let myrev = reversed();
// console.log(myrev);



// 11.Return whether a predefined number is prime.
// function prime(){
//     let n = 4
// count = 0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count = count+1
//     }
// }
// if(count==2){
//    return "prime";
    
// }
// else{
//     return "not prime";
    
// }
// }
// let myprime = prime()
// console.log(myprime);


// 12.Return whether a predefined number is a palindrome.
// function palindrome(){
// let n = 1221
// let temp = n
// rev = 0
// while(n!=0){
//     ld = n%10
//     rev = rev*10+ld
//     n = parseInt(n/10)
// }
// if(temp == rev){
// return  "it is palindrome";
// }
// else{
//     return "not a palindrome"
// }
// }
// let mypali = palindrome();
// console.log(mypali);

// 13.Return whether a predefined number is an Armstrong number.
// function armstrong(){
//     let original = 153;
//     let temp = original;
//     let sum = 0;
//     let count = 0;
//     while(temp != 0){
//         count = count + 1;
//         temp = parseInt(temp / 10);
//     }
//     temp = original;
//     while(temp != 0){

//         let ld = temp % 10;
//         sum = sum + ld ** count;
//         temp = parseInt(temp / 10);
//     }
//     if(sum == original){
//         return "is an Armstrong number";
//     }
//     else{
//         return "is not an Armstrong number";
//     }
// }
// let myarmstrong = armstrong();
// console.log(myarmstrong);

// 14.Return the factorial of a predefined number.
// function factorial(){
//     let n = 5;
// let fact = 1;
// for(let i = 1; i <= n; i++){
//     fact = fact * i;
// }
// return fact
// }
// let myfact = factorial()
// console.log(myfact);


// 15.Return the greatest common divisor (GCD) of two predefined numbers.
function gcd(){
    let n1 = 6;
    let n2 = 4;
    let gcd = 1;
    for(let i = 1; i <= n1 && i <= n2; i++){
        if(n1 % i == 0 && n2 % i == 0){
            gcd = i;
        }
    }
    return gcd;
}
let result = gcd();
console.log(result);