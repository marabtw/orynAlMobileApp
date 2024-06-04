import { useContext, useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { UIContext } from "@context/UIContext"
import { useNavigation } from "@react-navigation/native"
import { NAVIGATIONS } from "@navigation/Navigation.config"

const RecentRestaurantsSlider = () => {
  const navigation = useNavigation()
  const [restaurants, setRestaurants] = useState([])
  const { recentRestaurantsSliderTrigger } = useContext(UIContext)

  useEffect(() => {
    const getRestaurants = async () => {
      let recentRestaurants = await AsyncStorage.getItem("recentRestaurants")
      recentRestaurants = recentRestaurants ? JSON.parse(recentRestaurants) : []
			console.log(recentRestaurants)
      recentRestaurants.filter((el) => {
        el
      })
      setRestaurants(recentRestaurants)
    }

    getRestaurants()
  }, [recentRestaurantsSliderTrigger])

  return (
    restaurants?.length > 0 && (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {restaurants.map((el) => (
          <TouchableOpacity
            style={styles.restaurantContainer}
            onPress={() => {
              navigation.navigate(NAVIGATIONS.Main.OrdersStack.createOrder, {
                restaurant: {
                  id: el.id,
                  icon: el.ico?.route || "",
                  name: el.name,
                },
              })
            }}
          >
            <Image style={styles.image} source={{ uri: el.icon }} />
            <Text style={styles.text}>{el.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
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
    overflow: "hidden",
  },
  text: {
    marginTop: 5,
  },
})

export default RecentRestaurantsSlider
