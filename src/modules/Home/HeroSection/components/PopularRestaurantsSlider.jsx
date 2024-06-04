import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native"
import { axios } from "@lib/axios"

import { isArraysEqualDeep } from "@utils/index"

import { getAllPopularRestaurantsRequest } from "@modules/Home/api"
import { NAVIGATIONS } from "@navigation/Navigation.config"

const PopularRestaurantsSlider = () => {
  const navigation = useNavigation()
  // const setLoading = useLoading()
  // const showNotification = useToast()

  const [popularRestaurants, setPopularRestaurants] = useState([])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    fetchData(cancelTokenSource.token)

    return () => {
      cancelTokenSource.cancel()
    }
  }, [])

  const fetchData = async (cancelToken) => {
    // setLoading(true)
    try {
      const { data } = await getAllPopularRestaurantsRequest({
        cancelToken,
      })
      if (!data.items || data.items.length === 0) {
        setPopularRestaurants([])
        // showNotification("Популярные рестораны не найдены", "info")
      } else {
        if (!isArraysEqualDeep(popularRestaurants, data.items)) {
          setPopularRestaurants(data.items)
        }
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        // showNotification("Запрос был отменен", "warning")
      } else {
        // showNotification(err.toString(), "error")
      }
    } finally {
      // setLoading(false)
    }
  }

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      {popularRestaurants?.length > 0 ? (
        popularRestaurants.map((el) => {
          return (
            <TouchableOpacity
              style={styles.restaurantContainer}
              onPress={() => {
                el.id >= 0 &&
                  navigation.navigate(NAVIGATIONS.Orders.createOrder, {
                    restaurantId: el.id,
                  })
              }}
            >
              <Image
                style={styles.image}
                source={{ uri: `${el.photos[0].route}` }}
              />
              <Text style={styles.text}>{el.name}</Text>
            </TouchableOpacity>
          )
        })
      ) : (
        <Text>Рестораны не найдены</Text>
      )}
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
    overflow: "hidden",
  },
  text: {
    // textAlign: "center",
    marginTop: 5,
  },
})

export default PopularRestaurantsSlider
