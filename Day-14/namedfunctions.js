// Named Function — Without Input & Without Return

// 1.Print numbers from 1 to 100.
// function printnum(){
//     for(let i=1;i<=100;i++){
//     console.log(i);
    
// }
// }
// printnum()

// 2.Print even numbers from 1 to 100.
// function printeven(){
//     for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// }
// printeven()

// 3.Print odd numbers from 1 to 100.
// function printodd(){
//     for(let i=1;i<=100;i++){
//     if(i%2!=0){
//         console.log(i);
        
//     }
// }
// }
// printodd()

// 4.Print numbers from 100 to 1.
// function printrev(){
//     for(let i=100;i>=1;i--){
//     console.log(i);
    
// }
// }
// printrev()

// 5.Print the multiplication table of 5.
// function printtable(){
//     let n = 5
// for(let i=1;i<=10;i++){
//     console.log(n,"X",i,"=",n*i);
    
// }
// }
// printtable()

// 6. print the sum of numbers from 1 to 100.
// function printsum(){
//     sum = 0 
//     for(let i=1;i<=100;i++){
//     sum = sum+i
//     }
// console.log(sum);
// }
// printsum()

// 7.print the sum of even numbers from 1 to 100.
// function printsumeven(){
//     sum = 0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         sum = sum+i
//     }
// }
// console.log(sum);

// }
// printsumeven()

// 8. print the number of even numbers between 1 and 100.
// function counteven(){
//     count = 0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         count = count+1
        
//     }
// }
// console.log(count);

// }
// counteven()

// 9.Print all numbers between 1 and 100 that are divisible by both 3 and 5.
// function divisible35(){
//     for(let i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
        
//     }
// }
// }
// divisible35()

// 10.Print the first 10 numbers that are divisible by 7.
// count = 0
// for(let i=1;i<=100;i++){
//     if(i%7==0){
//         console.log(i);
//         count = count+1
        
//     }
//     if(count==10){
//         break
//     }
// }


// 11.Print all prime numbers between 1 and 100.
// function printprime(){
//         let count = 0
// for(let i=1;i<=100;i++){
//     count = 0
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count = count+1
//         }
//     }
//     if(count==2){
//         console.log(i);
        
//     }
// }

// }
// printprime()

// 12.Print all perfect numbers between 1 and 1000.
// function perfect(){
//     for(let j=1;j<=1000;j++){
// let n = j
// sum = 0
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         sum = sum+i
//     }
// }
// // console.log(sum);
// if(sum == n){
//     console.log(n);
    
// }
// }
// }
// perfect()

// 13.Find the number between 1 and 100 that has the maximum number of factors.
// function maxfactors(){
//     let maxcount = 0
// let maxnum = 0
// for(let j=1;j<=100;j++){
//     let count = 0
//     for(let i=1;i<=j;i++){
//         if(j%i==0){
//             count = count+1
//         }
//     }
//     if(count>maxcount){
//         maxcount = count
//         maxnum = j
//     }
// }
// console.log(maxnum,"as the maximum no.of factors");
// console.log(maxcount,"is count of factors for",maxnum);
// }
// maxfactors()

// 14.Print the prime factors of every number between 20 and 50.
// function primefactors(){
//     for(let a=20;a<=50;a++){
//     console.log("factors of ",a);
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             console.log(i);
            
//         }
//     }
    
// }
// }
// primefactors()

// 15.Print a right-angled triangle star pattern of 5 rows.
      1
     12
    123
   1234
  12345
function pattern(){
    for(let j=1;j<=5;j++){
    output = ""
        for(s=5;s>j;s--){
        output += " "
        }
        for(let i=1;i<=j;i++){
            output = output + i
        }
        console.log(output)
    }


}
pattern()
