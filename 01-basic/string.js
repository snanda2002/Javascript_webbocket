const name="puja";
console.log(name);
const count=50;
console.log(name+count);
console.log(`my name is ${name}`);

//const name1=new String("pooja");
//console.log(name1);
//console.log(name1[2]);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('j'));
console.log(name.charAt());
const newName=name.substring(0,3);
console.log(newName);

//trim:remove spaces.
const myName="  Subhashree Nanda  ";
console.log(myName);
console.log(myName.trim());

//slice selects the selected element.
const anotherName=name.slice(0,3);
console.log(anotherName);

//replace
const url="www.webbocket.com";
console.log(url.replace("com","in"));

//split
const demo="puja-is-a-good-girl";
console.log(demo.split('-'));


