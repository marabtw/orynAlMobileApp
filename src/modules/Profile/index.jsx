import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import MyProfileScreen from "./screen/MyProfileScreen"

import { AuthSreen } from "@modules/Authorization"
import { HeaderBackButton } from "@ui/header/BackButton"

const Stack = createStackNavigator()

const headerStyle = {
  headerStyle: { height: 50 },
}

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Profile}
        component={MyProfileScreen}
        options={{
          headerShown: false,
          ...headerStyle,
          title: "Мой профиль",
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Authorization.login}
        component={AuthSreen}
        options={{
          title: "Войти",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Authorization.register}
        component={AuthSreen}
        options={{
          title: "Регистрация",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Authorization.refresh}
        component={AuthSreen}
        options={{
          title: "",
          ...headerStyle,
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Profile} />,
        }}
      />
    </Stack.Navigator>
  )
}

export default ProfileNavigator
