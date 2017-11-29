const API_URL = process.env.REACT_APP_API_URL;

const OilService = {
  fetchOils() {
    return fetch(`${API_URL}/oils`)
      .then(response => response.json())
  },

  createOil(oil) {
    const request = {
      method: 'POST',
      body: JSON.stringify({
        oil: oil
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(`${API_URL}/oils`, request)
      .then(response => response.json())
  }
}

export default OilService