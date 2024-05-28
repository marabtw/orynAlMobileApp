import React from "react"
import { View, Text } from "react-native"

import RestaurantCard from "./components/RestaurantCard"

const Restaurants = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        marginTop: 10,
        paddingHorizontal: 15,
				paddingBottom: 20,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 18, paddingVertical: 15 }}>
        Рестораны
      </Text>
      <View style={{flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", gap: 20}}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </View>
    </View>
  )
}

export default Restaurants
