// http://www.omdbapi.com/?apikey=bca61bcc&s=avengers

// Promise
// Objct yang mempresentasikan keberhasilan / kegagalan sebuah event asynchronous
// di masa mendatang
// States     (fullfiled / Rejected / Finally)
// Callback   (resolved / finally  / Pending)
// Aksi       (then    / catch)

// Contoh 1 
let ditepati = true;
const janji1 = new Promise ((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati');
    } else {
        reject('janji tidak ditepati');
    }
});

janji1
    .then(response => console.log(`OK ${response}`))
    .catch(response => console.log(`Mau kemana kamu ${response}`));
let amanah = true;
const janji2 = new Promise ((resolve, reject) => {
    if(amanah) {
        setTimeout(() => {
            resolve('janji telah ditepati setelah beberapa saat!');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Ingkar janji kamu ya');
        })
    }
});

console.log('mulai');

console.log(janji2
    .then(() => 
    console.log(janji2)
));

janji2
    .finally('Selesai menunggu selama beberapa saat')
    .then(response => console.log(`ok : ${response}`))
    .catch(response => console.log(`ingkar : ${response}`));

console.log('selesai');

// Promise all
let seru = true;
const film = new Promise((resolve, reject) => {
    if(seru) {
        setTimeout(() => {
            resolve([{
                judul : 'Avenger',
                cast : 'Doddy, Sandhika',
                sutradara : 'Irwan Kurniawan'
            }])
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Kurang Seru');
        })
    }
})

let kondisi = true;
const cuaca = new Promise((resolve, reject) => {
    if (kondisi) {
        setTimeout(() => {
            resolve([{
                lokasi : 'Jakarta',
                temperatur : 25,
                udara : 'buruk',
                kondisi : 'Berawan'
            }])
        }, 2000);
    } else {
        setTimeout(() => {
            reject('cuaca buruk');
        }, 500);
    }
});

// Versi array to array
Promise.all([film, cuaca])
    .then(result => console.log(result))
    .catch(result => console.log(result))

// Versi array langsung jadi
Promise.all([film, cuaca])
    .then(
        response => {
            const [film, cuaca] = response;
            console.log(film);
            console.log(cuaca);
        }
    )

// Latihan
let comfort = true;
const car = new Promise ((resolve, reject) => {
    if (comfort) {
        setTimeout(() => {
            resolve([{
                merk : 'Toyota 86',
                color : 'green',
                year : '2018',
                condition : 'good'
            }])
        }, 2000);
    } else {
        setTimeout(() => {
            reject ('Mobil ini kurang layak');
        }, 1000);
    }
});

let comfortwear = true;
const cloth = new Promise ((resolve, reject) => {
    if (comfortwear) {
        setTimeout(() => {
            resolve([{
                merk : 'Cressida',
                size : 'XL',
                color : 'white',
                price : 'Rp. 200.000'
            }])
        }, 2000);
    } else {
        setTimeout(() => {
            reject ('Size of clothing is not enough');
        }, 500);
    }
});

Promise.all([car, cloth])
    .then( promise => {
        const  [car, cloth] = promise;
        console.log(car);
        console.log(cloth);
    })


