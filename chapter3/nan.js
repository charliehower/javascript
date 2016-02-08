//NaN - Not a Number
console.log(NaN == NaN); //false, NaN is not equal to any value, including NaN
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN('10')); //false
console.log(isNaN('blue')); //true
console.log(isNaN(true)); //false - can be converted to number 1
