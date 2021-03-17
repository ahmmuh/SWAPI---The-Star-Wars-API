const searchFilms = (query) => {
  const url = `https://swapi.dev/api/films/?search=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showFilms(data.results);
    });
};
let TimeOurToken = 0;

window.onload = () => {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("keyup", () => {
    if (searchInput.value.trim().length === 0) {
      return 0;
    }
    TimeOurToken = setTimeout(() => {
      searchFilms(searchInput.value);
    }, 200);
  });
};

const showFilms = (films) => {
  const filmResults = films.map((film) => film);
  displayFilms(filmResults);
};
const displayFilms = (results) => {
  let cardBody = document.querySelector(".card-body");
  cardBody.innerHTML = "";
  results.forEach((film) => {
    if (film) {
      console.log(film);
      let title = document.createElement("h5");
      let desc = document.createElement("p");
      title.innerHTML = film.title;
      desc.innerHTML = film.opening_crawl;
      cardBody.appendChild(title);
      cardBody.appendChild(desc);
    } else {
      return console.log("no");
    }
  });
};
