import { View, Text, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@ui/icons/icons"
const CartItem = () => {
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
        // borderWidth: 1,
        // borderColor: "rgba(0,0,0,0.1)",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      }}
    >
      <Image
        style={{
          width: "20%",
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
        <Text style={{ fontSize: 16, fontWeight: 700 }}>Фирменный салат</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            // alignItems: "center",
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
            3000 ₸
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
            >
              <Ionicons name="add" size={16} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>0</Text>
            <TouchableOpacity
              style={{
                borderRadius: 30,
                borderWidth: 1,
                aspectRatio: 1,
                overflow: "hidden",
                padding: 2,
              }}
            >
              {/* <Ionicons name="trash-outline" size={20} /> */}
              <Ionicons name="remove" size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem
