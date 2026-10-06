function checknum(){
    let num = parseInt(document.getElementById("num").value)
     if (num > 0) {
                document.getElementById("res1").value =
                  "given number "+ num +" is Positive";
              } 
              else {
                document.getElementById("res1").value =
                  "given number "+ num +" is Negative";
              }
}


function numcomp(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    if(num1< num2){
         document.getElementById("res2").value =
                 "number"+ num1 + "is less than "+num2;
              } 
              else {
                document.getElementById("res2").value =
                 " number"+ num1 + "is greater than "+num2;
              }

}


function divide(){
      let number = parseInt(document.getElementById("number").value)
     if (number%5==0) {
                document.getElementById("res3").value =
                  "given number "+ number +" is divided by 5";
              } 
              else {
                document.getElementById("res3").value =
                  "given number "+ number +" is not diviided by 5";
              }

}


function oddeven(){
     let number = parseInt(document.getElementById("number1").value)
     if (number%2==0) {
                document.getElementById("res4").value =
                  "given number "+ number +" is Even";
              } 
              else {
                document.getElementById("res4").value =
                  "given number "+ number +" is Odd";
              }

}


function bill(){
     let bill_amount = parseInt(document.getElementById("am1").value);

    if (bill > 5000) {
        let discount = bill_amount * 20 / 100;
        let finalBill = bill_amount - discount;

        document.getElementById("res5").value =
            "Bill: " + bill_amount + ", Discount: " + discount +
            ", Final Bill: " + finalBill;
    }
    else {
        document.getElementById("res5").value =
            "Bill: " + bill_amount + ", No Discount, Final Bill: " + bill_amount;
    }
}