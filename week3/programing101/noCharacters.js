
    var inputString= '';
    var count=0;

    inputString=prompt('Please enter text to count the characters');


if (inputString=="")
    {
        alert('please enter some text');
}
     
else
{
    for(var i=0; i<inputString.length; i++) { 
        count=count+1;
    }
       
 alert('Your text:'+ inputString + " and " +
        'the number of characters is ' + count);
}