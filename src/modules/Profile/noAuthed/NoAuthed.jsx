import { StyleSheet, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import { Button } from "@rneui/base"
import { LinearGradient } from "expo-linear-gradient"

const NoAuthed = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Вы не авторизованы</Text>
      <Button
        title="Зарегистрироваться / Войти"
        titleStyle={{ fontWeight: "bold", fontSize: 16 }}
        buttonStyle={{
          borderRadius: 8,
          width: 200,
          marginHorizontal: "auto",
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#62acfc", "#457cfb"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        onPress={() => {
          navigation.navigate(NAVIGATIONS.Profile.AuthStack.login)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 8,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
})

export default NoAuthed
