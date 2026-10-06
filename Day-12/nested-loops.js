// Sum of Prime Numbers
// Find the sum of all prime numbers between 20 and 150.
sum = 0
for(let j=20;j<=150;j++){
let n=j
count = 0
for (let i=1;i<=n;i++){
    if(n%i==0){
        count = count+1
    }
}
if(count==2){
   sum = sum+n
    
}
}
console.log(sum);


// Average of Perfect Numbers
// Find the average of all perfect numbers between 1 and 1000.
avgsum = 0
count = 0
for (let j=1;j<=1000;j++){
let n = j
sum = 0
for(let i=1;i<j;i++){
    if(n%i==0){
         sum= sum+i

    }
}
if(sum == n){
     avgsum = avgsum+n;
     count = count+1
    
}
}
console.log(avgsum/count);


// Leap Years in a Range (Not Nested Loop Logic)
// Print all leap years between 1900 and 2026.
for (let i=1900;i<=2026;i++){
    if(i%400==0 || (i%4==0 && i%100!=0)){
        console.log(i);
        
    }
}


// Palindrome Numbers
// Print all palindrome numbers between 100 and 500.
for(let j=100;j<=500;j++){
let n= j
let temp = n
rev = 0
while(n!=0){
    let ld = n%10
    rev = rev*10+ld
    n = parseInt(n/10)
}
if(temp==rev){
    console.log(rev);
    
}
}


// Digit Sum = 10
// Print all numbers between 120 and 850 whose digit sum is exactly 10.
for(let j=120;j<=850;j++){
let n = j
temp = n
sum = 0
while(n!=0){
    ld = n%10
    sum = sum+ld
    n = parseInt(n/10)
    

}
if(sum == 10){
    console.log(temp);
    
}
}


// Pairs with Target Sum
// Print all pairs (a, b) between 1 and 50 whose sum is 30. Print each pair only once.
for(let n=1;n<=50;n++){
    for(let k=n+1;k<=50;k++){
let a = n
let b = k
if(a+b == 30){
    console.log([a,b]);
    
}
}
}


// Exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors.
for(let j=10;j<=300;j++){
let n =j
count = 0
for(let i=1;i<=n;i++){
    if(n%i==0){
        count= count+1
    }
}
if(count==3){
    console.log(n);
    
}
}


// Prime Factors
// Print the prime factors of every number between 20 and 50.
let n = 6
for(let i=1;i<=n;i++){
    if(n%i==0){
        count = 0
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count = count+1
            }
        }
        if(count==2){
            console.log(i);
        }
        
    }
}
