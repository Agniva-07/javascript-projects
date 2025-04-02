const passwordBox=document.getElementById("password");
const genBtn=document.getElementById("generate-btn");
const length=10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

const allChars= upperCase + lowerCase + numbers + symbols;
function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    
    passwordBox.value=password;
}

function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}

const copyBtn= document.querySelector(".copy-btn");

copyBtn.addEventListener("click",copyPass);

genBtn.addEventListener("click",()=>{
    createPassword();
})

