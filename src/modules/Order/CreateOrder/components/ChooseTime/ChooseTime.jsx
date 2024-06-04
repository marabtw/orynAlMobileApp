import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import useCart from "@hooks/useCart"

import { Ionicons } from "@ui/icons/icons"
import SelectTime from "./SelectTime"
import SelectDate from "./SelectDate"

const ChooseTime = ({ restaurantId }) => {
  const { setDateAndTimeToCart } = useCart()

  const [dateAndTime, setDateAndTime] = useState({
    date: "",
    time: "",
  })

  useEffect(() => {
    if (!dateAndTime.date || !dateAndTime.time) return
    setDateAndTimeToCart({
      date: dateAndTime.date,
      time: dateAndTime.time,
      restaurantId,
    })
  }, [dateAndTime])

  const getDate = (date) => {
    setDateAndTime((prev) => ({
      ...prev,
      date,
    }))
  }
  const getTime = (time) => {
    setDateAndTime((prev) => ({
      ...prev,
      time,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Ionicons name="time-outline" style={styles.icon} />
          <Text style={styles.headerText}>Выберите дату и время</Text>
        </View>
        <View style={styles.selectContainer}>
          <View style={styles.selectItem}>
            <Text style={styles.selectLabel}>Дата</Text>
            <SelectDate getDate={getDate} />
          </View>
          <View style={styles.selectItem}>
            <Text style={styles.selectLabel}>Время</Text>
            <SelectTime getTime={getTime} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    paddingVertical: 5,
		paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#62ADFC",
		gap: 5,
  },
  header: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    gap: 5,
  },
  icon: {
    fontSize: 18,
    color: "#f3f3f3",
  },
  headerText: {
		fontSize: 14,
    color: "#f3f3f3",
  },

  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
		gap: 10,
  },
  selectItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectLabel: {
    fontSize: 14,
		color: "#f3f3f3",
  },
})

export default ChooseTime
