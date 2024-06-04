function sum(name, ...data) {
  let total = 0;
  for (item of data) {
    total += item;
  }

  console.log(`Total ${name} is ${total}`);
}

sum("Orange", 2, 2, 2, 2, 2, 2, 2, 2);

const values = [10, 10, 10, 10, 10];
sum("Orange", ...values);

function oldSum() {
  let total = 0;
  for (const item of arguments) {
    total += item;
  }
  console.log(`Total is ${total}`);
}

oldSum(10, 10, 10, 10, 10);

const say = function sayHello(name) {
  console.log(`Hello ${name}`);
};

say("Hello");
