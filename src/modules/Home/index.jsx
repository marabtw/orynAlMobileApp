import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import HomeScreen from "./screen/HomeScreen"
import SearchScreen from "./screen/SearchScreen"

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Main.HomeStack.home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Main.HomeStack.homeSearch}
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
