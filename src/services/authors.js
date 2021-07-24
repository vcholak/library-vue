const API_URL = "http://localhost:8080/api/authors";

const AuthorsService = {

  async count() {
    let resp = await fetch(API_URL, {
      method: 'HEAD'
    });
    if (!resp.ok) {
      const msg = 'AuthorsService: ' + resp.statusText;
      console.error(msg); // Q: why there is no such log ???
      throw new Error(msg);
    }
    return resp.headers.get('X-Result-Count');
  }
};

export default AuthorsService;
