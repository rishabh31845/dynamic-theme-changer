import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const getUsers = async () => {
  try {
    const usersResponse = await axios.get(`${BASE_URL}/users`);
    const { result } = usersResponse.data;
    return result;
  } catch (exp) {
    throw exp;
  }
};

export { getUsers };
