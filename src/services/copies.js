const API_URL = "http://localhost:8080/api/copies";

const CopiesService = {

  async count() {
    let resp = await fetch(API_URL, {
      method: 'HEAD'
    });
    if (!resp.ok) {
      const msg = 'CopiesService: ' + resp.statusText;
      console.error(msg);
      throw new Error(msg);
    }
    return resp.headers.get('X-Result-Count');
  },
  async available_count() {
    let resp = await fetch(API_URL + '/available', {
      method: 'HEAD'
    });
    if (!resp.ok) {
      const msg = 'CopiesService: ' + resp.statusText;
      console.error(msg);
      throw new Error(msg);
    }
    return resp.headers.get('X-Result-Count');
  }
};

export default CopiesService;
