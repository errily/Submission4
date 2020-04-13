console.log('membuat dan manggunakan objek')
console.log('\n')
function Segitiga(a, t) {
this.alas = a;
this.tinggi = t;
}
Segitiga.prototype.luas = function () {
return this.alas * this.tinggi / 2;
}
var obj = new Segitiga(4, 5);
console.log(' Sebelum nilai properti diubah ');
console.log(` obj.alas\t: ${obj.alas} `);
console.log(` obj.tinggi\t: ${obj.tinggi} `);
console.log(' obj.luas\t: ' +  obj.luas() );

obj.alas = 10;
obj.tinggi = 8;
console.log(' \nSetelah nilai properti diubah ');
console.log(` obj.alas\t: ${obj.alas} `);
console.log(` obj.tinggi\t: ${obj.tinggi} `);
console.log(' obj.luas\t: ' +  obj.luas() );

console.log('\n')

console.log('alternatif untuk membuat objek')
console.log('\n')

var obj = {
alas: 4, 
tinggi: 5,
luas: function(){
return this.alas * this.tinggi / 2;
}
}
console.log(' Sebelum nilai properti diubah ');
console.log(` obj.alas\t: ${obj.alas} `);
console.log(` obj.tinggi\t: ${obj.tinggi} `);
console.log(' obj.luas\t: ' +  obj.luas() );

obj.alas = 10;
obj.tinggi = 8;
console.log(' \nSetelah nilai properti diubah ');
console.log(` obj.alas\t: ${obj.alas} `);
console.log(` obj.tinggi\t: ${obj.tinggi} `);
console.log(' obj.luas\t: ' +  obj.luas() );
