
var readline = require('readline-sync');
function kali(a, b) {
return a * b;
}
var a = parseFloat(readline.question(' Masukan nilai a: '));
var b = parseFloat(readline.question(' Masukan nilai b: '));
var c;

c = kali(a, b);
console.log(` ${a} x ${b} = ${c} `);

