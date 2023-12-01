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

const tampilNama = () =>
        `Hello World`;
console.log(tampilNama());

let mahasiswa = ['Sandhika Galih', 'Doddy Ferdyansyah', 'Erik'];

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

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length}));
console.table(jumlahHuruf);



























