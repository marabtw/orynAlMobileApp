import { useState, useEffect } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native"

import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"

import { Ionicons } from "@ui/icons/icons"
import { Button } from "@rneui/base"
import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const onBackPressInRestaurants = () => {
      navigation.navigate(NAVIGATIONS.Home)
      return true
    }

    BackHandler.addEventListener("hardwareBackPress", onBackPressInRestaurants)

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPressInRestaurants)
  }, [navigation])

  const restaurantId = 0

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
        source={{ uri: "" }}
      />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>Salam Bro</Text>
      {/* <Rating
        ratingColor="#f1c4"
        imageSize={30}
        readonly
        startingValue={2}
        // type="custom"
        // tintColor="#fff"
        // ratingBackgroundColor="#ccc"
        style={styles.rating}
      /> */}
      <Text style={{ fontSize: 9 }}>Улица Аль Фараби 32</Text>
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
          navigation.navigate(NAVIGATIONS.Orders.createOrder, { restaurantId })
        }}
      />
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

export default RestaurantCard
