import { useState, useEffect } from "react"
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import { axios } from "@lib/axios"

import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@rneui/base"

import { Ionicons } from "@ui/icons/icons"
import CartItem from "./components/CartItem"
import useCart from "@hooks/useCart"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATIONS } from "@navigation/Navigation.config"

import { getRestaurantRequest } from "@modules/Order/api"
import { isObjectEmpty } from "@utils/index"

const Cart = () => {
  const navigation = useNavigation()
  const { cartData, increase, decrease, createOrder } = useCart()
  const [cart, setCart] = useState({})

  const [totalSum, setTotalSum] = useState(0)

  useEffect(() => {
    getRestaurantRequest({ restaurantId: cartData.restaurantId }).then(
      ({ data }) => {
        if (!data) return
        setCart({ ...cartData, name: data.name })
      }
    )

    return () => {}
  }, [cartData])

  useEffect(() => {
    if (cartData.foods?.length) {
      const totalPrice = cartData.foods.reduce(
        (acc, item) => acc + item.price * item.amount,
        0
      )
      setTotalSum(totalPrice)
    } else {
      setTotalSum(0)
    }
  }, [cartData.foods])

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {!isObjectEmpty(cart) && cart?.foods?.length > 0 ? (
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <View style={styles.header}>
              <Text style={{ fontSize: 18, fontWeight: 400 }}>{cart.name}</Text>
              <TouchableOpacity
                style={{
                  height: "100%",
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate(
                    NAVIGATIONS.Main.OrdersStack.createOrder,
                    {
                      restaurant: { id: cartData.restaurantId },
                    }
                  )
                }}
              >
                <Ionicons name="chevron-forward-outline" size={16} />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 10, marginTop: 10, paddingBottom: 120 }}>
              {cart?.foods?.length > 0 &&
                cart.foods.map((el) => (
                  <CartItem data={el} increase={increase} decrease={decrease} />
                ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "auto",
              padding: 15,
              borderRadius: 20,
            }}
          >
            <Ionicons style={{ fontSize: 20 }} name="cart-outline" />
            <Text style={{ fontSize: 20 }}>Корзина пустая</Text>
          </View>
        </View>
      )}
      {totalSum > 0 && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            paddingVertical: 10,
            alignItems: "center",
            gap: 10,
            backgroundColor: "#fafafa",
            paddingHorizontal: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Итого</Text>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>{totalSum} ₸</Text>
          </View>
          <Button
            title="Подтвердить"
            titleStyle={{ fontWeight: "bold", fontSize: 16 }}
            icon={{
              name: "cart",
              type: "ionicon",
              size: 15,
              color: "white",
            }}
            buttonStyle={{
              borderRadius: 8,
              width: "100%",
            }}
            containerStyle={{
              width: "100%",
            }}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#62ACFC", "#457CFB"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => {
              createOrder()
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = {
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "400",
  },
  forwardIcon: {
    height: "100%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cartItems: {
    gap: 10,
    marginTop: 10,
    paddingBottom: 120,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartBox: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,
  },
  emptyCartIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  emptyCartText: {
    fontSize: 20,
  },
  totalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fafafa",
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  totalRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "600",
  },
  confirmButtonTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  confirmButton: {
    borderRadius: 8,
    width: "100%",
  },
  confirmButtonContainer: {
    width: "100%",
  },
}

export default Cart
