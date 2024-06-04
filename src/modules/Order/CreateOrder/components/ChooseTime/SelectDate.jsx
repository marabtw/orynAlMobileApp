import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native"
import DateTimePicker from "@react-native-community/datetimepicker"

const SelectDate = ({ getDate = () => {} }) => {
  const [selectedDate, setSelectedDate] = useState("")
  const [showPicker, setShowPicker] = useState(false)
  const today = new Date()

  const handleDateChange = (event, date) => {
    setShowPicker(false)
    if (date) {
      const isoDate = date.toISOString()
      if (!isNaN(Date.parse(isoDate))) {
        const formattedDate = isoDate.split("T")[0]
        setSelectedDate(formattedDate)
        getDate(formattedDate)
      }
    } else {
      setSelectedDate("")
      getDate(null)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "дд - мм"
    const [year, month, day] = dateString.split("-")
    return `${day} - ${month}`
  }

  return (
    <TouchableOpacity
      onPress={() => setShowPicker(true)}
      style={styles.container}
    >
      <Text style={styles.text}>{formatDate(selectedDate)}</Text>
      {showPicker && (
        <DateTimePicker
          value={selectedDate ? new Date(selectedDate) : today}
          mode="date"
          display="default"
          minimumDate={today}
          onChange={handleDateChange}
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
		height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#f3f3f3",
    borderRadius: 10,
    cursor: "pointer",
    ...(Platform.OS === "web" && {
      cursor: "pointer",
    }),
  },
  text: {
    fontSize: 14,
    color: "#f3f3f3",
    fontWeight: "400",
    ...(Platform.OS === "web" && {
      pointerEvents: "none",
    }),
  },
})

export default SelectDate
