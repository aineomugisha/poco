function sayHello(string, number)
{
    return string + number;
}


document.write ('bye bye'+sayHello('Susanne',1));
// Object

var myObject = {
    name: 'who knows',
    age: 'as old as time',
    prognosis:'es wird alles ok',
    decisions:function()
    {
       return this.name +" "+this.age+" "+this.prognosis;
    }
};

document.write (myObject.decisions());

function myNewObject(name, age, prognosis, decision){
    this.age=age; 
    this.name=name; 
    this.prognosis=prognosis;
    this.decision=function()
    {
        return this.name +" "+this.age+" "+this.prognosis;
    }
};

var Lynn = new myNewObject('Lynn', 12, 'it will shine');

document.write(Lynn);


