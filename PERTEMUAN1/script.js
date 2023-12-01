// 1. Object literal
let mahasiswa = {
    nama : 'Sandhika',
    Energi : 10,
    makan : function (porsi) {
        this.energi = this.energi + porsi;
        console.log (`Halo ${this.nama} selamat makan`)
    }
}

let mahasiswa1 = {
    nama : 'Deni',
    Energi : 20,
    makan : function (porsi) {
        this.energi = this.energi + porsi;
        console.log (`Halo ${this.nama} selamat makan`)
    }
}

// 2.Function Deklaration
function mahasiswaa(nama, energi) {     // Function
    let mahasiswaa = {};        
    mahasiswaa.nama = nama;
    mahasiswaa.energi = energi;

    mahasiswaa.makan = function (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    }
    mahasiswaa.main = function (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    }
    return mahasiswaa;
}

let sandhika = mahasiswaa('Sandhika', 10);
let dody = mahasiswaa('dody', 12);

// 3. contstucture Function

function mahasiswaa(nama, energi) {     // Function         // Letak Perbedaan Prototype ditampung di function 
           
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    }
    this.main = function (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    }
    
}

let iya = new mahasiswaa('Sandhika', 10);
let tidak = new mahasiswaa('dody', 12);


