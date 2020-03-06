const HOME = "/";
const CREATE = "/create";
const SEARCH = "/search";
const DETAIL = "/:id";
const EDIT = "/:id/edit";
const DELETE = "/:id/delete";

const routes = {
  home: HOME,
  create: CREATE,
  search: SEARCH,
  detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return DETAIL;
    }
  },
  edit: id => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT;
    }
  },
  delete: DELETE
};

export default routes;
