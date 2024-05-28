import { TouchableOpacity } from "react-native"
import { Ionicons } from "@ui/icons/icons"
import { useNavigation } from "@react-navigation/native"

const HeaderBackButton = ({ to }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(to)}
      style={{ paddingLeft: 15 }}
    >
      <Ionicons name="chevron-back" size={24} color="tomato" />
    </TouchableOpacity>
  )
}

export { HeaderBackButton }
