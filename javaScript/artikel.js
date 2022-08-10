// tanda bahwa kita berhasil menggunakan JS di website
console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
// menerapkan Browser objek di website menggunakan JS
alert("Selamat Datang di Code Website");
const firstName = prompt("Nama Depan Kamu");
const lastName = prompt("Nama Belakang Kamu");
const language = prompt("Bisa Berbahasa Apa?");

const user = {
  name: {
    first: firstName,
    last: lastName,
  },
  language: language,
};

if (user.language === "English") {
  alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
  alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "indonesia") {
  alert("Senang Bertemu Dengan Anda, " + user.name.first + " " + user.name.last + "!");
} else {
  alert("Code Website" + user.name.first + " " + user.name.last + "!");
}
