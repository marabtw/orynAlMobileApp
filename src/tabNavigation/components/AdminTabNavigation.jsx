import { NAVIGATIONS } from "@tabNavigation/Navigation.config"
import Icon from "react-native-vector-icons/Ionicons"
import ManagementNavigator from "@modules/Management"

const AdminTabNavigation = ({Tab, getTabIconName}) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getTabIconName(route.name, focused)
          const iconSize = focused ? 28 : 24
          return <Icon name={iconName} size={iconSize} color={color} />
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
        name={NAVIGATIONS.Management.allRestaurants}
        component={ManagementNavigator}
        options={{ tabBarLabel: "Рестораны" }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Management.owners}
        component={ManagementNavigator}
        options={{ tabBarLabel: "Владельцы" }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Management.clients}
        component={ManagementNavigator}
        options={{ tabBarLabel: "Клиенты" }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Management.restaurantServices}
        component={ManagementNavigator}
        options={{ tabBarLabel: "Сервисы" }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Profile}
        component={ManagementNavigator}
        options={{ tabBarLabel: "Профиль" }}
      />
    </Tab.Navigator>
  )
}

export default AdminTabNavigation
