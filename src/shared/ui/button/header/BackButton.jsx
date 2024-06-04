import { TouchableOpacity } from "react-native"
import { Ionicons } from "@ui/icons/icons"
import { useNavigation } from "@react-navigation/native"

const HeaderBackButton = ({ to, isNeedPaddingLeft }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(to)}
      style={{marginLeft: isNeedPaddingLeft ? 15 : 0}}
    >
      <Ionicons name="chevron-back" size={24} color="tomato" />
    </TouchableOpacity>
  )
}

export { HeaderBackButton }
