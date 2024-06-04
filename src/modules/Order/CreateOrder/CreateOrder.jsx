import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native"

import useCart from "@hooks/useCart"

import ChooseTime from "./components/ChooseTime/ChooseTime"
import TableReservation from "./components/TableReservation/TableReservation"
import SelectMenu from "./components/SelectMenu/SelectMenu"

const CreateOrder = ({ restaurantId }) => {
  const { cartData, setFoodForCart } = useCart()

  return (
    <View style={{}}>
      <ChooseTime restaurantId={restaurantId} />
      <TableReservation restaurantId={restaurantId} />
      <SelectMenu
        restaurantId={restaurantId}
        getFoodForCart={(food) => setFoodForCart({ food, restaurantId })}
        selectedFoodsId={
          cartData?.foods?.length > 0
            ? cartData.foods.map((food) => food?.id)
            : []
        }
      />
    </View>
  )
}

export default CreateOrder
