// 1st declare Variables: color1, color2, body and paragraph

const body = document.body; 
const colors= document.querySelectorAll('input'); //gives both inputs back
const textOutput = document.querySelector('p'); //You don't always have to give IDS and classes 

/*set default value on colors */
colors[0]='#4aff49';
colors[1]='#aff0000';

colors.forEach(color =>{
    color.addEventListener('input', changeBD);

})

// declare function changeBG
    
// function gradient1()
// {
//     let color1=document.querySelector('#one').value;
//     alert(color1);
//     let color2=document.querySelector('#color2').value;
//     alert(color2);
//     document.body.style.background=
//     "linear-gradient(to right,"+ color1 + ","+ color2 + ")";

// }