import React from "react"
import { View, Text } from "react-native"

import Search from "./components/Search"
import PopularRestaurantsSlider from "./components/PopularRestaurantsSlider"
import RecentRestaurantsSlider from "./components/RecentRestaurantsSlider"

const HeroSection = () => {
  return (
    <View>
      <Search />
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          marginTop: 10,
          paddingLeft: 15,
        }}
      >
        <Text style={{fontWeight: "600", fontSize: 18, paddingVertical: 15}}>Популярные Рестораны</Text>
        <PopularRestaurantsSlider />
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          marginTop: 10,
          paddingLeft: 15,
        }}
      >
        <Text style={{fontWeight: "600", fontSize: 18, paddingVertical: 15}}>Вы недавно смотрели</Text>
        <RecentRestaurantsSlider />
      </View>
    </View>
  )
}

export default HeroSection
