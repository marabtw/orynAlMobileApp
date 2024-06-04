import React, { createContext, useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { axios } from "@lib/axios"

import { jwtDecode } from "jwt-decode"

import { NAVIGATIONS } from "@navigation/Navigation.config"
import {
  signinRequest,
  signupRequest,
  refreshTokenRequest,
} from "@modules/Authorization/api"
import { getProfileRequest } from "@modules/Profile/api"

// import { useToast } from "@hooks"

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const navigation = useNavigation()
  // const showNotification = useToast()
  const [user, setUser] = useState()
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken")
      const refreshToken = await AsyncStorage.getItem("refreshToken")

      if (accessToken) {
        const decodedToken = jwtDecode(accessToken)
        if (isTokenExpired(decodedToken)) {
          await refreshTokens(refreshToken)
        } else {
          updateUser(decodedToken)
        }
      } else if (refreshToken) {
        await refreshTokens(refreshToken)
      } else {
        setUser({ role: "guest" })
      }
    }

    checkAuth()
  }, [])

  const refreshTokens = async (refreshToken) => {
    try {
      const { data } = await refreshTokenRequest({ refreshToken })
      const newAccessToken = { data }.accessToken
      const newRefreshToken = { data }.refreshToken
      await AsyncStorage.setItem("accessToken", newAccessToken)
      await AsyncStorage.setItem("refreshToken", newRefreshToken)
      const newDecodedToken = jwtDecode(newAccessToken)
      updateUser(newDecodedToken)
    } catch (err) {
      setUser({ role: "guest" })
      setIsAuthed(false)
      // showNotification(
      //   "Не удалось обновить токен. Пожалуйста, войдите снова.",
      //   "error"
      // )
    }
  }

  const updateUser = async (decodedToken) => {
    const cancelTokenSource = axios.CancelToken.source()
    try {
      const { data } = await getProfileRequest({
        cancelToken: cancelTokenSource.token,
      })
      setUser({
        ...decodedToken,
        name: data?.name || "",
        surname: data?.surname || "",
      })
      setIsAuthed(true)
    } catch (err) {
      setIsAuthed(false)
      deleteUser()
      // showNotification("Не удалось загрузить профиль.", "error")
    }
  }

  const deleteUser = async () => {
    await AsyncStorage.removeItem("accessToken")
    await AsyncStorage.removeItem("refreshToken")
    setUser({ role: "guest" })
    setIsAuthed(false)
    navigation.navigate(NAVIGATIONS.Home)
  }

  const isTokenExpired = (decodedToken) => {
    const currentTime = Math.floor(Date.now() / 1000)
    return decodedToken.exp < currentTime
  }

  const signin = async ({ email, password }) => {
    try {
      const { data } = (await signinRequest(email, password)).data
      const newDecodedToken = jwtDecode(data.access_token)
      if (newDecodedToken.role !== "user") {
        console.log("Вы не можете использовать эту приложению")
        return
      }
      await AsyncStorage.setItem("accessToken", data.access_token)
      await AsyncStorage.setItem("refreshToken", data.refresh_token)
      updateUser(newDecodedToken)
      navigation.navigate(NAVIGATIONS.Profile.myProfile)
      // showNotification("Авторизвация прошла успешно", "success")
    } catch (err) {
      // showNotification("Не удалось войти. Ошибка: ",err.toString(), "error")
    }
  }

  const signup = async ({ name, surname, email, phone, password }) => {
    try {
      const { status } = await signupRequest(
        name,
        surname,
        email,
        phone,
        password
      )
      if (status === 201) {
        signin({ email, password })
      }
    } catch (err) {
      // showNotification("Не удалось зарегистрировать. Ошибка: ",err.toString(), "error")
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthed, deleteUser, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
