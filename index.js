const password=document.getElementById("password");
const btn=document.getElementById("generate");

function passwordGenerator(){
    var ucase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lcase="abcdefghijklmnopqrstuvwxyz";
    var num="123456789";
    var simbols="!@#$%^&?";
    let str="";
    while(str.length<9){ 
        str+=ucase[Math.floor(Math.random()*ucase.length)];
        str+=lcase[Math.floor(Math.random()*lcase.length)];
        str+=num[Math.floor(Math.random()*num.length)];
        str+=simbols[Math.floor(Math.random()*simbols.length)];
        password.value=str;
    }
        
    
}
function copy(){
    password.select();
    document.execCommand("copy");
}