function VOWEL(){
    let ch =document.getElementById("char").value;
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){

      document.getElementById("Result").value=( " VOWEL");
    }
    else{
            document.getElementById("Result").value=( " Not a VOWEL ");

    }

}


function Range(){
    let ch =parseInt(document.getElementById("num").value);
    if(ch>=1 && ch<=10){
        
      document.getElementById("Result2").value=(ch+" is in range ");
    }
    else{
            document.getElementById("Result2").value=(ch+" Not in range ");

    }

}

function ALPH(){
    let ch = document.getElementById("cha").value;
    if((ch>='A' && ch<='Z')||(ch>='a' && ch<='z')){
        res="Alphabet";
    }
    else{
        res="not Alphabet";

    }
    document.getElementById("Result3").value=res;


}


function DIGIT(){
    let ch =parseInt(document.getElementById("digit").value);
    if(ch>=0 && ch<10){
      document.getElementById("Result4").value=( ch+ " is a Digit");
 }
 else{
      document.getElementById("Result4").value=( ch+ " is not a Digit ");

 }

}

function LOGIN(){
    let user =document.getElementById("username").value;
    let pass =document.getElementById("pass").value;

    if(user=="Hero" && pass=="Hero@gmail.com"){
            res="LOGIN SUCCESSFUL";
 }
 else{
            res="INVALID CREDENTIALS";

 }
     document.getElementById("Result5").value=res;


}


function UPPER(){
    let ch = document.getElementById("upper").value;
    if((ch>='A' && ch<='Z')){
        res="UPPER CASE";
    }
    else{
        res="LOWER CASE";

    }
    document.getElementById("Result6").value=res;



}


function LOWER(){
    let ch = document.getElementById("lower").value;
    if((ch>='a' && ch<='z')){
        res="LOWER CASE";
    }
    else{
        res="UPPER CASE";

    }
    document.getElementById("Result7").value=res;



}