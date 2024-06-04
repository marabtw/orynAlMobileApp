import { useContext, useEffect } from "react"
import { ScrollView } from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { UIContext } from "@context/UIContext"

import Layout from "@layout/Layout"
import CreateOrder from "../CreateOrder/CreateOrder"
import RestaurantDetails from "../RestaurantDetails/RestaurantDetails"

import ToastManager from "toastify-react-native"

const CreateOrderScreen = ({ route }) => {
  const { restaurant } = route.params
  const { setRecentRestaurantsSliderTrigger } = useContext(UIContext)

  useEffect(() => {
    const updateRestaurants = async () => {
      let recentRestaurants = await AsyncStorage.getItem("recentRestaurants")
      recentRestaurants = recentRestaurants ? JSON.parse(recentRestaurants) : []

      const index = recentRestaurants.findIndex((r) => r.id === restaurant.id)

      if (index !== -1) {
        recentRestaurants.splice(index, 1)
      }

      recentRestaurants.unshift(restaurant)

      if (recentRestaurants.length > 20)
        recentRestaurants.splice(recentRestaurants.length - 1, 1)

      await AsyncStorage.setItem(
        "recentRestaurants",
        JSON.stringify(recentRestaurants)
      )
      setRecentRestaurantsSliderTrigger((prev) => !prev)
    }

    updateRestaurants()
  }, [])

  return (
    <Layout>
		<ToastManager
        duration={2000}
        textStyle={{ fontSize: 14 }}
        height={40}
        positionValue={10}
      />
      <ScrollView>
        <RestaurantDetails restaurantId={restaurant.id} />
        <CreateOrder restaurantId={restaurant.id} />
      </ScrollView>
    </Layout>
  )
}

export default CreateOrderScreen
