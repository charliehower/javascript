//arguments object
function sayHi() {
  console.log("Hello " + arguments[0] + ' ' + arguments[1]);
}

sayHi('Asdrubale', 'Meowmix');

function sayHi2(name) {
  console.log("Hello " + name + ' ' + arguments[1]);
}

sayHi2('Asdrubale', 'Meowmix');
