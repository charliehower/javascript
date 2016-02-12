//LIFO
var colors = ["red", "blue"];
colors.push("green");
console.log(colors);
colors.pop();
console.log(colors);

//FIFO
colors.push("green");
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("red");
console.log(colors);

//Reverse
colors.reverse();
console.log(colors);

//Sort
var values = [9, 8, 7, 6, 5, 4, 3, 2, 1];
values.sort();
console.log(values);
function compare(value1, value2) {
  if (value1 < value2) {
    return 1;
  } else if (value1 > value2) {
    return -1;
  } else {
    return 0;
  }
}
values.sort(compare);
console.log(values);

//Concat
var cc = colors.concat(values);
console.log(cc);

//Slice
var colors1 = cc.slice(0, 3);
var values1 = cc.slice(3);
console.log(colors1);
console.log(values1);

//Splice
console.log(colors);
colors1 = colors.splice(0, 1); //delete
console.log(colors1);
console.log(colors);
colors1 = colors.splice(1, 0, "yellow", "orange"); //insert
console.log(colors1);
console.log(colors);
colors1 = colors.splice(1, 1, "red", "purple"); //insert 2, remove 1
console.log(colors1);
console.log(colors);


var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every( function( item, index, array){
  return (item > 2);
});
console.log(everyResult); // false
var someResult = numbers.some( function( item, index, array){
  return (item > 2);
});
console.log(someResult); // true
