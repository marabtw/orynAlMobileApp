import { View, Text, StyleSheet, ActivityIndicator } from "react-native"

const Loading = () => {
	console.log("loading")
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#888" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(250, 250, 250, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
    fontSize: 20,
    color: "#888",
  },
})

export default Loading
