// button ketika diklik
const btn = document.getElementById("btn");
const jokeContainer = document.getElementById("joke");

// Fungsi untuk mengubah warna tombol ketika diklik
function changeColorOnClick() {
  btn.classList.add("clicked");
  setTimeout(() => {
    btn.classList.remove("clicked");
  }, 500); // 3000 milidetik (3 detik)
}

// Menambahkan event listener untuk klik pada tombol
btn.addEventListener("click", changeColorOnClick);

// ----------------------------

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", getJoke);
getJoke();
