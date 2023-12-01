// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jslanjut = videos.filter(function (video) {
     return video.textContent.includes('JAVASCRIPT LANJUTAN');
})
// ambil durasi masing masing video
.map(function (item) {
     return item.dataset.duration;
})

// ubah durasi menjadi int, ubah menit menjadi detik
.map(function (waktu) {
     const parts = waktu.split(':')
     .map(function (part) {
          return parseFloat(part);
     })
     return parts[0] * 60 + parts[1];
})
// jumlahkan semua detik
.reduce(function (totalMenit, detik) {
     return totalMenit + detik;
}, 0)

// ubah formatnya jadi jam menit detik
  const jam = Math.floor(jslanjut / 3600); // 2 jam

const jsLanjutMenit = jslanjut - jam * 3600; // 8000 - 7200
const menit = Math.floor(jsLanjutMenit / 60);  // 800 / 60 = 18

const detik = jsLanjutMenit - menit * 60
// Simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit,  ${detik} detik`;



const jmlVideo = videos.filter(function (video) {
     return video.textContent.includes('JAVASCRIPT LANJUTAN');
}).length;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jmlVideo);
