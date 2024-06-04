import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { NAVIGATIONS } from "../Navigation.config"

import UserTabNavigation from "./components/UserTabNavigation"

const Tab = createBottomTabNavigator()

const getTabIoniconName = (routeName, focused) => {
  switch (routeName) {
    case NAVIGATIONS.Tab.main:
      return focused ? "home" : "home-outline"
    case NAVIGATIONS.Tab.profile:
      return focused ? "person-circle" : "person-circle-outline"
    case NAVIGATIONS.Tab.cart:
      return focused ? "cart" : "cart-outline"
    case NAVIGATIONS.Tab.ordersHistory:
      return focused ? "reader" : "reader-outline"
    default:
      return "ellipse-outline"
  }
}

const TabNavigation = () => {
  return <UserTabNavigation Tab={Tab} getTabIconName={getTabIoniconName} />
}

export default TabNavigation
