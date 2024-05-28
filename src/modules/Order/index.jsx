import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native"
import { Ionicons } from "@ui/icons/icons"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import CartScreen from "./screen/CartScreen"
import OrderDetailsScreen from "./screen/OrderDetailsScreen"
import OrdersHistoryScreen from "./screen/OrdersHistoryScreen"
import CreateOrderScreen from "./screen/CreateOrderScreen"

const Stack = createStackNavigator()

const headerStyle = {
  headerTitleAlign: "center",
  headerStyle: { height: 50 },
  headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
}

const BackButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ paddingLeft: 15 }}>
    <Ionicons name="chevron-back" size={24} color="tomato" />
  </TouchableOpacity>
)

const OrderNavigator = () => {
  const navigation = useNavigation()

  const renderBackButton = (onPress) => <BackButton onPress={onPress} />

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Orders.createOrder}
        component={CreateOrderScreen}
        options={{
          headerShown: true,
          ...headerStyle,
          title: "Создать Заказ",
          headerLeft: () =>
            renderBackButton(() => navigation.navigate(NAVIGATIONS.Home)),
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Orders.orderDetail}
        component={OrderDetailsScreen}
        options={{
          headerShown: true,
          ...headerStyle,
          title: "О Заказе",
          headerBackTitleVisible: false,
          headerLeft: () => renderBackButton(() => navigation.goBack()),
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Orders.ordersHistory}
        component={OrdersHistoryScreen}
        options={{
          headerShown: true,
          ...headerStyle,
          title: "История Заказов",
          headerLeft: () =>
            renderBackButton(() => navigation.navigate(NAVIGATIONS.Home)),
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Cart}
        component={CartScreen}
        options={{
          headerShown: true,
          ...headerStyle,
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          title: "Корзина",
          headerLeft: () =>
            renderBackButton(() => navigation.navigate(NAVIGATIONS.Home)),
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderNavigator
