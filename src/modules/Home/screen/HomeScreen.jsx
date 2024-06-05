import Layout from "@layout/Layout"
import HeroSection from "../HeroSection/HeroSection"
import Restaurants from "../Restaurants/Restaurants"
import { ScrollView } from "react-native"

import Loading from "@components/Loading/Loading"

const HomeScreen = () => {
  return (
    <Layout>
      <ScrollView>
        <HeroSection />
        <Restaurants />
      </ScrollView>
    </Layout>
  )
}

export default HomeScreen
