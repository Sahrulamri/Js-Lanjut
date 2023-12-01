// Rest Parameter

function myFunct () {

    // return myArgs;
    // return array.from(myArgs);
    return [...arguments];
}

console.log(myFunct(1, 2, 3, 4, 5));
// Jumlahkan 
function jumlahkan (...angka) {
    // For Of
    let hasil = 0;
    for (a of angka) {
        hasil += a;
    }
    return hasil
}

console.log(jumlahkan(1, 2, 3, 4, 5));

function jumlahkanTenan (...angka) {
    // Versi reduce
return angka.reduce((a, jumlah) => a + jumlah )
}

console.log(jumlahkanTenan(1, 2, 3, 4, 5));

// Array Destructuring

const mahasiswa = ['sandhika', 'Doddy', 'Erik', 'Fajar', 'Ilham', 'Kurniawan'];

const [ketua, wakil, ...anggota] = mahasiswa;
console.log(anggota);

// Object destructuring
const kerja = {
    pm : 'sandhika Galih',
    frontEnd1 : 'Erik',
    frontEnd2 : 'Doddy',
    backEnd1 : 'ilham',
    backEnd2 : 'Kurniawan',
    fullStack :'Amri',
    ux : 'Amri',
    devOps : 'Amri',
    SecurityEnginer : 'Amri'
}

const {pm, ...memberTeam} = kerja;

console.log(memberTeam);

// Filtering
function identitas (type, ...values) {
    return values.filter( v => typeof v === type)
}

console.log(identitas('number', 1, 2, 3, 4, 5, 'sandhika', 'Doddy', 'Erik', true, false));

