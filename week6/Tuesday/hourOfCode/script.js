
   
    
function gradient1()
{
    let color1=document.querySelector('#one').value;
    alert(color1);
    let color2=document.querySelector('#color2').value;
    alert(color2);
    document.body.style.background=
    "linear-gradient(to right,"+ color1 + ","+ color2 + ")";

}