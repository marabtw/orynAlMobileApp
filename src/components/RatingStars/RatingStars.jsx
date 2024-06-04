import { View } from "react-native"

import { Ionicons } from "@ui/icons/icons"

const RatingStard = ({ rate, size = 20 }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    const iconName =
      i <= rate ? "star" : i - rate < 1 ? "star-half-outline" : "star-outline"
    stars.push(<Ionicons key={i} name={iconName} size={size} color="gold" />)
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>
}

export default RatingStard
