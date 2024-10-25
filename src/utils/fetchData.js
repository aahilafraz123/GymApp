export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'be2f2aef60mshadc4d92d9802305p14c97cjsnaa33d0d8e735',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'be2f2aef60mshadc4d92d9802305p14c97cjsnaa33d0d8e735',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}