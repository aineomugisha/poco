var stringOne = '';
var stringTwo = '';

var stringOneArray=[];
var stringTwoArray=[];
var count=0;

stringOne= prompt('Please enter the first string');
stringTwo=prompt('Please enter the second string')

stringOneArray.push(stringOne);
stringTwoArray.push(stringTwo);
console.log(stringOneArray + stringTwoArray);

if (stringOneArray.length==stringTwoArray.length){
    //process 
var stringLength = stringOneArray.length;
hummingDistance();

}
else {
    alert('your strings must have the same length');
}

function hummingDistance(){
    for (i=0; i<stringOneArray.length; i++){
        if (stringOne[i]==stringTwo[i])
        {
            count = count+0;
            alert(count);
        }
        else{
            count++;
            
        }
    }

    alert("Your humming distance is "+ count);
    
}

