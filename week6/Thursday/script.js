const box = document.querySelector("button");
const text = document.querySelector("span");

box.addEventListener("focus", function(){
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
})

box.addEventListener("keypress", function(){
    text.textContent = "Click here to give your rating"
})

// Write your code here 👇
var emojis = {

    
    emoji1 :[
     {
            id: 49, 
            name: 'bad', 
    
    }
    ],  
    emoji2 :[
        {
            id: 50, 
            name: 'not so bad', 

       }
       ],  
       emoji3 :[
        {
            id: 51, 
            name: 'good', 
         
       }
       ], 

       emoji4 :[
        { 
            id: 52, 
            name: 'very good', 
        }
           
       ], 

       emoji5 :[
        { 
            id: 53, 
            name: 'Excellent', 
            }
       ], 
}



