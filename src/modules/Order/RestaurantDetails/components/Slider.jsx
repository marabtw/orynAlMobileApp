import { FlatList, Image, StyleSheet, View } from "react-native"

const Slider = ({ images = [] }) => {
  return (
    <FlatList
      data={images}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
      renderItem={({ item }) => (
        <View style={styles.slide}>
          <Image
            source={{ uri: item.route }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  slide: {
    width: 200,
    aspectRatio: "14/9",
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default Slider
