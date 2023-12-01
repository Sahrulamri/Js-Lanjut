// Spread `operator
// memecah interable menjadi  single element
const mhs = ['Sandhika', 'Doddy', 'Erik'];
console.log(...mhs[1]);

// Menggabungkan 2 Array
const dosen = ['Ade', 'Hendra', 'Wanda'];
const orang = [...mhs, 'Aji', ...dosen];
const orangBeneran = mhs.concat(dosen);

console.log(orang);

// Mengcopy Array
const mhs1 = [...mhs];
mhs1[0] = 'Fajar';
console.log(mhs1);
console.log(mhs);

// Real Life
const liMhs = document.querySelectorAll('li');
// Looping Menggunakan For
let mhs3= [];
for (let i = 0; i < liMhs.length; i++ ) {
    mhs3.push(liMhs[i].textContent);
}
console.log(mhs3);
// Looping Menggunakan Map
let teluaur = [...liMhs].map( m =>
     m.textContent
);
console.log(teluaur);

// Ambil class nama
const nama = document.querySelector('.nama');
// Pecah Menjadi Array
const huruf = [...nama.textContent].map( h => `<span>${h}</span>`).join('');
// console.log(nama);
nama.innerHTML = huruf;


















