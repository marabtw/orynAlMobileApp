import { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native"

import { LinearGradient } from "expo-linear-gradient"
import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import { Ionicons } from "@ui/icons/icons"
import { Button } from "@rneui/base"
import { useNavigation } from "@react-navigation/native"

const FavoriteRestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const onBackPressInFavoriteRestaurants = () => {
      navigation.navigate(NAVIGATIONS.Restaurant.favoriteRestaurants)
      return true
    }

    BackHandler.addEventListener("hardwareBackPress", onBackPressInFavoriteRestaurants)

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPressInFavoriteRestaurants)
  }, [navigation])

  const restaurantId = 0

  const toggleFavorite = () => {
    setSelected((prev) => !prev)
  }

  return (
    <View
      style={{
        position: "relative",
        maxWidth: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "rgba(0,0,0,.1)",
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        style={{ position: "absolute", zIndex: 10, right: 10, top: 10 }}
        onPress={() => toggleFavorite()}
      >
        {selected ? (
          <Ionicons name="heart" size={25} color={"tomato"} />
        ) : (
          <Ionicons name="heart-outline" size={25} />
        )}
      </TouchableOpacity>
      <Image
        style={{
          backgroundColor: "#ddd",
          width: "25%",
          aspectRatio: 1,
          borderRadius: 100,
        }}
        source={{ uri: "" }}
      />
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Salam Bro</Text>
        <Text style={{ fontSize: 9 }}>Улица Аль Фараби 32</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 9 }}>Рейтинг</Text>
          <Button
            title="ЗАБРОНИРОВАТЬ"
            titleStyle={{ fontWeight: "bold", fontSize: 9 }}
            buttonStyle={{
              borderRadius: 4,
              // marginHorizontal: "auto",
              maxWidth: "100%",
              paddingVertical: 4,
            }}
            containerStyle={
              {
                // width: "100%",
              }
            }
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#62acfc", "#457cfb"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            onPress={() => {
              navigation.navigate(NAVIGATIONS.Orders.createOrder, {
                restaurantId,
              })
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  rating: {
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007BFF",
  },
})

export default FavoriteRestaurantCard
