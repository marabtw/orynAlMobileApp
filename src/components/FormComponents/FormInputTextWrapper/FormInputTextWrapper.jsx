import { View, Text } from "react-native"
import FormInputText from "@ui/field/FormInputText"

const FormInputTextWrapper = ({
  label = "...",
  maxlength,
  placeholder,
  keyboardType = "default",
  inputMode = "text",
  multiline = false,
  secureTextEntry = false,
	width,
}) => {
  return (
    <View style={{ flexGrow: width ? 0 : 1, flexDirection: "column", gap: 3, alignItems: "stretch", width: width ? width : ""}}>
      <Text>{label}</Text>
      <FormInputText
        placeholder={placeholder}
        inputMode={inputMode}
        maxlength={maxlength}
        keyboardType={keyboardType}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default FormInputTextWrapper
