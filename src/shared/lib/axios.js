import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

export { axios }

const myApi = axios.create({
  baseURL: "http://192.168.1.110:5000/",
})

myApi.interceptors.request.use(
  async (config) => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken")
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`
      }
    } catch (error) {
      console.error("Error retrieving access token", error)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default myApi
