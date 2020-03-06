import express from "express";
import routes from "./routes";
import {
  home,
  search,
  movieDetail,
  deleteMovie,
  getCreate,
  postCreate,
  getEditMovie,
  postEditMovie
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);
movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

movieRouter.get(routes.search, search);
movieRouter.get(routes.detail(), movieDetail);

movieRouter.get(routes.edit(), getEditMovie);
movieRouter.post(routes.edit(), postEditMovie);

movieRouter.get(routes.delete, deleteMovie);

export default movieRouter;
