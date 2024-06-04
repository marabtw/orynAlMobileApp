import { useContext } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { UIContext } from "@context/UIContext"

const ContextMenu = ({ menuActions = [] }) => {
  const navigation = useNavigation()
  const { setOpenedContextMenuIndex } = useContext(UIContext)

  const closeContextMenuFunction = () => {
    setOpenedContextMenuIndex(null)
  }

  return (
    <View style={styles.container}>
      {menuActions.map((menuAction) =>
        menuAction.hasOwnProperty("to") ? (
          <Pressable
            key={menuAction.action + Math.random() * 99999999}
            onPress={() => {
              navigation.navigate(menuAction.to, { id: menuAction.id })
              closeContextMenuFunction()
            }}
            style={({ pressed }) => [
              styles.pressable,
              { backgroundColor: pressed ? "#ebebeb" : "transparent" },
            ]}
          >
            <Text style={styles.text}>{menuAction.action}</Text>
          </Pressable>
        ) : (
          <Pressable
            key={menuAction.action + Math.random() * 99999999}
            onPress={() => {
              menuAction.onPress()
              closeContextMenuFunction()
            }}
            style={({ pressed }) => [
              styles.pressable,
              { backgroundColor: pressed ? "#ebebeb" : "transparent" },
            ]}
          >
            <Text style={styles.text}>{menuAction.action}</Text>
          </Pressable>
        )
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: -15,
    transform: [{ translateX: -30 }, { translateY: 30 }],
    flexDirection: "column",
    width: 150,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ebebeb",
    borderRadius: 5,
    backgroundColor: "white",
    zIndex: 50,
  },
  pressable: {
    minWidth: 100,
    paddingVertical: 5,
  },
  text: {
    color: "#000",
  },
})

export default ContextMenu
