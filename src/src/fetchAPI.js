const baseURL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e0364d43a4msh9f644f667a1df37p168503jsnad551fd2695a",
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
