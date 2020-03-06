import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteTitle = "Nomad Movies";
  next();
};
