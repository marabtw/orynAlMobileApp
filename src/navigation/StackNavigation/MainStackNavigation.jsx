import { createStackNavigator } from "@react-navigation/stack"

import { NAVIGATIONS } from "../Navigation.config"

import HomeNavigator from "@modules/Home"
import { CreateOrderScreen, OrderDetailsScreen } from "@modules/Order"
import { HeaderBackButton } from "@ui/button/header/BackButton"

const Stack = createStackNavigator()

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATIONS.Main.HomeStack.root}
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Main.OrdersStack.createOrder}
        component={CreateOrderScreen}
        options={{
          headerShown: true,
          headerStyle: {
            ...headerStyle,
          },
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          title: "Создать Заказ",
          headerLeft: () => (
            <HeaderBackButton
              to={NAVIGATIONS.Main.HomeStack.home}
              isNeedPaddingLeft={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name={NAVIGATIONS.Main.OrdersStack.orderDetail}
        component={OrderDetailsScreen}
        options={{
          headerShown: true,
          headerStyle: {
            ...headerStyle,
          },
          headerTitleStyle: { fontSize: 16, fontWeight: "semibold" },
          title: "О Заказе",
          headerLeft: () => (
            <HeaderBackButton
              to={NAVIGATIONS.Main.HomeStack.home}
              isNeedPaddingLeft={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const headerStyle = {
  headerTitleAlign: "center",
  height: 50,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

export default MainStackNavigation
