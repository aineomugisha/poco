//Variables
var noOfChildren=3;
var partnersName='masasi';
var locations='Somewhere fancy in Switzerland';
var job='succeessful Software Engineer'; 

//Output 
alert ("You will be a" + job +" " + locations +", and married to " + partnersName+ " with " + noOfChildren+ " kids.");


//ageCalculator

var birthYear=1985;
var birthMonth='June';

var futureYear;


futureYear = prompt ('Enter year in the future?');
var currentMonth=prompt ('Enter Month?');

if (currentMonth=="January"||currentMonth=="Febuary"||currentMonth=="March"||currentMonth=="April"||currentMonth=="May"){
    alert("I will be " + (futureYear-birthYear-1) +" years old");
}

else if (currentMonth=="July"||currentMonth=="August"||currentMonth=="September"||currentMonth=="October"||currentMonth=="November"||currentMonth=="December")
{
    alert("I will be " + (futureYear-birthYear)+" years old");
}

else if(currentMonth=="June")
{
    alert("June is my birth month! Yaay.. and I will be " + (futureYear-birthYear)+" years old");  
}
//currentMonth = prompt ('Enter a month');

//if (currentMonth=!birthMonth)
    //{
    //alert ("In " +currentMonth + " "+futureYear +"I will be " + futureYear-birthYear-1 + " years old");
//}
//else
   // {alert ("In " + currentMonth + " " +futureYear + " I will be " + futureYear-birthYear + "years old");}
//alert("I will either be " + (futureYear-birthYear-1) +" or " + (futureYear-birthYear) + " years old");
