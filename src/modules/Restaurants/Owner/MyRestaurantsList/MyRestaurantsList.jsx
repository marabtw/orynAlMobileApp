import { View, Text, FlatList, StyleSheet} from "react-native"
import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

import RestaurantCard from "./components/RestaurantCard"
import { useNavigation } from "@react-navigation/native"

const getMenuActions = (navigation, restaurantId) => {
  return [
    { action: "Удалить", onPress: () => console.log("object") },
    {
      action: "Изменить",
      onPressNavigation: () =>
        navigation.navigate(NAVIGATIONS.Restaurant.updateRestaurant, {
          restaurantId,
        }),
    },
  ]
}

const MyRestaurantsList = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: 500 }}>
        Текущие рестораны
      </Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={[]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RestaurantCard
              data={item}
              index={index}
              menuActions={getMenuActions(navigation, item.id)}
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: "hidden",
  },
})

export default MyRestaurantsList
