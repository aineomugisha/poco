// pick the information and display it back 


function print()
{
    var fname = document.querySelector('#fName').value;
    var lname= document.querySelector('#lName').value;
    var phone= document.querySelector('#phone').value;
    var message= document.querySelector('#message').value;
    document.write('This is your information:<br>' + fname +' <br>' + lname+'<br >'+phone+' <br >'+message);
}

