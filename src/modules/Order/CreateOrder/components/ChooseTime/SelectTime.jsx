import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native"

import ModalDropdown from "react-native-modal-dropdown"

const generateTimeOptions = () => {
  const options = []
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 15) {
      const hour = i.toString().padStart(2, "0")
      const minute = j.toString().padStart(2, "0")
      options.push({ value: `${hour}:${minute}`, label: `${hour}:${minute}` })
    }
  }
  return options
}

const SelectTime = ({ getTime = () => {} }) => {
  const options = generateTimeOptions()

  const handleSelect = (option) => {
    getTime(option.value)
  }

  return (
    <View style={styles.container}>
      <ModalDropdown
        options={options.map((option) => option.label)}
        onSelect={(index, value) => handleSelect(value)}
        defaultValue="Select time"
        textStyle={styles.input}
        dropdownStyle={styles.optionsContainer}
        dropdownTextStyle={styles.optionText}
        dropdownTextHighlightStyle={{ color: "red" }}
        dropdownButtonStyle={{ backgroundColor: "transparent" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#f3f3f3",
    position: "relative",
  },
  input: {
    position: "relative",
    width: "100%",
    textAlign: "center",
    color: "#fafafa",
    cursor: "pointer",
    outlineStyle: "none",
  },
  optionsContainer: {
    width: 100,
		maxWidth: "100%",
    maxHeight: 200,
    backgroundColor: "#fafafa",
    borderColor: "#fafafa",
    borderRadius: 10,
    zIndex: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  optionText: {
    padding: 10,
    color: "#000000",
  },
})

export default SelectTime
