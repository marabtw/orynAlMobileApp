import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import { AuthSreen } from "@modules/Authorization"
import MyProfileScreen from "./screen/MyProfileScreen"

import { HeaderBackButton } from "@ui/button/header/BackButton"


const Stack = createStackNavigator()

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Profile.myProfile}
        component={MyProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Profile.AuthStack.login}
        component={AuthSreen}
        options={{
          title: "Войти",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile.myProfile} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Profile.AuthStack.register}
        component={AuthSreen}
        options={{
          title: "Регистрация",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile.myProfile} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Profile.AuthStack.refresh}
        component={AuthSreen}
        options={{
          title: "",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile.myProfile} />,
        }}
      />
    </Stack.Navigator>
  )
}

const headerStyle = {
  height: 50,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

export default ProfileNavigator
