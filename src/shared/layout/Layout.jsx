import { useRoute } from "@react-navigation/native"
import { StatusBar, View, SafeAreaView } from "react-native"

import { NAVIGATIONS } from "@navigation/Navigation.config"
import { useEffect, useState } from "react"

const Layout = ({ children }) => {
  const route = useRoute()
  const [isProfile, setIsProfile] = useState(
    route.name === NAVIGATIONS.Profile.myProfile
  )

  useEffect(() => {
    setIsProfile(route.name === NAVIGATIONS.Profile.myProfile)
  }, [route])

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
