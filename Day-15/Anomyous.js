// Anonymous Functions

//Without Arguments & Without Return
// 1.Print numbers from 1 to 100.
let print = function() {
    for(let i = 1; i <= 100; i++) {
        console.log(i);
    }
};
print(); 

// 2.Print even numbers 1 to 100
let even = function() {
    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
};
even();

// 3.Print odd numbers 1 to 100
let Odd = function() {
    for(let i = 1; i <= 100; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
};
Odd();

// 4.Sum of numbers 1 to 100
let sum = function() {
    let sum = 0;

    for(let i = 1; i <= 100; i++) {
        sum = sum + i;
    }

    console.log(sum);
};
sum();

// 5.Print prime numbers 1 to 10
let prime = function() {
    for(let i = 2; i <= 100; i++) {
        let count = 0;

        for(let j = 1; j <= i; j++) {
            if(i % j == 0) {
                count++;
            }
        }

        if(count == 2) {
            console.log(i);
        }
    }
};
prime();

// With Arguments & Without Return
// 1.Print 1 to n
let num = function(n) {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
};
num(10);

// 2.Print even numbers 1 to n
let evennum = function(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
};
evennum(20);

// 3.Multiplication table
let table = function(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
};
table(5);

// 4.Sum of digits
let sumdigit = function(n) {
    let sum = 0;

    while(n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = Math.floor(n / 10);
    }

    console.log(sum);
};
sumdigit(5423);

// 5.Prime numbers between start and end
let primenum = function(start, end) {
    for(let i = start; i <= end; i++) {
        let count = 0;

        for(let j = 1; j <= i; j++) {
            if(i % j == 0) {
                count++;
            }
        }

        if(count == 2) {
            console.log(i);
        }
    }
};
primenum(10, 50);

// Without Arguments & With Return
// 1.Return sum 1 to 10
let sumnum = function() {
    let sum = 0;

    for(let i = 1; i <= 10; i++) {
        sum = sum + i;
    }

    return sum;
};
let myresult = sumnum();
console.log(myresult);

// 2.Return count of even numbers 1 to 100
let count = function() {
    let count = 0;

    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            count++;
        }
    }

    return count;
};
let mycount = count();
console.log(mycount);

// 3.Return sum of digits
let sumofdigit = function() {
    let n = 5423;
    let sum = 0;

    while(n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = Math.floor(n / 10);
    }

    return sum;
};
let mysum = sumofdigit();
console.log(mysum);

// With Arguments & With Return
// 1.Return sum of two numbers
let sumof2 = function(a, b) {
    return a + b;
};

let mysumof2 = sumof2(10, 20);
console.log(mysumof2);

// 2.Return greater of two numbers
let greater = function(a, b) {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
};
let mygreater = greater(20, 15);
console.log(mygreater);

// 3.. Return factorial
let factorial = function(n) {
    let fact = 1;

    for(let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
};

let myfact = factorial(5);
console.log(myfact);
