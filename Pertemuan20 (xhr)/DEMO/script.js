// Syncronous Callback

function halo (nama) {
    alert(`Halo ${nama}`);
}

function showMessage (haloBandung) {
    const namaku = prompt(`Masukkan namamu wahai anak muda`);
    haloBandung(namaku);
}

showMessage(halo);

const mhs = [
    {
        nama : 'Sandhika Galih',
        NIP : '008983384',
        email :  'sandhikagalih@gmail.com',
        jurusan : 'TEKNIK INFORMATIKA',
        idDosenWali : 1
    }, 
    {
        nama : 'Erik',
        NIP : '3892002389',
        email : 'erik@gmail.com',
        jurusan : 'Teknik Industri',
        idDosenWali : 2
    },
    {
        nama : 'Raphael',
        NIP : '6687969090',
        email : 'raphael@gmail.com',
        jurusan : 'Teknik Elektro',
        idDosenWali : 3
    }
];

console.log('Start');

mhs.map(m =>{ 
    
    console.log(m.nama)
});
console.log('Finish');

// Asyncronous callback
// ajax
// i LIKE the vanilla n you ~jS


function getOurData (url, sucess, erorr) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                sucess(xhr.response);
            } else if (xhr.status === 404) {
                erorr(xhr.responseText);
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}

function success(result) {
    const join = JSON.parse(result);
    join.map(j => console.log(j.nama));
}
function erorr (eror) {
    console.log(eror);
}

console.log('start');
getOurData('data/data.json', success, erorr);
console.log('Finish');

// JQUERY

$.ajax({
    url : 'data/data.json',
    success : (mhs) => {
        mhs.map(m => console.log(m.nama));
    },
    error : erorr => {
        console.log(erorr.responseText);
    }
})




























