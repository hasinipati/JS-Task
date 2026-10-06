

//sum of n natural numbers
function natural(){
    
let sum=0;
let num=parseInt(document.getElementById("num").value);
for(let i=1;i<=num;i++){
    sum=sum+i;    
}
    document.getElementById("res1").value=sum;
}
function table(){
let n=parseInt(document.getElementById("n").value)
res=""
for(let i=1;i<=10;i++){
    res+=n + " x "+ i +" = "+ n*i+"\n";
  }
      document.getElementById("res2").value=res;

}

function Fact(){
    let fact=1;
let a=parseInt(document.getElementById("fact").value)
for(let i=a;i>=1;i--){
    fact=fact*i;
}
document.getElementById("res3").value=fact;
}


function fib() {
    let n1 = 0;
    let n2 = 1;

    let n = parseInt(document.getElementById("n1").value);

    let res = "";

    for (let i = 1; i <= n; i++) {

        res = res + n1 + " ";

        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    document.getElementById("res4").value = res;
}
