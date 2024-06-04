import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import Button from "./Button"
import useCart from "@hooks/useCart"
import { useEffect, useState } from "react"

const TableCard = ({ tableData, selectedTableId, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {tableData.photo ? (
          <Image
            source={{ uri: tableData.photo.route }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholderImage}></View>
        )}
      </View>
      <Text style={styles.name}>{tableData.name}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsText}>{tableData.type}</Text>
        <Text style={styles.detailsText}>
          Вместимость: {tableData.capacity}
        </Text>
      </View>
      <Button
        text={selectedTableId === tableData.id ? "Выбрано" : "Выбрать"}
        onPress={() => {
          console.log("start")
          if (selectedTableId !== tableData.id)
            onPress(selectedTableId === tableData.id ? -1 : tableData.id)
        }}
        styleObject={
          selectedTableId === tableData.id
            ? styles.selectedButton
            : styles.button
        }
      />
      <View
        style={[
          styles.statusIndicator,
          { backgroundColor: tableData.status ? "#31A24C" : "#FF0000" },
        ]}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "40%",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "#8AB8FF",
    borderRadius: 20,
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    borderRadius: 999,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  placeholderImage: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#C4C4C4",
    borderRadius: 999,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
  },
  details: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
    lineHeight: 22.5,
  },
  detailsText: {
    fontSize: 12,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#8AB8FF",
  },
  selectedButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#4ade80",
  },
  statusIndicator: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 10,
    aspectRatio: 1,
    borderRadius: 999,
  },
})

export default TableCard
