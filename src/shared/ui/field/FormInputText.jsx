import { StyleSheet, TextInput } from "react-native"

const FormInputText = ({
  placeholder = "placeholder",
  keyboardType = "default",
  inputMode = "text",
  maxLength,
  multiline = false,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      style={styles.inputStyle}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      keyboardType={keyboardType}
      inputMode={inputMode}
      maxLength={maxLength}
      multiline={multiline}
    />
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "stretch",
  },
})

export default FormInputText
