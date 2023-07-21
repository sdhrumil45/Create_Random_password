var pass = document.getElementById("pass");
let length = document.getElementById("length");
let small = document.getElementById("small");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let symbole = document.getElementById("symbole");


const capitalset = "ABCDEFGHI";
const lowerset = "avlikjuytch";
const numberset = "123456789";
const symboleset = "!@#$%^&*(";

const r = (set) =>{
    return set[Math.floor(Math.random() * set.length)]
}

const generatepassword = (p="") =>{
    if(small.checked){
        p+= r(lowerset);}
    if(capital.checked){
        p+= r(capitalset);}
    if(number.checked){
        p+= r(numberset);}
    if(symbole.checked){
        p+= r(symboleset);}
    if(p.length < length.value){
        return generatepassword(p);
    } 
    else{
        return p;
    }
    
}


const generate = () =>
{
  let a = generatepassword();
  let i = 0;
  var y = "";
  while (i < length.value){
        y += a[i]
    i++
  }
  pass.innerHTML = y;
  navigator.clipboard.writeText(y);
}

document.getElementById("btn").addEventListener(
    "click",
    function f() { generate()}
)