// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Sadhika'));

// Arrow Function

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Doddy Ferdiyansyah'));

// jika parameternya lebih dari 1

// const tampilNama = (nama, waktu) => {
//     return `Halo ${nama}, selamat ${waktu}`;
// }

// console.log(tampilNama('Sandhika', 'Pagi'));

// Versi Singkat kalau parameter dan isinya cuma return (Implisit Return)
// const tampilNama = nama => 
//           `Halo, ${nama}`;
// console.log(tampilNama('Sandika'));

// Kalau nggak ada parameternya

// const tampilNama = () =>
//         `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ['Sandhika Galih', 'Doddy Ferdyansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Versi arrow function

// let jumlahHuruf = mahasiswa.map(
//     nama => nama.length
// );
// console.log(jumlahHuruf);

// Arrow Function yang mengenmbalikan object

// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlHuruf : nama.length}));
// console.log(jumlahHuruf);

// versi lebih singkat (Jika mengembalikan ogject yang sama dengan propertinya sama dengan nilainya)

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length}));
// console.table(jumlahHuruf);

// KONSEP THIS PADA ARROW FUNCTION

// const Mahasiswa = function () {
//         this.nama = 'Sandhika';
//         this.umur = 33;
//         this.sayHello = function () {
//                 console.log(`Halo,nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//         }
// }

// const sandhika = new Mahasiswa();

// Arrow Function dengan consctructure function

// const Mahasiswa = function () {
//         this.nama = 'Sandhika';
//         this.umur = 33;
//         this.sayHello =  () => {
//                 console.log(`Halo,nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//         }
// }

// const sandhika = new Mahasiswa();

// Object Literal
//   Catatan : Arrow function tidak memiliki konsep this
// const mhs1 = {
//         nama : 'Sandhika',
//         umur : 33,
//         sayHello : () => {
                // console.log(`Hello nama saya ${this.nama} saya berumur ${this.umur} tahun.`);
//         console.log(this);
//         }
// }


// const Mahasiswa = function () {
//         this.nama = 'Sandhika';
//         this.umur = 33;
//         this.sayHello = function () {
//                 console.log(`Halo,nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
//         }
//         setInterval(() => {
//                 console.log(this.umur++);
//         }, 500);
// }

// const sandhika = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function () {

let satu = 'size';
let dua = 'caption';

if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
}

this.classList.toggle(satu);
setTimeout(() => {
        this.classList.toggle(dua)
}, 600)
})


















