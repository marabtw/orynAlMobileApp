import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import { Ionicons } from "@ui/icons/icons"

import ProfileNavigator from "@modules/Profile"
import RestaurantsNavigator from "@modules/Restaurants"

const OwnerTabNavigation = ({ Tab, getTabIconName }) => {
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
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={NAVIGATIONS.Restaurant.myRestaurants}
        component={RestaurantsNavigator}
        options={{ tabBarLabel: "Мои Рестораны" }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate({
              name: NAVIGATIONS.Restaurant.myRestaurants,
              params: { screen: NAVIGATIONS.Restaurant.myRestaurants },
              merge: true,
            })
          },
        })}
      />
      <Tab.Screen
        name={NAVIGATIONS.Profile}
        component={ProfileNavigator}
        options={{ tabBarLabel: "Профиль" }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate({
              name: NAVIGATIONS.Profile,
              params: { screen: NAVIGATIONS.Profile },
              merge: true,
            })
          },
        })}
      />
    </Tab.Navigator>
  )
}

export default OwnerTabNavigation
