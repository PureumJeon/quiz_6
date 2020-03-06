/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";

// Add your magic here!

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", movies });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", movies: [] });
  }
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres }
  } = req;

  const newMovie = await Movie.create({
    title,
    year,
    rating,
    synopsis,
    genres: genres.split(",")
  });

  console.log(newMovie);
  res.redirect(routes.detail(newMovie.id));
};

export const search = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};

export const movieDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    console.log(movie);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    console.log(error);
  }
};

export const getEditMovie = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById(id);
    const genreString = movie.genres.join(",");
    res.render("edit", {
      pageTitle: `Edit ${movie.title}`,
      movie,
      genreString
    });
  } catch (error) {
    console.log(error);
  }
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres }
  } = req;

  // const genreArr = genres.split(",");

  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres }
    );
    res.redirect(routes.detail(id));
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = (req, res) => {
  res.redirect("home", { pageTitle: "Home" });
};
