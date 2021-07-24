const API_URL = "http://localhost:8080/api/books";

const BooksService = {

  async count() {
    let resp = await fetch(API_URL, {
      method: 'HEAD'
    });
    if (!resp.ok) {
      const msg = 'BooksService: ' + resp.statusText;
      console.error(msg);
      throw new Error(msg);
    }
    return resp.headers.get('X-Result-Count');
  }

};

export default BooksService;
