import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const SortByCategoryContainer = ({
  categories,
  style,
  getCategory = () => {},
}) => {
  const [active, setActive] = useState("")

  useEffect(() => {
    getCategory(active)
  }, [active])

  return (
    <View style={[styles.container, style]}>
      {categories?.map((el) => (
        <TouchableOpacity
          key={el.forShow}
          style={[
            styles.category,
            el.value === active && styles.activeCategory,
          ]}
          onPress={() => setActive(el.value)}
        >
          <Text style={[styles.text, el.value === active && styles.activeText]}>
            {el.forShow}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  category: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "transparent",
  },
  activeCategory: {
    backgroundColor: "#6AA7FC",
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#000",
  },
  activeText: {
    color: "#fff",
  },
})

export default SortByCategoryContainer
