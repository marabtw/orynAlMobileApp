import { View, ScrollView } from "react-native"

import FavoriteRestaurantCard from "./components/FavoriteRestaurantCard"

const FavoriteRestaurants = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 15,
        // paddingVertical: 15,
        // flexWrap: "wrap",
        // flexDirection: "row",
        // justifyContent: "space-between",
        backgroundColor: "white",
        borderTopColor: "#ddd",
        borderTopWidth: 1,
      }}
    >
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginTop: 10 }}>
        <FavoriteRestaurantCard />
      </View>
      <View style={{ marginVertical: 10 }}>
        <FavoriteRestaurantCard />
      </View>
    </ScrollView>
  )
}

export default FavoriteRestaurants
