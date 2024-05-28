import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import HomeScreen from "./screen/HomeScreen"

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
