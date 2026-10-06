// Named Function — With Input & With Return

// 1.Return the sum of two given numbers.
// function sumof2(a,b){
//  sum = a+b
//  return sum
// }
// let mysum = sumof2(3,2)
// console.log(mysum);


// 2.Return the greater of two given numbers.
// function greater(a,b){
//    if(a>b){
//     return  "a is greater"
//    }
//    else{
//     return "b is greater"
//    }
// }
// let greatest = greater(2,3)
// console.log(greatest);


// 3.Return whether a given number is even or odd.
// function checkeven(n){
//     if(n%2==0){
//         return "it is even"
//     }
//     else{
//         return "it is not even"
//     }
// }
// let myeven = checkeven(3)
// console.log(myeven);


// 4.Return the square of a given number.
// function square(n){
//      sq = n*n
//      return sq
// }
// let mysquare = square(5)
// console.log(mysquare);


// 5.Return the factorial of a given number.
// function factorial(n){
//     fact = 1
//     for(let i=1;i<=n;i++){
//         fact = fact*i
//     }
//     return fact
// }
// let myfact = factorial(5)
// console.log(myfact);

// 6.Return the sum of digits of a given number.
// function sumofdigits(n){
//     sum = 0
//     while(n!=0){
//         ld = n%10
//         sum = sum+ld
//         n = parseInt(n/10)

//     }
//     return sum
// }
// let sumof = sumofdigits(12345)
// console.log(sumof);


// 7.Return the reverse of a given number.
// function reverse(n){
//     rev = 0
//     while(n!=0){
//         ld = n%10
//         rev = rev*10+ld
//         n = parseInt(n/10)
//     }
//     return rev
// }
// let myrev = reverse(12214)
// console.log((myrev));


// 8.Return the largest digit of a given number.
// function largest(n){
//     max = 0
//     while(n!=0){
//         ld = n%10
//         if(max<ld){
//             max = ld
//         }
//         n = parseInt(n/10)
//     }
//     return max
// }
// let mymax = largest(49567)
// console.log((mymax));


// 9.Return the smallest digit of a given number.
// function smallest(n){
//     min = 9
//     while(n!=0){
//         ld = n%10
//         if(min>ld){
//             min = ld
//         }
//         n = parseInt(n/10)
//     }
//     return min
// }
// let mymin = smallest(12345)
// console.log(mymin);


// 10.Return the count of a particular digit in a given number.
// function countofdigit(n,digit){
//     count = 0
//     while(n!=0){
//        ld = n%10
//        if(ld == digit){
//         count = count+1
//        }
//        n = parseInt(n/10)
//     }
//     return count
// }
// let mycount = countofdigit(1293942256,2)
// console.log(mycount);


// 11.Return whether a given number is prime.
// function prime(n){
//     count = 0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count = count+1
//         }
//     }
//     if(count==2){
//         return "prime"
//     }
//     else{
//         return "it is not prime"
//     }
// }
// let myprime = prime(6)
// console.log(myprime);


// 12.Return whether a given number is a palindrome.
// function palindrome(n){
//     rev = 0
//     temp = n
//     while(n!=0){
//         ld = n%10
//         rev = rev*10+ld
//         n = parseInt(n/10)
//     }
//     if(rev == temp){
//       return "it is palindrome number"
//     }
//     else{
//         return "it is not palindrome number"
//     }
// }
// let mypali = palindrome(1221)
// console.log((mypali));

// 13.Return whether a given number is an Armstrong number.
//  function armstrong(original){
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
// let myarmstrong = armstrong(153);
// console.log(myarmstrong);


// 14.Return the second-largest digit of a given number.
// function secondlargest(n){
//     max = 0
//     secmax = 0
//     while(n!=0){
//         ld = n%10
//         if(max<ld){
//             secmax = max
//             max = ld
//         }
//         else if(ld>secmax && ld!=max){
//             secmax = ld
//         }
//         n = parseInt(n/10)
//     }
//     return secmax
// }
// let secondmax = secondlargest(123457)
// console.log(secondmax);


// 15.Return the GCD of two given numbers using a loop.
function gcd(n1,n2){
    let gcd = 1;
    for(let i = 1; i <= n1 && i <= n2; i++){
        if(n1 % i == 0 && n2 % i == 0){
            gcd = i;
        }
    }
    return gcd;
}
let result = gcd(5,10);
console.log(result);