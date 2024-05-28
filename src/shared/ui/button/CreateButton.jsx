import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, StyleSheet } from "react-native"

const CreateButton = ({ to = "/", marginRight = 0 }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={[styles.button, { marginRight }]}
      activeOpacity={0.75}
      onPress={() => {
        navigation.navigate(to)
      }}
    >
      <Text style={styles.text}>Создать</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6aa7fc',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 17.5,
    fontWeight: '600',
    color: '#fff',
  },
})

export default CreateButton
