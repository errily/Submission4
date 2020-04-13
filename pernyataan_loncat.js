console.log('contoh break');
var readline = require('readline-sync');
const data = [30, 60, 10, 50, 40, 20, 70];
var a = parseInt(readline.question(' Masukan nilai yang dicari: '));
var indeks = -1;
for (let i in data) {
if (data[i] === a) {
indeks = i;
break;
}
}
if (indeks > -1) {
console.log(` ${a} ditemukan pada indeks ke-${indeks} `);
} else {
console.log(` ${a} tidak ditemukan `);
} 

console.log('\n')

//contoh_continue
console.log('contoh continue');
for (let i=0; i<10; i++) {
if (i % 2 === 0) continue;
process.stdout.write(i + ' ');
}

console.log('\n')

//contoh_return
console.log('contoh return');
function kali(a, b) {
c = a * b;
return c;
}
var nilai1 = 10, nilai2 = 20, hasil;
hasil = kali(nilai1, nilai2);
console.log(` ${nilai1} x ${nilai2} = ${nilai1} `);