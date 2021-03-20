//select back button with it ID, checked if the a button and then added click event and opened index.html
const backBtn = document.querySelector("#backBtn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    location.href = "index.html";
  });
}

// this function gets information from getSavedFilms() function which is below.
// created html element and show the detail of the seleced film.
const showSavedFilm = (savedFilm) => {
  const detailFilmTitle = document.querySelector("#detailFilmTitle");
  const director = document.querySelector(".director");
  const producer = document.querySelector(".producer");
  const description = document.querySelector(".description");
  const release_date = document.querySelector(".release_date");
  const characters = document.querySelector(".characters");
  const species = document.querySelector(".species");
  detailFilmTitle.innerHTML = `Film title: ${savedFilm.title}`;
  director.innerHTML = `Director: ${savedFilm.director}`;
  producer.innerHTML = `Producer: ${savedFilm.producer}`;
  description.innerHTML = `Description: ${savedFilm.opening_crawl}`;
  release_date.innerHTML = `Release: date: ${savedFilm.release_date}`;
  characters.innerHTML = `Characters: ${savedFilm.characters.length}`;
  species.innerHTML = `Species: ${savedFilm.species.length}`;
};
// this function gets savedfilm from localStorage.getItem("key") web API and pass the data to showSavedFilm(savedFilm);
const getSavedFilm = () => {
  let savedFilm = JSON.parse(window.localStorage.getItem("key"));
  showSavedFilm(savedFilm);
};

//call the function
getSavedFilm();
