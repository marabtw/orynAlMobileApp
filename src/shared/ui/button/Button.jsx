import { View, TouchableOpacity, Text, Pressable } from "react-native"

const Button = ({
  text = "button",
  uppercase = false,
  spacingClass,
  backgroundColor,
	textColor,
  onPress,
	styleObject,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#447CFB" : backgroundColor ? "backgroundColor" : "#61ACFC",
          borderColor: pressed ? "#447CFB" : backgroundColor ? backgroundColor : "#61ACFC",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          width: "50%",
          flexDirection: "row",
          justifyContent: "center",
					alignSelf: "center"
        },
				styleObject,
      ]}
      onClick={onPress}
    >
      {({ pressed }) => (
        <Text
          style={{
            color: pressed ? "white" : textColor ? textColor : "white",
            textTransform: uppercase ? "uppercase" : "none",
          }}
        >
          {text}
        </Text>
      )}
    </Pressable>
  )
}

export default Button
