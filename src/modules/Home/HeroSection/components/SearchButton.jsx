import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import { SearchBar } from "@rneui/themed"

const SearchButton = () => {
  const navigation = useNavigation()

  const toggleSearch = () => {
    navigation.navigate(NAVIGATIONS.Main.HomeStack.homeSearch)
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
				onPress={toggleSearch}
      />
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
})

export default SearchButton
