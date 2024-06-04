import React, { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native"

import { NAVIGATIONS } from "@navigation/Navigation.config"

import SeacrhInput from "./components/SearchInput"
import { Ionicons } from "@ui/icons/icons"
import { HeaderBackButton } from "@ui/button/header/BackButton"

const Search = () => {
  const navigation = useNavigation()

  const [searchRestaurants, setSearchRestaurants] = useState([])

  const getRestaurants = (restaurants) => {
    console.log(restaurants)
    setSearchRestaurants(restaurants)
  }

  return (
    <View style={styles.view}>
      <View style={styles.header}>
        <HeaderBackButton to={NAVIGATIONS.Main.HomeStack.home} />
        <SeacrhInput getRestaurants={getRestaurants} />
      </View>
      {searchRestaurants?.length > 0 && (
        <ScrollView style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          {searchRestaurants.map((el, index) => (
            <TouchableOpacity
              style={{
                marginTop: index > 0 ? 10 : 0,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.3)",
                borderRadius: 12,
                padding: 10,
              }}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate(NAVIGATIONS.Main.OrdersStack.createOrder, {
                  restaurant: {
                    id: el.id,
                    icon: el.icon.route,
                    name: el.name,
                  },
                })
              }}
            >
              <Image
                style={{ width: 40, aspectRatio: 1, borderRadius: 30 }}
                source={{
                  uri: el.icon.route,
                }}
              />
              <Text style={{ marginLeft: 10 }}>{el.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    position: "relative",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "relative",
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    zIndex: 99,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
})

export default Search
