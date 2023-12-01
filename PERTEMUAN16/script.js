// Desttructing Function (Return Value)

function kalkulasi(a, b) {
     return [a * b, a / b, a + b, a - b];
}

const hasilJumlah = kalkulasi(2, 3)[2];
const hasilKurang = kalkulasi(2, 3)[3];
const hasilKali = kalkulasi(2, 3)[0];
const hasilBagi = kalkulasi(2, 3)[1];

const [kali, bagi, tambah, kurang] = kalkulasi(2, 3);

 console.log(hasilBagi);

 function kalkulasi2(a, b) {
     return [a * b, a / b, a + b, a - b];
}


const [kali1, bagi1, tambah1, kurang1='tidak ada'] = kalkulasi2(2, 3);

console.log(kurang1);

// Versi Object

function kalkulasi3(a, b) {
     return {
          kali2 : a * b,
          bagi2 : a / b,
          tambah2 : a + b,
          kurang2 : a - b
     }
}

const {kali2, bagi2, tambah2, kurang2} = kalkulasi3(2, 3);

console.log(kurang2);

//  Destructing Fnction Arguments

const mhs = {
     nama :'Sandhika Galih',
     umur : 33,
     email : 'sandhikagalih@gmail.com'
}

function tampilMhs1 (nama, umur) {
     return ` Halo, nama saya ${nama}, saya berusia ${umur} tahun.`
}

console.log(tampilMhs1(mhs.nama, mhs.umur));

//  Destructing Fnction Arguments Versi lain

const mahasiswa = {
     nama :'Sandhika Galih',
     umur : 33,
     email : 'sandhikagalih@gmail.com'
}

function tampilMhs2 (mhs1) {
     return ` Halo, nama saya ${mhs1.nama}, saya berusia ${mhs1.umur} tahun.`
}

console.log(tampilMhs2(mahasiswa));

const mahasiswaa = {
     nama :'Sandhika Galih',
     umur : 33,
     email : 'sandhikagalih@gmail.com',
     nilai : {
          uas : 85,
          tugas : 80,
          uts : 80
     }
}

//   Versi Destructing

function tampilMhs3 ({nama, umur, nilai}) {
     return ` Halo, nama saya ${nama}, saya berusia ${umur} tahun. Dan nilai uas saya adalah ${nilai.uas}.`;
}

console.log(tampilMhs3(mahasiswaa));

// Versi Destructuring bersarang untuk memunculkan nilai

function cetakMhs ({nama, umur, nilai: {uas, tugas, uts}}) {
     return ` Halo, nama saya ${nama}, saya berusia ${umur} tahun. Dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mahasiswaa));

