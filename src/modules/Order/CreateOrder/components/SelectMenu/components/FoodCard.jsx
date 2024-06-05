import { View, Text, Image, TouchableOpacity } from "react-native"

import { Ionicons } from "@ui/icons/icons"

const FoodCard = ({ foodData = {}, getFoodForCart, selectedFoodsId = [] }) => {
  return (
    <View
      style={{
        position: "relative",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "40%",
        // height: 200,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#c4c4c4",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      <View
        style={{
          position: "relative",
          width: "50%",
          aspectRatio: 1,
          borderRadius: 999,
          overflow: "hidden",
          backgroundColor: "#F5F7F9",
        }}
      >
        {foodData?.photo && (
          <Image
            source={{ uri: foodData.photo.route }}
            style={{ aspectRatio: 1 }}
            resizeMode="cover"
          />
        )}
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          before: {
            width: 10,
            aspectRatio: 1,
            position: "absolute",
            right: 0,
            top: 0,
            borderRadius: 999,
            backgroundColor: foodData.available ? "#c4c4c4" : "#b91c1c",
          },
        }}
      />
      <View
        style={{
          flexDirection: "column",
          gap: 5,
          width: "100%",
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "800",
            lineHeight: 20,
          }}
        >
          {foodData.name}
        </Text>
        <View
          style={{
            width: "70%",
            height: 2,
            backgroundColor: "#000000",
          }}
        />
        <Text style={{ fontSize: 12, lineHeight: 16, overflow: "hidden" }}>
          {foodData.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {selectedFoodsId.includes(foodData.id) ? (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              aspectRatio: 1,
              backgroundColor: "#b91c1c",
              borderRadius: 999,
              transform: [{ scale: 1.05 }],
            }}
            onPress={() => {
              getFoodForCart({
                id: foodData.id,
              })
            }}
          >
            <Ionicons name="trash-outline" size={20} color={"white"} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              aspectRatio: 1,
              backgroundColor: "#6AA7FC",
              borderRadius: 999,
              transform: [{ scale: 1.05 }],
            }}
            onPress={() => {
              getFoodForCart({
                id: foodData.id,
                amount: 1,
                photo: foodData.photo ? foodData.photo : { route: "" },
                name: foodData.name,
                price: foodData.price,
                itemTotalPrice: foodData.price,
              })
            }}
          >
            <Ionicons name="add-circle-outline" size={20} color={"white"} />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 16, fontWeight: "600", lineHeight: 24 }}>
          {foodData.price} ₸
        </Text>
      </View>
    </View>
  )
}

export default FoodCard
