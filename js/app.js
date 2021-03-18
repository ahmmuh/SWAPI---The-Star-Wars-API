const searchFilms = (query) => {
  const url = `https://swapi.dev/api/films/?search=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showFilms(data.results);
    })
    .catch((error) => {
      const errElement = document.getElementsByClassName("errMsg"); //återkommer?
      errElement.innerHTML = error;
      console.log(errElement);
    });
};
let TimeOurToken = 0;

window.onload = () => {
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      if (searchInput.value.trim().length === 0) {
        return 0;
      }
      TimeOurToken = setTimeout(() => {
        searchFilms(searchInput.value);
      }, 200);
    });
  }
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
      const title = document.createElement("h5");
      const desc = document.createElement("p");
      const button = document.createElement("button");
      button.innerHTML = "More info";
      button.className = "btn btn-danger mb-2";
      title.innerHTML = film.title;
      desc.innerHTML = film.opening_crawl;
      cardBody.appendChild(title);
      cardBody.appendChild(desc);
      cardBody.appendChild(button);
      button.addEventListener("click", (e) => {
        e.preventDefault();
        saveFilm(film);
      });
    } else {
      const h4 = document.createElement("h4");
      h4.innerHTML = "There is no a film";
      cardBody.appendChild(h4);
      alert("no");
    }
  });
};

const saveFilm = (film) => {
  localStorage.setItem("key", JSON.stringify(film));
  location.href = "film.html";
};

setTimeout(() => {
  window.location.reload = () => {
    localStorage.clear();
  };
}, 5000);
