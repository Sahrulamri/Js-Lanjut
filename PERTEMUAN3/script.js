// PROTOTYPE (Versi Upgrade dari Constructure Function)
// Letak Perbedaan dengan constructure Function = Function dan Prototype terpisah

    mahasiswaa.prototype.makan = function (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    },
    mahasiswaa.prototype.main = function (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    },
    mahasiswaa.prototype.tidur = function (jam) {
        this.energi *=  2;
        console.log(`Halo, ${this.nama} selamat tidur`);

    }


function mahasiswaa(nama, energi) {     // Function
            
    this.nama = nama;
    this.energi = energi;
   // mahasiswaa.makan = methodMahasiswa.makan;   // cara menghubungkan antara function & method di javascript tanpa object.create
    
    
}

//  Versi Class (Upgrade dari prototype)

class Mahasiswaa {
    constructor (nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

   makan (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    }
    main (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    }
    tidur (jam) {
        this.energi = jam *  2;
        console.log(`Halo, ${this.nama} selamat tidur`);

    }
}

// object.create

const methodMhs = {
    makan : function (porsi) {   // Method
        this.energi += porsi;
        console.log(`Halo,${this.nama} selamat makan`);
    },
    main : function (waktu) {
        this.energi -= waktu;
        console.log(`Halo, ${this.nama} selamat bermain`);
    },
    tidur : function (jam) {
        this.energi = jam *  2;
        console.log(`Halo, ${this.nama} selamat tidur`);

    }
}

function mahasiswaa (nama, energi) {
    let mahasiswaa = Object.create(methodMhs);  // Function
    mahasiswaa.nama = nama;
    mahasiswaa.energi = energi;

    return mahasiswaa;
}

let sandika = new mahasiswaa ('Sandhika', 10);