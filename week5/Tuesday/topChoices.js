var myTopChoices=['red', 'matoke', 'exercise', 'singing'];
// var i;
// for(i=0; i<myTopChoices.length; i++){
// alert('my number 1 choice is '+myTopChoices[0]);
// }

var myColor ={
    color: 'Red',
    reason : 'it shines'
};

var myFood ={
    food: 'matoke',
    reason:'Edible with any type of sauce'
};

var myExercise={
    exercise:'dancing',
    reason:'It is fun'
};

var myHobby={
    hobby:'singing', 
    reason:'it feels like home'
};

// myTopChoices.push(myColor(value, Keys), myFood(food, reason), myExercise(exercise, reason), myHobby(hobby, reason));
 myTopChoices[0]=myColor;

// alert(myTopChoices[0].color);
// alert(myTopChoices[2]);

for(var i=0; i<myTopChoices.length; i++){
    
    for(item in myTopChoices[i]){
        console.log("this is the item" + item)
        console.log("this is the value of the item " + myTopChoices[i][item]);
    } 
}