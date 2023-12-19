/*
    oops concept->
    there are certain features or mechanism which make the language object oriented.
    1.object ->
        as object is a unique entity that contains properties and methods.
        The object can be created in two ways in javascript.
            1.object lateral:--
            EX:--------
            -----------

            let person = {
            first_Name:"Subhashree",
            last_Name:"Nanda",
            nick_Name:"puja",
            getFunction: function(){
                return(`the name of the person is ${person.first_Name}${person.last_Name}`)
            },
            phone_number:{
                mobile:'7077925499',
                whatsapp:'9337112143'
             }
        }
            console.log(person.getFunction());
            console.log(person.phone_number.whatsapp);
            console.log(person.phone_number.mobile);
            console.log(person.nick_Name);

            2.object constructor:--
            EX:---

            function person(first_Name,last_Name){
            this.first_Name = first_Name;
            this.last_Name = last_Name;
            }
            let person1 = new person('Subhashree','Nanda');
            let person2 = new person('Subhasmia','Nanda');

            console.log(person1.first_Name);
            console.log(`${person2.first_Name} ${person2.last_Name}`);

    2.class:--
      class is a blueprint of object.
      A class have many objects beacause the class is template while objects
      are instance of the class or the concrete implementation.
      EX:--

      class vehicle{
        constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine; 
    }
        getDetails(){
        return(`the name of the bike is ${this.name}.`)
        }
    }
    let bike1 = new vehicle (`hayabhusa`,`suzuki`,`1340cc`);
    let bike2 = new vehicle(`duke`,`ktm`,'350cc')

    console.log(bike1.name);
    console.log(bike2.engine);
    console.log(bike1.getDetails());

    3.polymorphism:--

    4.inheritance:-
      inheritance is a property in which inherit the property of parent class
      to child class through extend keyword.
      Ex:--
      class person {
      constructor(name){
        this.name=name;
    }
        toString(){
            return (Name of person : ${this.name})
        }
    }
    class student extends person{
        constructor(name,id){
        super(name);
        this.id = id;
    }
        toString(){                                 // method to return the string
        return(${super.toString()} ,Student ID : ${this.id});
    }
    }
    let student1= new student('Subhasree','64');  // creating object and give value 
    console.log(student1.toString());

    5.encapsulation:-
    The process of wrapping properties and function within a single unit is known as encapsulation.
    Ex:--

    class person{
    constructor(name,id){
        this.name = name;
        this.id = id; 
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`name is ${this.name},address is: ${this.add}`);
    }
}
    let person1 = new person('Pooja',21);
    person1.add_Address('delhi');
    person1.getDetails();

    6.abstraction:--
*/



