import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import ClientsScreen from "./screen/ClientsScreen"

const Stack = createStackNavigator()

const ManagementNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Management.allRestaurants}
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
			<Stack.Screen
        name={NAVIGATIONS.Management.createRestaurant}
        component={ClientsScreen}
        options={{ headerShown: true, title: "Создать ресторан" }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Management.owners}
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
			<Stack.Screen
        name={NAVIGATIONS.Management.createOwner}
        component={ClientsScreen}
        options={{ headerShown: true, title: "Создать владельца" }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Management.clients}
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Management.restaurantServices}
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default ManagementNavigator
