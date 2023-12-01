//  Filter Map Reduce

const angka = [-1, 4, 6, 4, 6, 9, 10, 8, 5, 2];

// Filter menggunakan for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
    // console.log(angka[i]);
}
console.log(newAngka);

// Filter

const newAngka1 = angka.filter( a => 
 a >= 3
);
console.log(newAngka1);

// map
// kalikan semua angka dengan 2
const newAngka2 = angka.map(a => 
     a*2
); 
console.log(newAngka2);

// Reduce
// Untuk melakukan ssuatu pada seluruh elemen array
// Jumlahkan seluruh elemen pada array
const newAngka3 = angka.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0
);
console.log(newAngka3);

// Method Chaining
// Cari angka > 5
// Kalikan hasilnya dengan 3
// Jumlahkan seluruh index array

const hasil = angka.filter( a  => 
     a > 5
)
.map ( a =>
     a * 3
)
.reduce( (acc, curr) =>
     acc + curr, 0
);
console.log(hasil);













