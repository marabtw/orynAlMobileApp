import Layout from "@layout/Layout"
import HeroSection from "../HeroSection/HeroSection"
import Restaurants from "../Restaurants/Restaurants"
import { ScrollView } from "react-native"

import ToastManager from "toastify-react-native"

const HomeScreen = () => {
  return (
    <Layout>
      <ToastManager
        duration={2000}
        textStyle={{ fontSize: 14 }}
        height={40}
        positionValue={10}
      />
      <ScrollView>
        <HeroSection />
        <Restaurants />
      </ScrollView>
    </Layout>
  )
}

export default HomeScreen
