//Variables
var noOfChildren=3;
var partnersName='Kindazi';
var locations='Somewhere fancy in Switzerland';
var job='succeessful Software Engineer'; 

//Output 
alert ("You will be a" + job  + "in " + locations +", and married to " + partnersName+ " with " + noOfChildren+ " kids.");


//ageCalculator

var birthYear=1985;
var birthMonth='June';
var currentMonth=2234;
var futureYear;


futureYear = prompt ('Enter year in the future?');
//currentMonth = prompt ('Enter a month');

//if (currentMonth=!birthMonth)
    //{
    //alert ("In " +currentMonth + " "+futureYear +"I will be " + futureYear-birthYear-1 + " years old");
//}
//else
   // {alert ("In " + currentMonth + " " +futureYear + " I will be " + futureYear-birthYear + "years old");}
alert("I will either be " + (futureYear-birthYear-1) +" or " + (futureYear-birthYear) + " years old");
