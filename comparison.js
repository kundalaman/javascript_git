// console.log(2>=2);
// console.log(2==2);
// console.log(2!=2);      //simple comparisons of same datatype gives TRUE AND FAlSE

// console.log("2">1);   // convert the string into number data type
// console.log("02">1);

// In javascript equality operators doesnot convert data type whereas relational or comparison operators convert the data types so to same on both sides 
//then compare 

// Comparisons (>, <, >=, <=) convert null to 0 before comparing.
// Equality (==) does NOT convert null to 0, it only considers null == undefined.
// Because of this difference, null >= 0 is true, but null == 0 is false.

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);    //null is only loosely equal to undefined but not to any number.
// console.log(null < 0);

// let zero = null
// let anotherZero = Number(zero)       // 0
// console.log(anotherZero);
// console.log(typeof anotherZero);
// console.log(typeof zero);


// console.log(undefined > 0);
// console.log(undefined >= 0);

// console.log(undefined < 0);
// console.log(undefined == null);



// strict equality operator 

// console.log(2 === 2);    // it checks the data types also of operands