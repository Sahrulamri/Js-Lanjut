//  Tagged  Templates
const nama = 'Sandhika Galih';
const umur = 33;


function coba (strings, ...values) {
     let hasil = '';
     strings.forEach(function (string, i) {
          hasil += `${string} ${values[i] || ''}`;
     })
     //return hasil;

     // Versi Looping Dengan Menggunakan Reduce
     return strings.reduce( (hasil1, string, i) => 
           `${hasil1}${string}${values[i] || ''}`
     , '')
}

const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
console.log(str);

//  Contoh Pengimplementasian dalam Project

const nama1 = 'Sandhika Galih';
const umur1 = 33;
const email = 'sandhikagalih@gmail.com';


function highligth (strings, ...values) {

     // Versi Looping Dengan Menggunakan Reduce
     return strings.reduce( (hasil1, string, i) => 
           `${hasil1}${string}<span class="hl">${values[i] || ''}</span>`
     , '')
}

const str1 = highligth`Halo, nama saya ${nama1}, saya berumur ${umur1} tahun.Dan email saya adalah ${email}`;


document.body.innerHTML = str1;































