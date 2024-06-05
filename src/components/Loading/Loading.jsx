import { View, Text, StyleSheet, ActivityIndicator } from "react-native"

const Loading = () => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(250, 250, 250, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
  },
})

export default Loading
