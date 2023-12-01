//  1. HTML Fragments
const mhs = {
     nama : 'Sandhika galih',
     umur : 36,
     nrp : '2567866789',
     email : 'sandhikagalih@gmail.com'
};

const el = `<div class="mhs">
     <h2> Nama : ${mhs.nama}</h2>
     <span class="nrp">nrp : ${mhs.nrp}</span> <br>
     <span class="umur"> Umur : ${mhs.umur}</span> <br>
     <span class="email">Email : ${mhs.email}</span> <br>
</div>`

document.body.innerHTML = el;

// 2. Looping
// map
const mhs1 = [
     {
          nama : 'Sandhika Galih',
          email : 'sandhikagalih@gmail.com'
     },
     {
          nama : 'Doddy Ferdyansyah',
          email : 'doddyferdyansyah@gmail.com'
     },
     {
          nama : 'Erik',
          email : 'erik@gmail.com'
     },
];

const el1 = `<div class="mhs">
     ${mhs1.map(m => 
           `<ul>
               <li>${m.nama}</li>
               <li>${m.email}</li>
          </ul>`
     ).join('')}
<div>`;

document.body.innerHTML = el1;

// 3. Conditionals
//  ternary
const lagu = [{
     judul : 'Tetap Dalam Jiwa',
     penyanyi : 'Isyana Sarasvati'
},
{
     judul : 'kau Adalah',
     penynyi : 'Isyana Sarasvati',
     feat : 'Reyi Putra'
}];

const el2 = `<div class="lagu">
     ${lagu.map( song => 
          `<ul>
               <li>Judul lagu : ${song.judul}</li>
               <li>
                    Penyanyi : ${song.penyanyi}
                    ${song.feat ? `(feat ${song.feat})` : ''}
               </li>
          </ul>`
     ).join('')}
</div>`;

document.body.innerHTML = el2;

const mhs3 = {
     nama : 'Sandhika Galih',
     semester : 5,
     mataKuliah : [
          'Rekayasa Web',
          'Analisis Perancangan Sistem Informasi',
          'Pemrograman Sistem interaktif',
          'Perancangan sistem Berorientasi object'
     ]
};

function cetakMataKuliah(matkul) {
     return `<ol>
          ${matkul.map(mk => 
               `<li>${mk}</li>`
          ).join('')}
     </ol>`
}

const el3 = `<div class="mhs3">
     <h3>Nama : ${mhs3.nama}</h3>
     <span class="semester">Semester : ${mhs3.semester}</span>
     <h3>Mata Kuliah :</h3>
     ${cetakMataKuliah(mhs3.mataKuliah)}
</div>`;

document.body.innerHTML = el3;





















