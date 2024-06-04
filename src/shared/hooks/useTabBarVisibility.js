import { useContext } from "react"
import { TabBarVisibilityContext } from "@context/TabBarContext"

export const useTabBarVisibility = () => useContext(TabBarVisibilityContext)
