import React from "react"
import { View, Text, StyleSheet, ScrollView, Image } from "react-native"

const PopularRestaurantsSlider = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.restaurantContainer}>
        <Image style={styles.image} source={{ uri: "https:" }} />
        <Text style={styles.text}>Restaurant 1</Text>
      </View>
      <View style={styles.restaurantContainer}>
        <Image style={styles.image} source={{ uri: "https:" }} />
        <Text style={styles.text}>Restaurant 2</Text>
      </View>
      <View style={styles.restaurantContainer}>
        <Image style={styles.image} source={{ uri: "https:" }} />
        <Text style={styles.text}>Restaurant 3</Text>
      </View>
      <View style={styles.restaurantContainer}>
        <Image style={styles.image} source={{ uri: "https:" }} />
        <Text style={styles.text}>Restaurant 3</Text>
      </View>
      <View style={styles.restaurantContainer}>
        <Image style={styles.image} source={{ uri: "https:" }} />
        <Text style={styles.text}>Restaurant 3</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: "row",
		paddingBottom: 20,
  },
  restaurantContainer: {
    marginRight: 15,
    width: 120,
  },
  image: {
    backgroundColor: "#dddddd",
    width: "100%",
    aspectRatio: 7 / 5,
		borderRadius: 8,
		overflow: "hidden"
  },
  text: {
    // textAlign: "center",
    marginTop: 5,
  },
})

export default PopularRestaurantsSlider
