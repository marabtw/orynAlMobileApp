import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@rneui/base"
import { useState } from "react"
import { Ionicons } from "@ui/icons/icons"
import CartItem from "./components/CartItem"

const Cart = () => {
  const [cart, setCart] = useState({})
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView
        style={{ flex: 1 }}
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
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
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 400 }}>Salam Bro</Text>
            <TouchableOpacity style={{ height: "100%", aspectRatio: 1 }}>
              <Ionicons name="chevron-forward-outline" />
            </TouchableOpacity>
          </View>
          <View style={{ gap: 10, marginTop: 10, paddingBottom: 120 }}>
            <CartItem />
          </View>
        </View>
      </ScrollView>
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
          <Text style={{ fontSize: 20, fontWeight: 600 }}>12,305.00₸</Text>
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
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

export default Cart
