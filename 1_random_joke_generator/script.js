// button ketika diklik
const myButton = document.getElementById("btn");

// Fungsi untuk mengubah warna tombol ketika diklik
function changeColorOnClick() {
  myButton.classList.add("clicked");
  setTimeout(() => {
    myButton.classList.remove("clicked");
  }, 500); // 3000 milidetik (3 detik)
}

// Menambahkan event listener untuk klik pada tombol
myButton.addEventListener("click", changeColorOnClick);

// ----------------------------

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
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
