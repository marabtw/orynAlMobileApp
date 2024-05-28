import React, { useContext, useEffect, useState } from "react"
import { Text, TouchableOpacity, View, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { AuthContext } from "@context/AuthContext"
import { NAVIGATIONS } from "@tabNavigation/Navigation.config"
import { LinearGradient } from "expo-linear-gradient"

import { isValidEmail } from "@helpers/index"

import AuthFormInput from "../components/AuthFormInput"
import { Button } from "@rneui/base"

const Login = () => {
  const navigation = useNavigation()
  const { signin } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isValid = () => {
    return isValidEmail(email) && password
  }

  const handleSignin = async (e) => {
    e.preventDefault()
    if (!isValid()) {
			console.log("error")
      return
    }
    signin({ email, password })
  }

  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: "column",
        gap: 15,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 8,
        paddingTop: 10,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          width: "",
          marginHorizontal: "auto",
        }}
      >
        Рады вас видеть снова!
      </Text>
      <AuthFormInput
        label="Ваша почта"
				type="email"
        placeholder="example@example.com"
        onChange={(value) => setEmail(value)}
      />
      <View>
        <AuthFormInput
          label="Ваш пароль"
          type="password"
          placeholder="********"
          onChange={(value) => setPassword(value)}
        />
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => navigation.navigate(NAVIGATIONS.Authorization.refresh)}
        >
          <Text style={{ color: "#989898" }}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ gap: 5 }}>
        <Button
          title="Войти"
          titleStyle={{ fontWeight: "bold", fontSize: 16 }}
          buttonStyle={{
            borderRadius: 8,
            paddingHorizontal: 20,
            maxWidth: "70%",
            width: "100%",
            marginHorizontal: "auto",
          }}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#62acfc", "#457cfb"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={(e) => handleSignin(e)}
        />
        <View
          style={{ justifyContent: "center", flexDirection: "row", gap: 0 }}
        >
          <Text style={{ color: "#989898" }}>Нет аккаунта? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATIONS.Authorization.register)
            }
          >
            <Text style={{ color: "#3783fb" }}>Зарегистрируйтесь</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login
