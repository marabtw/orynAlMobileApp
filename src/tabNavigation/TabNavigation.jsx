import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { NAVIGATIONS } from "./Navigation.config"

import AdminTabNavigation from "./components/AdminTabNavigation"
import OwnerTabNavigation from "./components/OwnerTabNavigation"
import UserTabNavigation from "./components/UserTabNavigation"

const Tab = createBottomTabNavigator()

const getTabIoniconName = (routeName, focused) => {
  switch (routeName) {
    case NAVIGATIONS.Home:
      return focused ? "home" : "home-outline"
    case NAVIGATIONS.Profile:
      return focused ? "person-circle" : "person-circle-outline"
    case NAVIGATIONS.Cart:
      return focused ? "cart" : "cart-outline"
    case NAVIGATIONS.Restaurant.favoriteRestaurants:
      return focused ? "heart" : "heart-outline"
    case NAVIGATIONS.Orders.restaurantOrdersHistory:
      return focused ? "reader" : "reader-outline"
    case NAVIGATIONS.Orders.ordersHistory:
      return focused ? "reader" : "reader-outline"
    case NAVIGATIONS.Restaurant.myRestaurants:
      return focused ? "restaurant" : "restaurant-outline"
    case NAVIGATIONS.Management.allRestaurants:
      return focused ? "restaurant" : "restaurant-outline"
    case NAVIGATIONS.Management.owners:
      return focused ? "person" : "person-outline"
    case NAVIGATIONS.Management.clients:
      return focused ? "people" : "people-outline"
    case NAVIGATIONS.Management.restaurantServices:
      return focused ? "cog" : "cog-outline"
    default:
      return "ellipse-outline"
  }
}

const role = "user"

const TabNavigation = () => {
  return (
    <>
      {role === "admin" ? (
        <AdminTabNavigation Tab={Tab} getTabIconName={getTabIoniconName} />
      ) : role === "owner" ? (
        <OwnerTabNavigation Tab={Tab} getTabIconName={getTabIoniconName} />
      ) : (
        <UserTabNavigation Tab={Tab} getTabIconName={getTabIoniconName} />
      )}
    </>
  )
}

export default TabNavigation
