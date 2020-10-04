/*var person={
    name: "Lynn",
    lifeStatus: "beautiful",
    hello: function()
    {return "hello" + this.name;}
        
    }*/

    function person(name, age, status)
    {
        this.name=name;
    this.age=age;
    this.status=status;
    this.hello=function()
    {
        return "hello " +this.name;
    }
};

let lynn = new person("lynn", 35, "happy");
alert(lynn.name);
alert(lynn.hello());
Object.keys(lynn);
Object.values(lynn);
    

