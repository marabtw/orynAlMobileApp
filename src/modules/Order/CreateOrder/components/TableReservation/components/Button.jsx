import { View, TouchableOpacity, Text, Pressable } from "react-native"

const Button = ({
  text = "button",
  onPress,
  styleObject,
  textColor = "white",
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
        },
        styleObject,
      ]}
      onClick={onPress}
    >
      {({ pressed }) => (
        <Text
          style={{
            color: pressed ? "#d3d3d3" : textColor ? textColor : "#d3d3d3",
          }}
        >
          {text}
        </Text>
      )}
    </Pressable>
  )
}

export default Button
