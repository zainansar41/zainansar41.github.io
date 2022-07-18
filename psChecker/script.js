const input=document.querySelector("input");
const text=document.querySelector(".txt");
const showBtn=document.querySelector(".show");
const suggest=document.querySelector(".suggest")
let Expweak=/[a-zA-Z]/;
let Expmedium=/\d+/;
let Expstrong=/.[!,@,#,$,%,^,&,*,<,>,(,)]/;
let allChar= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'!','@','#','$','%','^','&','*','(',')','_','-','+','<','>','?'];
function trigger() {
    if (input.value!="") {
        if (input.value.length<=3) {
            text.style.display="block"
            text.innerText="password is weak";
            text.style.color="#ff4757";
            suggest.style.display="flex";
        }else if (input.value.length<=6 && !(input.value.match(Expmedium)) && !(input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is weak";
            text.style.color="#ff4757";       
            suggest.style.display="flex";     
        }else if (input.value.length<=6 && (input.value.match(Expmedium)) && !(input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange";   
            suggest.style.display="flex";         
        }else if (input.value.length<=6 && !(input.value.match(Expmedium)) && (input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange";   
            suggest.style.display="flex";         
        }else if (input.value.length<=6 && (input.value.match(Expmedium)) && (input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is Strong";
            text.style.color="#23ad5c";     
            suggest.style.display="none";      
        }else if (input.value.length>6 && (input.value.match(Expmedium)) && !(input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange";  
            suggest.style.display="flex";          
        }else if (input.value.length>6 && !(input.value.match(Expmedium)) && (input.value.match(Expstrong))) {
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange"; 
            suggest.style.display="flex";           
        }else if (input.value.length>6 && !(input.value.match(Expmedium)) && !(input.value.match(Expstrong))){
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange"; 
            suggest.style.display="flex";         
        }
        else if (input.value.length>6 && (input.value.match(Expmedium)) && !(input.value.match(Expstrong))){
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange";
            suggest.style.display="flex";
        }else if (input.value.length>6 && !(input.value.match(Expmedium)) && (input.value.match(Expstrong))){
            text.style.display="block"
            text.innerText="password is ok";
            text.style.color="orange"; 
            suggest.style.display="flex";         
        }else if (input.value.length>6 && (input.value.match(Expmedium)) && (input.value.match(Expstrong))){
            text.style.display="block"
            text.innerText="password is Strong";
            text.style.color="#23ad5c";
            suggest.style.display="none";
        }
    }
}
function show() {
    if(input.type==="password"){
        input.type="text";
        showBtn.innerText="Hide";
    }else{
        input.type="password";
        showBtn.innerText="Show";
    }
}

let ps;

function generate() {
    ps="";
    for(let i=0; i<10;i++){
        let randomChar=allChar[Math.floor(Math.random()  * allChar.length)];
        ps+=randomChar
        input.value=ps;
    }
}
function copy() {
    input.select();
    return navigator.clipboard.writeText(ps);
}