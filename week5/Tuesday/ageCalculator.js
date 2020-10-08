function ageCalculator(currentAge, retirementAge)
{
   var yearNow=new Date().getFullYear();

   var remainingYears=retirementAge-currentAge;
    var retirementYear=yearNow+remainingYears;
   console.log("you are left with "+remainingYears+" years to retire in ", retirementYear); 
    }

   ageCalculator(35, 70);
   ageCalculator(50,134);
   ageCalculator(65, 187);
   
