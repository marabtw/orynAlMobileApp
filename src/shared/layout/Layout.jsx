import { useRoute } from "@react-navigation/native"
import { StatusBar, View, SafeAreaView, ScrollView } from "react-native"

import { NAVIGATIONS } from "@tabNavigation/Navigation.config"

const Layout = ({ children }) => {
  const route = useRoute()
  const isProfile = route.name === NAVIGATIONS.Profile
  console.log(route)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={isProfile ? "#0c1b32" : "white"}
        barStyle={isProfile ? "light-content" : "dark-content"}
      />
      <View style={{ flex: 1, paddingBottom: 0 }}>{children}</View>
    </SafeAreaView>
  )
}

export default Layout
