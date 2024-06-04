import { useContext, useState } from "react"
import { Text, TouchableOpacity, View, ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { NAVIGATIONS } from "@navigation/Navigation.config"
import { AuthContext } from "@context/AuthContext"

import { isValidEmail, isValidPhone } from "@helpers/index"

import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@rneui/base"
import AuthFormInput from "../components/AuthFormInput"

const Register = () => {
  const { signup } = useContext(AuthContext)
  const navigation = useNavigation()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  const isFormValid = () => {
    return (
      isValidEmail(email) &&
      name &&
      isValidPhone(phone) &&
      password &&
      password === rePassword
    )
  }

  const handleSignup = async (e) => {
    console.log("start")
    e.preventDefault()
    if (!isFormValid()) {
      return
    }
    console.log("object")
    signup({ name, surname, email, phone, password })
  }

  return (
    <ScrollView
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
          marginHorizontal: "auto",
          marginBottom: 10,
        }}
      >
        Регистрация
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View style={{ width: "48%" }}>
          <AuthFormInput
            label="Имя"
            placeholder="Адильбек"
            onChange={(value) => setName(value)}
          />
        </View>
        <View style={{ width: "48%" }}>
          <AuthFormInput
            label="Фамилия"
            placeholder="Абилов"
            onChange={(value) => setSurname(value)}
          />
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <AuthFormInput
          label="Номер телефона"
          type="tel"
          placeholder="+7 (777) 77 77"
          onChange={(value) => setPhone(value)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <AuthFormInput
          label="Почта"
          type="email"
          placeholder="example@example.com"
          onChange={(value) => setEmail(value)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <AuthFormInput
          label="Пароль"
          type="password"
          placeholder="8+ символов"
          onChange={(value) => setPassword(value)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <AuthFormInput
          type="password"
          label="Повторите пароль"
          placeholder="********"
          onChange={(value) => setRePassword(value)}
        />
      </View>

      <View style={{ gap: 5 }}>
        <Button
          title="Зарегистрироваться"
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
          onPress={(e) => handleSignup(e)}
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            gap: 4,
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "#989898" }}>Уже зарегистрированы?</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NAVIGATIONS.Profile.AuthStack.login)
            }
          >
            <Text style={{ color: "#3783fb" }}>Войдите</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register
