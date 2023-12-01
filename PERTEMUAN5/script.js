//  FACTORY FUNCTION

function init () {
    //let nama = 'Sandhika';
    return function() {
        //console.log(nama);
    }
}
let panggilNama = init();

panggilNama('Sandhika');


function ucapSelamat(waktu) {
    return function (nama) {
        console.log (`Halo ${nama}, selamat ${waktu} semoga harimu menyenagkan.`);
    }
}

let selamatPagi = ucapSelamat('Pagi');
let selamatMalam = ucapSelamat('Malam');
let selamatSiang = ucapSelamat('Siang');

selamatPagi('Sandhika');
selamatSiang('sandhika');
selamatMalam('Galih');



let add = function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}

let a = add();

console.log(a());
console.log(a());
console.log(a());

// Cara lain

let adda = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
}) ();

console.log(adda());
console.log(adda());
console.log(adda());
















