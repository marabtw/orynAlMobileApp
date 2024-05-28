import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

import { formatPhoneNumber, formatNumber } from "@utils/index"

import { Ionicons } from "@ui/icons/icons"

const AuthFormInput = ({
  label = "no label",
  placeholder = "no placeholder",
  type = "text",
  required = false,
  onChange = () => {
    console.log("function not found")
  },
}) => {
  const [inputValue, setInputValue] = useState("")
  const [inputType, setInputType] = useState(type)

  useEffect(() => {
    setInputType(type || "text")
  }, [type])

  const handleInputChange = (value) => {
    let formattedValue = value

    if (type === "tel") {
      formattedValue = formatPhoneNumber(value)
    } else if (type === "number") {
      formattedValue = formatNumber(value)
    }

    if (formattedValue === inputValue) return
    setInputValue(formattedValue)
    onChange(formattedValue.trim())
  }

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"))
  }

  const getKeyboardType = (type) => {
    switch (type) {
      case "number":
        return "numeric"
      case "tel":
        return "numeric"
      case "email":
        return "email-address"
      default:
        return "default"
    }
  }

  return (
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          required={required}
          secureTextEntry={inputType === "password"}
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType={getKeyboardType(type)}
        />
        {type === "password" && (
          <TouchableOpacity
            style={styles.inputIconContainer}
            onPress={(e) => {
              e.preventDefault()
              togglePasswordVisibility()
            }}
          >
            {inputType === "password" ? (
              <Ionicons name="eye" style={{ fontSize: 25 }} />
            ) : (
              <Ionicons name="eye-off" style={{ fontSize: 25 }} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  labelContainer: {
    width: "100%",
    flexDirection: "column",
  },
  labelText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#989898",
  },
  inputContainer: {
    position: "relative",
  },
  inputIconContainer: {
    position: "absolute",
    maxWidth: "max-content",
    right: "3%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: "#447dfb",
    borderRadius: 8,
  },
})

export default AuthFormInput
