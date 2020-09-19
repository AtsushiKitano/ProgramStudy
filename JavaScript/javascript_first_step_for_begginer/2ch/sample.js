console.log("出力");console.log("出力2");

var name = 'sample';
console.log(name);

var test1, test2;

console.log(test1);

arrayTest = [
  'test1',
  'test2'
];

for (let i = 0; i < arrayTest.length; i++) {
  console.log(arrayTest[i]);
}

var namesample = "鈴木" + "太郎" ;

console.log(namesample);
var person = {
  name: 'Obel Shutain',
  age: 20,
  gender: 'male',
  address: {
    postcode: '100-0001',
    pref: 'Tokyo',
  }
};

console.log(person.name);
console.log(person.age);
console.log(person.address.pref);
console.log(person['name']);

if (0) {
  console.log("true block");
} else {
  console.log("false block");
}

var loop_index = 0;

while (loop_index < 10) {
  console.log(loop_index);
  loop_index++;
}


function add() {
  var a = 10;
  var b = 20;

  return a+b;
}

console.log(add());


function inputAdd(a,b) {
  var result = a+b;

  console.log(result);
}

inputAdd(20,45);

