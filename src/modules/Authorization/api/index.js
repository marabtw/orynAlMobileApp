import myApi from "@lib/axios"

export const signinRequest = async (email, password) => {
  const response = await myApi.post("/api/auth/login", { email, password })
  if (response.data.accessToken) {
    await AsyncStorage.setItem("accessToken", response.data.accessToken)
  }
  return response
}

export const signupRequest = async (name, surname, email, phone, password) => {
  const response = await myApi.post("/api/auth/register", {
    name,
    surname,
    email,
    phone,
    password,
  })
  if (response.data.accessToken) {
    await AsyncStorage.setItem("accessToken", response.data.accessToken)
  }
  return response
}

export const refreshTokenRequest = async (token) => {
  const response = await myApi.get("/refresh", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (response.data.accessToken) {
    await AsyncStorage.setItem("accessToken", response.data.accessToken)
  }
  return response.data
}
