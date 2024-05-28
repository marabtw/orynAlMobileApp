import { NAVIGATIONS } from "@tabNavigation/Navigation.config"
import { Ionicons } from "@ui/icons/icons"

import HomeNavigator from "@modules/Home"
import RestaurantsNavigator from "@modules/Restaurants"
import OrderNavigator from "@modules/Order"
import ProfileNavigator from "@modules/Profile"

const UserTabNavigation = ({ Tab, getTabIconName }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getTabIconName(route.name, focused)
          const iconSize = focused ? 28 : 24
          return <Ionicons name={iconName} size={iconSize} color={color} />
        },
        tabBarLabelStyle: ({ focused }) => ({
          fontSize: focused ? 16 : 12,
        }),
        tabBarStyle: {
          height: 56,
          paddingBottom: 5,
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={NAVIGATIONS.Home}
        component={HomeNavigator}
        options={{ tabBarLabel: "Главная" }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Restaurant.favoriteRestaurants}
        component={RestaurantsNavigator}
        options={{ tabBarLabel: "Избранные" }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate({
              name: NAVIGATIONS.Restaurant.favoriteRestaurants,
              params: { screen: NAVIGATIONS.Restaurant.favoriteRestaurants },
              merge: true,
            })
          },
        })}
      />
      <Tab.Screen
        name={NAVIGATIONS.Cart}
        component={OrderNavigator}
        options={{ tabBarLabel: "Корзина" }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate({
              name: NAVIGATIONS.Cart,
              params: { screen: NAVIGATIONS.Cart },
              merge: true,
            })
          },
        })}
      />
      <Tab.Screen
        name={NAVIGATIONS.Orders.ordersHistory}
        component={OrderNavigator}
        options={{ tabBarLabel: "История Заказов" }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate({
              name: NAVIGATIONS.Orders.ordersHistory,
              params: { screen: NAVIGATIONS.Orders.ordersHistory },
              merge: true,
            })
          },
        })}
      />
      <Tab.Screen
        name={NAVIGATIONS.Profile}
        component={ProfileNavigator}
        options={{ tabBarLabel: "Профиль" }}
      />
    </Tab.Navigator>
  )
}

export default UserTabNavigation
