const mhs = ["sandhika", "Erik", "Doddy"];
// For Biasa
for (let i = 0; i < mhs.length; i++ ) {
    console.log(mhs[i]);
}

// Pakai ForEach
mhs.forEach(m => console.log(m));       // Arrow Function

// Pakai For Of

for(const ma of mhs) {
    console.log(ma);
}

// String
// Pakai For Of

const nama = "Sandhika";
for (na of nama) {
    console.log(na);
}

const mobil = ["McLaren", "Toyota Ayla", "Pagani Huaira"];

// Gunakan For Each
mobil.forEach((m , i) => {
    console.log(`${m} adalah mobil saya ke ${i +1}.`)
})

// Gunakan For Of

for([i, mo] of mobil.entries) {
    console.log (`${m} adalah mobil saya yang ke - ${i + 1}`)
}

// NodeList
const liNama = document.querySelector('.nama');

// Menggunakan ForEach
liNama.forEach(n => console.log(n.innerHTML));

// Menggunaakan ForOf
for (nam of liNama) {
    console.log(nam.textContent);
}

// Arguments

function Accumulation () {
    let jumlah = 0;
    // Menggunakan For Of
    // Walaupun tidak ada argument pada fungsinya, tetap akan ditangkap secara default oleh variabel default yang bernama arguments
    for (k of arguments) {
        jumlah += k;
    }
    return jumlah;
}

console.log(Accumulation(1, 2, 2, 9, 5, 7));

// for in
// Untuk menelusuri object

const makanan = {
    nama : 'Burger',
    jumlah : 6,
    toko : 'Burger King'
}

for (p in makanan) {
    console.log(makanan[p]);
}




