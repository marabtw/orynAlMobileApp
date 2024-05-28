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
          paddingVertical: 8,
        }}
        inputContainerStyle={{
          backgroundColor: "#ebebeb",
          borderRadius: 8,
          paddingVertical: 0,
          height: 40,
        }}
        inputStyle={{ fontSize: 16 }}
        placeholder="Поиск Ресторана"
        onChangeText={updateSearch}
        value={search}
      />
      {search && (
        <View style={styles.hintContainer}>
          <ScrollView style={styles.hintElementsContainer}>
            <TouchableOpacity style={styles.hintElement} activeOpacity={0.8}>
              <Text style={styles.hintText}>{search}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    position: "relative",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    zIndex: 99,
  },
  hintContainer: {
    position: "absolute",
    width: "100%",
    top: "100%",
    maxHeight: "400%",
    paddingVertical: 5,
  },
  hintElementsContainer: {
    borderRadius: 8,
    margin: "auto",
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#bebebe",
  },
  hintElement: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "white",
  },
  hintText: {
    // color: "white"
  },
})

export default Search
