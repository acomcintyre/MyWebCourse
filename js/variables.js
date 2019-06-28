let x, y, z;

x=10;
y = '10';
z = 30;
let timeInMs = Date.now();
s = timeInMs/ 1000;
m = s / 60;
h = m / 60;
d = h / 24;

console.log(`x is ${typeof x}`);

var newX = x++;
console.log('newX is:' + newX);

console.log('The comparison of x==y is:', (x==y));
console.log(timeInMs)
console.log('number of days since epoch: ' + d)

