import { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"

import { axios } from "@lib/axios"
import { getRestaurantRequest } from "../api"

import { useToast } from "@hooks/useToast"
import { isObjectEqual } from "@utils/index"

import RestaurantBriefInfo from "@components/RestaurantBriefInfo/RestaurantBriefInfo"
import Slider from "./components/Slider"
import CommentsContainer from "./components/CommentsContainer"

const RestaurantDetails = ({ restaurantId }) => {
  const showNotification = useToast()
  const [restaurantData, setRestaurantData] = useState({})

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    getRestaurantRequest({ restaurantId, cancelToken: cancelTokenSource.token })
      .then(({ data }) => {
        if (!isObjectEqual(data, restaurantData)) setRestaurantData(data)
      })
      .catch((err) => {
        setRestaurantData([])
        showNotification(
          `Не удалось загрузит данные о ресторане: ${err}`,
          "error"
        )
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [restaurantId])

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <RestaurantBriefInfo data={restaurantData} />
      </View>
      <View style={styles.sliderContainer}>
        <Slider images={restaurantData.photos} />
      </View>
      <View style={styles.commentsContainer}>
        <CommentsContainer restaurantId={restaurantId} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "red"
	},
  infoContainer: {
    marginBottom: 10,
  },
  sliderContainer: {
    marginBottom: 10,
  },
  commentsContainer: {
    marginBottom: 10,
  },
})

export default RestaurantDetails
