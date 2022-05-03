import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const updateUserPreference = async (id, body) => {
  try {
    const userConfigResponse = await axios.put(
      `${BASE_URL}/userconfig/${id}`,
      body
    );
    const { result } = userConfigResponse.data;
    return result;
  } catch (exp) {
    throw exp;
  }
};

const fetchColorsMasterList = async () => {
  try {
    const colorsResponse = await axios.get(`${BASE_URL}/colors`);
    const { result } = colorsResponse.data;
    return result;
  } catch (exp) {
    throw exp;
  }
};

const fetchUserData = async (id) => {
  try {
    const usersResponse = await axios.get(`${BASE_URL}/users/${id}`);
    const { result } = usersResponse.data;
    return result;
  } catch (exp) {
    throw exp;
  }
};

export { updateUserPreference, fetchColorsMasterList, fetchUserData };
