import { NAVIGATIONS } from "@navigation/Navigation.config"
import { Ionicons } from "@ui/icons/icons"

import MainStackNavigation from "@navigation/StackNavigation/MainStackNavigation"

import { useTabBarVisibility } from "@hooks/useTabBarVisibility"

import { CartScreen } from "@modules/CartModule"
import { OrdersHistoryScreen } from "@modules/Order"
import ProfileNavigator from "@modules/Profile"
import { HeaderBackButton } from "@ui/button/header/BackButton"
import { useNavigation } from "@react-navigation/native"

const UserTabNavigation = ({ Tab, getTabIconName }) => {
  const { visible } = useTabBarVisibility()
  const navigation = useNavigation()

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
          display: visible ? "flex" : "none",
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={NAVIGATIONS.Tab.main}
        component={MainStackNavigation}
        options={({ route }) => ({
          tabBarLabel: "Главная",
          tabBarOnPress: () =>
            navigation.navigate(NAVIGATIONS.Main.HomeStack.home),
        })}
      />
      <Tab.Screen
        name={NAVIGATIONS.Tab.cart}
        component={CartScreen}
        options={{
          tabBarLabel: "Корзина",
          headerShown: true,
          headerStyle: headerStyle,
          headerTitle: "Корзина",
          headerLeft: () => (
            <HeaderBackButton
              to={NAVIGATIONS.Main.HomeStack.home}
              isNeedPaddingLeft={true}
            />
          ),
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Tab.ordersHistory}
        component={OrdersHistoryScreen}
        options={{
          tabBarLabel: "История Заказов",
          headerShown: true,
          headerStyle: headerStyle,
          headerTitle: "Моя История Заказов",
          headerLeft: () => (
            <HeaderBackButton
              to={NAVIGATIONS.Main.HomeStack.home}
              isNeedPaddingLeft={true}
            />
          ),
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name={NAVIGATIONS.Tab.profile}
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarLabel: "Профиль",
          tabBarOnPress: () =>
            navigation.navigate(NAVIGATIONS.Profile.myProfile),
        })}
      />
    </Tab.Navigator>
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

export default UserTabNavigation
