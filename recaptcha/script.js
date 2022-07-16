const captcha=document.querySelector(".captcha"),
reload=document.querySelector(".reload"),
input=document.querySelector("input"),
statustxt=document.querySelector(".status"),
check=document.querySelector(".check");

let allChar= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getcaptcha() {
    for(let i=0; i<6;i++){
        let randomChar=allChar[Math.floor(Math.random()  * allChar.length)];
        captcha.innerText+=randomChar;
    }
}
getcaptcha();
reload.addEventListener("click",()=>{
    captcha.innerText="";
    getcaptcha();
})
check.addEventListener("click",e =>{
    e.preventDefault();//prevents its actual behaviour
    statustxt.style.display="block";
    let inputdata=input.value;
    captcha.style.top="46%";
    if (inputdata==captcha.innerText) {
        console.log("matched");
        statustxt.innerText="You are not a robot"
        statustxt.style.color="blue";
        captcha.innerText="";
        getcaptcha();
    }else{
        console.log("robot");
        statustxt.innerText="Capctha not matched. please try again"
        statustxt.style.color="red";
        captcha.innerText="";
        getcaptcha();
    }
})

