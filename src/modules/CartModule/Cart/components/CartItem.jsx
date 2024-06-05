import { View, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@ui/icons/icons"

const CartItem = ({ data, increase, decrease }) => {
  return (
    <View
      style={{
        borderRadius: 10,
        backgroundColor: "#fafafa",
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      }}
    >
      <Image
        source={{ uri: data?.photo?.route }}
        style={{
          height: 50,
          aspectRatio: 1,
          backgroundColor: "#ddd",
          borderRadius: 100,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 700 }}>{data?.name}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#4983FB",
              marginTop: 2,
            }}
          >
            {data?.itemTotalPrice} ₸
          </Text>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "",
              gap: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 30,
                borderWidth: 1,
                aspectRatio: 1,
                overflow: "hidden",
                padding: 2,
              }}
              onPress={() => {
                increase(data.id)
              }}
            >
              <Ionicons name="add" size={16} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>
              {data.amount}
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 30,
                borderWidth: 1,
                aspectRatio: 1,
                overflow: "hidden",
                padding: 2,
                borderColor: data.amount === 1 ? "#b3b3b3" : "black",
              }}
              onPress={() => {
                decrease(data.id)
              }}
            >
              {data.amount === 1 ? (
                <Ionicons name="trash" size={16} color={"#b3b3b3"} />
              ) : (
                <Ionicons name="remove" size={16} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem
