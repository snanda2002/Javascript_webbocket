//Filter

// const myArray=[1,2,3,4,5,6,7,8]
// const myFilterArray=myarray.filter((item)=>{
//     return item > 4
// })
// console.log(myFilterArray);

//filtering using foreach

// const filterArray = myArray.forEach((data)=>{
//     if(data>5){
//         // return data
//        console.log(data)
//     }
// })
//  console.log(filterArray);

//Map method

// const arrayNumbs = [2,4,6,8,10]
// const changedArray = arrayNumbs.map((value)=>{
//     return value + 2;
// })
// console.log(changedArray);

//chaining
// const chainingArray = [3,4,6,7,8,9,10]
// const updatedArray = chainingArray
//                 .map((data)=> data+10)
//                 .map((data)=> data*10)
//                 .filter((data)=> data>150)
// console.log(updatedArray);

//Reduce method

// const arrOfNum = [1,2,3,4,5]
// const reduceArray = arrOfNum.reduce(function(accumulator,currentValue){
//     console.log(`accumulator ${accumulator}and ${currentValue}`)
//     return accumulator + currentValue
// },2)
// console.log(`Our final value = ${reduceArray}`);

//set method
//How to create a set

const mySet = new Set();

//Add element to the set
myset.add(4);
myset.add(6);
myset.add(6);
myset.add(7);
myset.add(6);
myset.add(8);
myset.add(7);
myset.add(9);
myset.add(10);

console.log(mySet);

//How to get length or size of set
const mySetSize = mySet.size;
console.log(mySetSize);

//Delete an element from the set
const DeleteElement = (mySet.delete(7));
console.log(myset);

//check element is existing or not.
console.log(mySet.has(8));


    
