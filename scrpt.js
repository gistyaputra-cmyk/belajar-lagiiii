function login(){
  let u = username.value;
  let p = password.value;

  if(u==="admin" && p==="bookingtiket"){
    loginPage.classList.add("hidden");
    homePage.classList.remove("hidden");
  } else {
    alert("Login gagal!");
  }
}

function logout(){
  homePage.classList.add("hidden");
  loginPage.classList.remove("hidden");
}

function detailSembalun(){
  let ok = confirm(
    "RINJANI VIA SEMBALUN\n\n" +
    "Estimasi: 3–4 hari\n" +
    "Harga: Rp 150.000/orang\n\nLanjut Booking?"
  );
  if(ok) booking();
}

function detailTorean(){
  let ok = confirm(
    "RINJANI VIA TOREAN\n\n" +
    "Estimasi: 2–3 hari\n" +
    "Harga: Rp 130.000/orang\n\nLanjut Booking?"
  );
  if(ok) booking();
}

function booking(){
  let nama = prompt("Nama Lengkap (Leader):");
  let rombongan = prompt("Jumlah Rombongan:");
  let tanggal = prompt("Tanggal Pendakian:");

  if(nama && rombongan && tanggal){
    alert(
      "BOOKING BERHASIL!\n\n" +
      "Silakan SCREENSHOT bukti ini dan kirim ke:\n" +
      "📱 0857-0882-9924\n\n" +
      "Nama Leader: " + nama +
      "\nSertakan bukti screenshot."
    );
    alert("Terima kasih telah melakukan booking 🙏");
  }
}

let selectedRate = 0;
function rate(n){
  selectedRate = n;
  alert("Rating dipilih: " + n + " ⭐");
}

function submitRating(){
  if(selectedRate===0){
    alert("Pilih rating terlebih dahulu!");
  } else {
    alert("Terima kasih atas rating Anda ⭐");
  }
}
