const baseURL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
