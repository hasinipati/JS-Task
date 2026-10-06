// Arrow Functions

// Without Arguments & Without Return
// 1.Print 1 to 100
let print = () => {
    for(let i = 1; i <= 100; i++) {
        console.log(i);
    }
};
print();

// 2.Print even numbers 1 to 100
let even = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
};
even();

// 3.Print odd numbers 1 to 100
let odd = () => {
    for(let i = 1; i <= 100; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
};
odd();

// 4.Sum of numbers 1 to 100
let sum = () => {
    let sum = 0;
    for(let i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
};
sum();

// With Arguments & Without Return

// 1.Print 1 to n
let number = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
};
number(10);

// 2.Print even numbers 1 to n
let evennum = (n) => {
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
};
evennum(20);

// 3.Multiplication table
let table = (n) => {
    for(let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
};
table(5);

// 4.Sum of digits
let sumdigit = (n) => {
    let sum = 0;

    while(n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = Math.floor(n / 10);
    }

    console.log(sum);
};
sumdigit(5423);

// Without Arguments & With Return

// 1.Return sum 1 to 10
let sumof10 = () => {
    let sum = 0;

    for(let i = 1; i <= 10; i++) {
        sum = sum + i;
    }

    return sum;
};

let mysum = sumof10();
console.log(mysum);

// 2.Return count of even numbers
let evencount = () => {
    let count = 0;

    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            count++;
        }
    }

    return count;
};
let myeven = evencount();
console.log(myeven);

// 3.Return reverse of a number
let reverse = () => {
    let n = 12345;
    let rev = 0;

    while(n != 0) {
        let ld = n % 10;
        rev = rev * 10 + ld;
        n = Math.floor(n / 10);
    }

    return rev;
};

let myrev = reverse();
console.log(myrev);

// With Arguments & With Return

// 1.Return sum of two numbers
let sumof2 = (a, b) => {
    return a + b;
};
let mysumof2 = sumof2(10, 20);
console.log(mysumof2);

// 2.Return greater of two numbers
let greater = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
};

let mygreater = greater(20, 15);
console.log(mygreater);

// 3.Return largest digit
let largest = (n) => {
    let max = 0;
    while(n != 0) {
        let ld = n % 10;
        if(ld > max) {
            max = ld;
        }
        n = Math.floor(n / 10);
    }
    return max;
};
let myresult = largest(58342);
console.log(myresult);
