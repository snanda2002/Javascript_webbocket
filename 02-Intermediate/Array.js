//Array is a object which can store similar type of data in a contigious memory location.
//Array index start from 0.

const myArr=["puja",4,5,6,7,8,9]   //Array initialize & declaring
console.log(myArr[0])             //Accesing the elements
console.log(myArr[4])  
console.log(myArr[5])  

const myNewArray=new Array(1,2,3,4);
console.log(myNewArray);

const myArray=[1,2,3,4,5,6,7];
console.log(myArray)
myArray.push(8);
console.log(myArray)
myArray.pop( );     //it will only remove the last element.
console.log(myArray) 

myArray.unshift(0);     //unshift add a new element in 1st index.
console.log(myArray);
myArray.shift();       // remove a element in the 1st index
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(5));    //indexof shows the index no of the given value.
console.log(myArray);

//Join:- it basically works on converting a array to string.
const demoArray=myArray.join();
console.log(demoArray);
console.log(typeof demoArray);

console.log("A",myArray);
const myArr1=myArray.slice(1,3);  //it will give the index no from 1 to 3 but not the index 3.
console.log(myArr1);
console.log("B",myArray);
const myArr2=myArray.splice(1,3);  //it will give all the index no from 1 to 3.
console.log(myArr2);

const cars=["maruti","alto","xuv","wagnor"]
const supercars=["BMW","Audi","Fortuner"]
cars.push(supercars);
console.log(cars);
cars.concat(supercars);
console.log(cars);

const allcars=cars.concat(supercars);      //In concat we can add one .
console.log(allcars);
const allNewcars=[...cars,...supercars];   //In spread operator(...)we can add muntiple.
console.log(allNewcars);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("puja"));  //isArray is a method to check wheather it is a array or not.
console.log(Array.from("puja"));     //from is a method in which we create that it automically creates a array.



