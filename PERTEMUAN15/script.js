// Destructuring Array
const perkenalan = ['Hallo', 'nama saya,', 'Sandhika Galih'];
const perkenalan1 = ['Hallo', 'nama saya,', 'Sandhika Galih'];

const [salam, satu, dua, nama] = perkenalan;

// Skipping item
const [salam1, , , nama1] = perkenalan1;
console.log(nama1);

// Swap items
let a = 2;
let b = 4;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console,log(b);

// Return value pada function

function coba() {
     return [1, 2, 3];
}

const [d, e, c] = coba();
console.log(d);

// Rest Parameter

const [f, ...values] = [1, 2, 3, 4, 5, 6];
console.log(f);
console.log(values);

// Destructuring Object
const mhs = {
     nama2 : 'Sandhika Galih',
     umur : 33
}

const {nama2, umur} = mhs;
console.log(nama2);

// Assigment tanpa deklarasi object

({myName, age} = {
     myName : 'Sandhika Galih',
     age : 33
});
console.log(myName);

// Assign ke Variable baru
const mahasiswa = {
     namaa : 'Sandhika Galih',
     agee : 33
}

const {namaa: g, agee:h} = mahasiswa;

console.log(g);

//  Memberikan Nilai Default
const mahasiswaa = {
     Nma : 'Sandhika Galih',
     umr : 33,
     email : 'sandhkagalih@gmail.com'
}

const {Nma, umr, email = 'emaildefault@gmail.com'} = mahasiswaa;
console.log(email);

//  Memberikan Nilai Default + Assign Variable Baru

const mahasiswaa1 = {
     Nma1 : 'Sandhika Galih',
     umr1: 33,
     email1 : 'sandhkagalih@gmail.com'
}

const {Nma1 : n, umr1 : u, email1 : k = 'emaildefault@gmail.com'} = mahasiswaa1;
console.log(k);

// Rest Parameter

const mahasiswaaa1 = {
     Nma1 : 'Sandhika Galih',
     umr1: 33,
     email1 : 'sandhkagalih@gmail.com'
}

const {Nma1, ...value} = mahasiswaaa1;
console.log(value);

// Mengambil field pada object setelah dikirim sebagai parameter untuk function
const mobil = {
     idMobil : 245667,
     namaMobil : 'R34 Skyline GTR',
     merek : 'Toyota',
     Negara : 'Japan'
}

function getIdMobil ({id}) {
     return id;
}

console.log(getIdMobil(mobil));
















