import React, { useState } from "react"
import { SearchBar } from "@rneui/themed"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"

const Search = () => {
  const [search, setSearch] = useState("")

  const updateSearch = (search) => {
    setSearch(search)
  }

  return (
    <View style={styles.view}>
      <SearchBar
        round={2}
        containerStyle={{
          backgroundColor: "transparent",
          borderColor: "transparent",
          position: "relative",
          padding: 0,
        }}
        inputContainerStyle={{ backgroundColor: "white" }}
        inputStyle={{ fontSize: 16 }}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      {search && (
        <View style={styles.hintContainer}>
          <ScrollView style={styles.hintElementsContainer}>
            <TouchableOpacity style={styles.hintElement}>
              <Text>{search}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  )
}

const styles =StyleSheet.create({
  view: {
    position: "relative",
    marginTop: 4,
    justifyContent: "center",
		paddingHorizontal: 10,
  },
  hintContainer: {
    position: "absolute",
    width: "100%",
    top: "100%",
    left: 0,
    right: 0,
    justifyContent: "center",
    maxHeight: "400%",
    overflow: "hidder",
    marginTop: 5,
  },
  hintElementsContainer: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: "auto",
    width: "90%",
    backgroundColor: "white",
  },
  hintElement: {
    width: "100%",
		paddingVertical: 5,
  },
})

export default Search
