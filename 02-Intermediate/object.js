/*object are super important for grouping the data and functionalities.
object are constructed in key and value pairs.
let mycars={            :mycars is the object name.  
    BMW:"series 7",     :here BMW & Audi are keys and series 7 and Q7 are value.
    Audi:"Q7",
}*/

/*const jsuser={
    name:"puja",
    email:"puja2143@gmail.com",
    age:21,
    location:"odisha",
    isLoggedIn:"false",
    lastLoggedinDays:["monday","wednesday","friday"]
}
console.log(jsuser.name);
console.log(jsuser["email"]);
console.log(jsuser["isLoggedIn"]);
console.log(jsuser["lastLoggedinDays"]);*/

//if we want to change email id.

/*jsuser.email="nanda2143@gmail.com";
console.log(jsuser["email"]);
//if we want to fix a perticular email id.
jsuser.email="nanda2143@gmail.com";
Object.freeze(jsuser.email);
jsuser.email="gift123@gmail.com";
console.log(jsuser["email"]);

jsuser.greeting=function(){
    console.log("Hello puja");
}
// console.log(jsuser.greeting());
jsuser.greetingTwo=function(){
    console.log(`hello ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

const tinderUser={}
tinderUser.id="12334",
tinderUser.email="Sony@gmail.com",
tinderUser.name="sony"
console.log(tinderUser);

const regularUser={
    email:"pk2143@gmail.com",
    fullname:{
        userfullname:{
            FirstName:"pk",
            LastName:"blahh",
        }
    }
}
console.log(regularUser.fullname.userfullname.FirstName);
console.log(regularUser.fullname.userfullname.LastName);
console.log(regularUser.fullname);
console.log(regularUser.email);

const obj1={
    1:'a',
    2:'b',
}
const obj2={
    3:'a',
    4:'b',
}
const obj3={
    5:'a',
    6:'b',
}
const obj4={obj1,obj2}
console.log(obj4)
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)*/

//object destructing

const course={
    courseName:"Last minute placement",
    price:123445,
    courseInstructor:"Rajeev",
}
const {courseInstructor : Teacher}=course 
console.log(Teacher);

  /*Json:- javascript object Notation helps for storing data in our local disk and 
         we can manipulate these data also in one place to another place.
    API:- Application programming interface.
        It is a mechanism that enables two software components to communicate with eachother 
        using a set of defination and protocols*/