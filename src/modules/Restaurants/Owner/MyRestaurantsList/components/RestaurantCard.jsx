import { View, Text, Image, TouchableHighlight, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

const RestaurantCard = ({ data, index, menuActions }) => {
	const navigation = useNavigation()
  // const { openedContextMenuIndex, setOpenedContextMenuIndex } =
    // useContext(UIContext)

  // const handleContextMenu = () => {
  //   if (openedContextMenuIndex === index) setOpenedContextMenuIndex(null)
  //   else setOpenedContextMenuIndex(index)
  // }

  return (
    <View
      style={{
        marginTop: index === 0 ? 0 : 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "column",
        position: "relative",
      }}
    >
      <View style={styles.header}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.headerContent}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.buttons}>
            <TouchableHighlight
              underlayColor={"#e5e4ed"}
              onPress={() =>
                navigation.navigate(NAVIGATIONS.RestaurantTable.myRestaurantTables, {
                  id: data.id,
                })
              }
              style={styles.button}
            >
              <Text style={{ color: "#6AA7FC", fontWeight: "bold" }}>
                Столик
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={"#e5e4ed"}
              onPress={() =>
                navigation.navigate(NAVIGATIONS.RestaurantMenu.myRestaurantMenu, {
                  id: data.id,
                })
              }
              style={styles.button}
            >
              <Text style={{ color: "#FF007A", fontWeight: "bold" }}>Меню</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.info}>
        <View>
          <Text style={styles.infoText}>{data.rate}/10</Text>
          <Text style={styles.infoLabel}>Рейтинг</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{data.attendance}/день</Text>
          <Text style={styles.infoLabel}>Посещаемость</Text>
        </View>
      </View>
      <View style={styles.moreIconContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          // onPress={handleContextMenu}
        >
          <MoreHorizontalIcon color="#c4c4c4" />
        </TouchableHighlight>
        {/* {openedContextMenuIndex === index && (
          <ContextMenu menuActions={menuActions} />
        )} */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  headerContent: {
    flexDirection: "column",
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#F2F1FA",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
  description: {
    color: "#c4c4c4",
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  infoText: {
    fontWeight: "bold",
  },
  infoLabel: {
    color: "#A5A5A5",
  },
  moreIconContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    marginTop: 10,
    marginRight: 10,
    flex: 1,
  },
})

export default RestaurantCard
