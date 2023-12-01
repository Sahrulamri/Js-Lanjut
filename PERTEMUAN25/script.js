const coba = new Promise(resolve => {
    setTimeout(() => {
        resolve('selesai') 
    }, 2000);

});
console.log(coba);
coba
    .then(coba => console.log(coba));

function cobaPromise() {
    return new  Promise((resolve, reject) => {
        const waktu = 4000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai') 
            }, 2000);
        } else {
            reject('kelamaan');
        }
    });
}

const cobaa = cobaPromise();
coba
    .then(coba => console.log(coba))
    .catch(coba => console.log(coba))

async function cobaAsync () {
    try {
        const halo = await cobaPromise();
        console.log(halo);
    } catch (err) {
        console.log(err);
    }
}

cobaAsync();


















