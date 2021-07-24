import axios from 'axios';

const API_URL = "http://localhost:8080/api";

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL; //TODO looks like it doe not work
  },

  // setHeader() {
  //   Vue.axios.defaults.headers.common[
  //     "Authorization"
  //   ] = `Token ${JwtService.getToken()}`;
  // },

  head(resource) {
    return axios.head(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, id = "") {
    return axios.get(`${resource}/${id}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, id, params) {
    return axios.put(`${resource}/${id}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};
export default ApiService;

export const BooksService = {
  count() {
    return ApiService.head(API_URL + "/books");
  },
  get() {
    return ApiService.get("books");
  }
};

export const AuthorsService = {
  count() {
    return ApiService.head(API_URL + "/authors");
  },
  query(type, params) {
    return ApiService.query("authors" + (type === "feed" ? "/feed" : ""), {
      params: params
    });
  },
  get(id) {
    return ApiService.get("authors", id);
  },
  create(params) {
    return ApiService.post("authors", { article: params });
  },
  update(id, params) {
    return ApiService.update("authors", id, { article: params });
  },
  destroy(id) {
    return ApiService.delete(`authors/${id}`);
  }
};

export const CopiesService = {
  count() {
    return ApiService.head(API_URL + "/copies");
  },
  get(id) {
    if (typeof id !== "string") {
      throw new Error(
        "[RWV] CommentsService.get() article slug required to fetch comments"
      );
    }
    return ApiService.get("copies", `${id}/comments`);
  },

  post(id, payload) {
    return ApiService.post(`copies/${id}/comments`, {
      comment: { body: payload }
    });
  },

  destroy(id) {
    return ApiService.delete(`copies/${id}`);
  }
};

export const GenresService = {
  count() {
    return ApiService.head(API_URL + "/genres");
  },
  add(id) {
    return ApiService.post(`gernes/${id}/favorite`);
  },
  remove(id) {
    return ApiService.delete(`gernes/${id}/favorite`);
  }
};
