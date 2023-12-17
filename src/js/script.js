// ambil semua data melalui id
// let click_count = 0;
// const max_click = 5;
const cont = document.getElementById("container");
const box = document.getElementById("img_box");
const img = document.getElementById("img_qr");
const text = document.getElementById("text_qr");
const p = document.getElementById("title");
const btn = document.getElementById("btn");
const alert = document.getElementById('alert');

// fungsi untuk generate QR code
function generate() {
  // jika input tidak ada atau 0 maka akan melempar err dan hapus gambar
  if (text.value.length == 0) {
    box.classList.add("close_img");
    text.classList.add("err");
    setTimeout(() => {
      text.classList.remove("err");
    }, 750);
  } else {
    // jika input lebih dari 0 maka jalankan fungsi
    img.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
    img.classList.add("show_img");
  }
}

// fungsi reload
function reload() {
  window.location.reload();
}

// fungsi pemeriksa button
btn.addEventListener('click', () => {
  // click_count++;
  generate();
  // if (click_count >= max_click & text.value.length !== 0) {
  //   alert.classList.remove('hidden');
  //   setTimeout(() => {
  //     // sembunyikan alert setelah 2 detik
  //     alert.classList.add('hidden');
  //   }, 3000);
  //   // reset hitungan klik
  //   click_count = 0;
  // }
});

btn.addEventListener('dblclick', () => {
  reload();
});
