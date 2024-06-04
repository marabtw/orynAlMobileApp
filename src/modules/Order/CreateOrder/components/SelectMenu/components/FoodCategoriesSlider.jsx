import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"

const FoodCategoriesSlider = ({ categories, getCategory }) => {
  const getImageByCategory = () => {
    return ""
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={{
          padding: 5,
          height: 150,
          aspectRatio: 1,
          borderWidth: 1,
          borderColor: "#c4c4c4",
          borderRadius: 20,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 12,
          marginHorizontal: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => getCategory("")}
      >
        <View
          style={{
            width: "50%",
            aspectRatio: 1,
            borderRadius: 999,
            overflow: "hidden",
            backgroundColor: getImageByCategory("Все")
              ? "transparent"
              : "#6AA7FC",
          }}
        >
          <Image
            source={{ uri: getImageByCategory("Все") }}
            style={{ width: "100%", aspectRatio: 1 }}
            resizeMode="cover"
          />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "800", lineHeight: 24 }}>
          Все
        </Text>
      </TouchableOpacity>
      {categories?.map((category) => (
        <TouchableOpacity
          key={category}
          style={{
            padding: 5,
            height: 150,
            aspectRatio: 1,
            borderWidth: 1,
            borderColor: "#c4c4c4",
            borderRadius: 20,
            shadowColor: "rgba(0,0,0,.2)",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 1,
            shadowRadius: 12,
            marginHorizontal: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => getCategory(category)}
        >
          <View
            style={{
              width: "50%",
              aspectRatio: 1,
              borderRadius: 999,
              overflow: "hidden",
              backgroundColor: getImageByCategory(category)
                ? "transparent"
                : "#6AA7FC",
            }}
          >
            <Image
              source={{ uri: getImageByCategory(category) }}
              style={{ width: "100%", aspectRatio: 1 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ fontSize: 16, fontWeight: "800", lineHeight: 24 }}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default FoodCategoriesSlider
