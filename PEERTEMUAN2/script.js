// Object Create (Versi upgrade Dari Object Biasa)



const methodMahasiswa = {
    makan : function (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    },
    main : function (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    },
    tidur : function (jam) {
        this.energi *=  2;
        console.log(`Halo, ${this.nama} selamat tidur`);

    }
}

function mahasiswaa(nama, energi) {     // Function
    let mahasiswaa = Object.create(methodMahasiswa);        // Letak perbedaan Object Biasa
    mahasiswaa.nama = nama;
    mahasiswaa.energi = energi;
   // mahasiswaa.makan = methodMahasiswa.makan;   // cara menghubungkan antara function & method di javascript tanpa object.create
                                                // Letak perbedaan Object Biasa
    return mahasiswaa;
}

let sandhika = mahasiswaa('Sandhika', 10);
let dody = mahasiswaa('dody', 12);




// Object Biasa (Versi Upgrade dari Function Declaration)

const methodMaha = {
    makan : function (porsi) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    },
    main : function (jam) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    },
    tidur : function (jam) {
        this.energi *=  2;
        console.log(`Halo, ${this.nama} selamat tidur`);
    }
}


function mahasiswa (nama, energi) {
    let mahasiswa = {}                      // letak Perbedaan  Object.Create
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMaha.makan;         //Letak perbedaan Object.Create
    mahasiswa.main = methodMaha.main;           //Letak Perbedaan   Object.Create
    mahasiswa.tidur = methodMaha.tidur;         // letak Prbedaan   Object.Create

    return mahasiswa;
}