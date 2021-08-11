import axios from "axios";

const API = "https://restcountries.eu/rest/v2/all";

async function HandleRandomQuestion() {
  const response = await axios.get(`${API}`);
  return response.data;
}

export { HandleRandomQuestion };
