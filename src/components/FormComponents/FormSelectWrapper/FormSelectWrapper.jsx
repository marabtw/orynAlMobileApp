import { View, Text } from "react-native"
import FormSelect from "../../../ui/Select/FormSelect"

const FormSelectWrapper = ({
  placeholder,
  label = "Label",
  search,
  options,
	width,
}) => {
  return (
    <View style={{flexDirection: "column", gap: 3, flexGrow: width ? 0 : 1, width: width ? width : ""}}>
      <Text style={{color: "#202020"}}>{label} ▼</Text>
      <FormSelect placeholder={placeholder} label={label} search={search} options={options}/>
    </View>
  )
}

export default FormSelectWrapper
