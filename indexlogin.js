let btn = document.querySelector(".btn");
let btn2=document.querySelector(".btn2");
btn.addEventListener("click",clickfunc);
btn2.addEventListener("click",clickfunc2);


function clickfunc2(){

    // console.log(`hello2`);
    document.body.classList.toggle("darkmode");
     }


function clickfunc()
{
    alert("login successfully");}