import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import { LinearGradient } from "expo-linear-gradient"
import { Button } from "@rneui/base"
import { Ionicons } from "@ui/icons/icons"
import RatingStard from "@components/RatingStars/RatingStars"

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(false)

  const toggleFavorite = () => {
    setSelected((prev) => !prev)
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        maxWidth: "50%",
        width: 150,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,.1)",
        borderRadius: 8,
        paddingVertical: 10,
        position: "relative",
        gap: 5,
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", zIndex: 10, right: 10, top: 10 }}
        onPress={() => toggleFavorite()}
      >
        {selected ? (
          <Ionicons name="heart" size={25} />
        ) : (
          <Ionicons name="heart-outline" size={25} />
        )}
      </TouchableOpacity>
      <Image
        style={{
          backgroundColor: "#ddd",
          width: "50%",
          aspectRatio: 1,
          borderRadius: 100,
        }}
        source={{ uri: restaurant.icon.route }}
      />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{restaurant.name}</Text>
      <RatingStard rate={restaurant.rate} size={14} />
      <Text style={{ fontSize: 9 }}>{restaurant.address}</Text>
      <Button
        title="ЗАБРОНИРОВАТЬ"
        titleStyle={{ fontWeight: "bold", fontSize: 9 }}
        buttonStyle={{
          borderRadius: 4,
          marginHorizontal: "auto",
          maxWidth: "90%",
          paddingVertical: 4,
        }}
        containerStyle={{
          width: "100%",
        }}
        ViewComponent={LinearGradient}
        linearGradientProps={{
          colors: ["#62acfc", "#457cfb"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        onPress={() => {
          navigation.navigate(NAVIGATIONS.Main.OrdersStack.createOrder, {
            restaurant: {
              id: restaurant.id,
              icon: restaurant.icon.route,
              name: restaurant.name,
            },
          })
        }}
      />
    </View>
  )
}

export default RestaurantCard
