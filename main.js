var x = Number(document.getElementById("num1"));
ar y = Number(document.getElementById("num2"));
var z;

function add (){
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    z = x + y;
    document.getElementById("demo3").innerHTML = z;
}    
function sub (x, y) {
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    z = x - y;
    document.getElementById("demo3").innerHTML = z;
}
function multi (x, y) {
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    z = x * y;
    document.getElementById("demo3").innterHTML = z;
}
function div (x, y) {
    var x = document.getElementById("usernum1").value;
    var y = document.getElementById("usernum2").value;
    z = x / y;
    document.getElementById("demo3").innerHTML = z;
}


