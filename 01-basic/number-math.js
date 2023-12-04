const score=400
console.log(score);

const newScore=new Number(100);
console.log(newScore);

console.log(newScore.toString().length);

console.log(newScore.toFixed(10)); //to fixed give decimal value

const otherNumber=125.8920;
console.log(otherNumber.toPrecision(6));

const demoNumber=100000000;
console.log(demoNumber.toLocaleString());  //tolocalestring gives indian currency format

//----------------------------------------------------------------------------
console.log(Math);
console.log(Math.abs(-4));        //Gives negative to positive value
console.log(Math.round(4.6));    //Gives Rounded value
console.log(Math.ceil(4.2));    //Gives Highest value
console.log(Math.floor(4.9));  //Gives lowest value
console.log(Math.random());   //Gives random decimal value bet 0 to 1

//if we want our random value bet 10 to 20
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
