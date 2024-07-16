import axios from "axios";

const baseURL = "http://localhost:8012/api/";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 300000,
});

export async function userLogin(userData) {
  try {
    console.log(userData);
    const response = await instance.post("/users/loginUser", userData);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function checkServer(values) {
  try {
    console.log(values)
    const response = await instance.get("/status");
    console.log("Server Status:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
