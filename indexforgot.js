let btn2=document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
btn2.addEventListener("click",clickfunc2);
btn3.addEventListener("click",clickfunc3);

function clickfunc2(){

    // console.log(`hello2`);
    document.body.classList.toggle("darkmode");
     }

     function clickfunc3()
{
    alert("reset password successfully");}