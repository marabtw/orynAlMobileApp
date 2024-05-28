import { useState } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

const FormCheckbox = ({ text }) => {
  const [isSelected, setIsSelection] = useState(false)

  return (
    <BouncyCheckbox
      fillColor="#05FF00"
      isChecked={isSelected}
      text={text ? text : "no data"}
			iconStyle={{borderRadius: 8}}
      innerIconStyle={{ borderWidth: 2, borderRadius: 8, borderColor: isSelected ? "#05FF00" : "#EBEBEB" }}
			textStyle={{textDecorationLine: "none", right: 10}}
			bounceEffectIn={.8}
			bounceEffectOut={1}
			size={20}
			onPress={() => setIsSelection(!isSelected)}
    />
  )
}

export default FormCheckbox
