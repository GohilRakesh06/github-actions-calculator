


function sum(a, b){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var res = a+b;
    document.getElementById("res").innerHTML= "reesult is "+res;
}

function substract( num1 , num2){
     var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var res = a-b;
    document.getElementById("res").innerHTML= "reesult is "+res;

}

function multiplication( num1 , num2){
     var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var res = a*b;
    document.getElementById("res").innerHTML= "reesult is "+res;

}

function division( num1 , num2){
     var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var a = parseFloat(num1);
    var b = parseFloat(num2);
    var res = a/b;
    document.getElementById("res").innerHTML= "reesult is "+res;
}

function calculator(){
    var res = sum(num1,num2);
    document.getElementById("res").innerHTML=res;
}