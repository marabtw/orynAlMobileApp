import { createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import MyRestaurantsScreen from "./screen/MyRestaurantsScreen"
import FavoriteRestaurantsScreen from "./screen/FavoriteRestaurantsScreen"
import { HeaderBackButton } from "@ui/header/BackButton"

import { Ionicons } from "@ui/icons/icons"

const Stack = createStackNavigator()

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ paddingLeft: 15 }}>
    <Ionicons name="chevron-back" size={24} color="tomato" />
  </TouchableOpacity>
)

const RestaurantsNavigator = () => {
  const navigation = useNavigation()

  const renderBackButton = (onPress) => <BackButton onPress={onPress} />

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Restaurant.myRestaurants}
        component={MyRestaurantsScreen}
        options={{
          headerShown: true,
          title: "Мои Рестораны",
          headerStyle: { height: 50 },
          headerTitleStyle: { fontSize: 18, fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Restaurant.favoriteRestaurants}
        component={FavoriteRestaurantsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { height: 50 },
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerTitleAlign: "center",
          title: "Избранные",
          headerLeft: () => <HeaderBackButton to={NAVIGATIONS.Home} />,
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Restaurant.updateRestaurant}
        component={MyRestaurantsScreen}
        options={{ headerShown: true, title: "Изменить Ресторан" }}
      />
    </Stack.Navigator>
  )
}

export default RestaurantsNavigator
