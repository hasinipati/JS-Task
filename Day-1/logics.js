//sum of 2 numbers

//input
function addtwo(){
    let n1 =parseInt( document.getElementById("n1").value)
let n2 = parseInt( document.getElementById("n2").value)

//process
let sum = n1 + n2;

//output
// console.log("sum of 2 numbers:",sum)
 document.getElementById("res1").value=sum
 }



 //input
function avgthree(){
    let n1 =parseInt( document.getElementById("num1").value)
    let n2 = parseInt( document.getElementById("num2").value)
    let n3 = parseInt(document.getElementById("num3").value)

//process
let sum = n1 + n2 + n3;

let avg = sum/3

//output
// console.log("sum of 2 numbers:",sum)
 document.getElementById("res2").value=avg
 }



function sumofn(){
 let n =parseInt( document.getElementById("num").value)
let sum = n*(n+1)/2;
document.getElementById("res3").value=sum
}

function avgofn(){
     let n =parseInt( document.getElementById("Anum").value)
     let sum = n*(n+1)/2;
     let avg = sum/n;
     document.getElementById("res4").value=avg

}

function angle(){
let a1 = parseInt( document.getElementById("an1").value) ;
let a2 = parseInt( document.getElementById("an2").value);
let sum = a1+a2;
let missing = 180-sum;
document.getElementById("res5").value=missing

}

function profit(){
    let sp= parseInt( document.getElementById("sp").value) ;
    let cp=  parseInt( document.getElementById("cp").value) ;
    let profit = sp-cp
    let profit_percentage = profit/cp*100
    document.getElementById("res6").value=profit_percentage


}

function interest(){
    let amount = parseInt( document.getElementById("amount").value) ;
    let interest = parseInt( document.getElementById("interest").value) ;
    let time = parseInt( document.getElementById("time").value) ;
    let si = amount*interest*time/100
    document.getElementById("res7").value=si


    
}