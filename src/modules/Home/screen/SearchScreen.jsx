import { useEffect } from "react"
import { ScrollView } from "react-native"

import Layout from "@layout/Layout"
import Search from "../Search/Search"
import { useTabBarVisibility } from "@hooks/useTabBarVisibility"

import ToastManager from "toastify-react-native"

const SearchScreen = () => {
  const { hideTabBar, showTabBar } = useTabBarVisibility()

  useEffect(() => {
    hideTabBar()
    return () => showTabBar()
  }, [])

  return (
    <Layout>
      <ScrollView>
        <Search />
      </ScrollView>
    </Layout>
  )
}

export default SearchScreen
