//created function with parameter query to search films from API
//call showFilms with result as parameter
const searchFilms = (query) => {
  const url = `https://swapi.dev/api/films/?search=${query}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showFilms(data.results);
    });
};
//call onload event to wait for the whole page is loaded
//get search input by it's ID, check if there an input, if it is -> keyup event to input
//check if the input has 0 as value then return 0 otherwise call searchFilms() function and pass searchInput value
window.onload = () => {
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      if (searchInput.value.trim().length === 0) {
        return 0;
      } else {
        searchFilms(searchInput.value);
      }
    });
  }
};
// this function with films parameter, Here i use filter() method to check if the
// new array containing the elements that match the set test
// Returns an empty array if there are no matches
//pass results from filter to displayFilms() function

const showFilms = (films) => {
  const filmResults = films.filter((film) => film);
  displayFilms(filmResults);
};

//displayFilms() function with results as parameter
// select p with its class "lead" which has "Found movies appear here" by default in the html but set the length of the film result so you can se how many films was found.
// loop trough films and created a few html element to show matched films on the html (index.html)
const displayFilms = (results) => {
  document.querySelector(
    ".lead"
  ).innerHTML = ` ${results.length} movie(s) Was found`;
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
        saveFilm(film); // call saveFilm() function after clicking on the button (More info)
      });
    }
  });
};

// created saveFilm() function with film as parameter and the saved the film on the localStorage web API and opened film.html page to se more information about the selected film

const saveFilm = (film) => {
  localStorage.setItem("key", JSON.stringify(film));
  location.href = "film.html";
};
