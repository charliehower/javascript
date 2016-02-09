var age = 29;
console.log('++ prefix');
console.log(++age);
console.log(age + 1);
console.log(age);
console.log(++age - 1);

age = 29;
console.log('-- prefix');
console.log(--age);
console.log(age - 1);
console.log(age);
console.log(--age + 1);

age = 29;
console.log('++ postfix');
console.log(age++);
console.log(age + 1);
console.log(age);
console.log(age++ - 1);

age = 29;
console.log('-- postfix');
console.log(age--);
console.log(age - 1);
console.log(age);
console.log(age-- + 1);

console.log('! not');
console.log(!400);
console.log(!0);

console.log('== and ===');
console.log("55" == 55);
console.log("55" === 55); //recommended

console.log('conditional operator');
var max = (age > 30) ? 'yup' : 'nope';
console.log(max);
max = (age > 26) ? 'yup' : 'nope';
console.log(max);

console.log('for-in statement');
var test = {'one':'meow', 'two':'meowmeow'};
for (var propName in test) {
  console.log(propName);
  console.log(test[propName]);
}
