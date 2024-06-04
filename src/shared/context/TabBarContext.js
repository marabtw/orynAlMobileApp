import { createContext, useState } from "react"

export const TabBarVisibilityContext = createContext()

export const TabBarVisibilityProvider = ({ children }) => {
  const [visible, setVisible] = useState(true)

  const hideTabBar = () => setVisible(false)
  const showTabBar = () => setVisible(true)

  return (
    <TabBarVisibilityContext.Provider
      value={{ visible, hideTabBar, showTabBar }}
    >
      {children}
    </TabBarVisibilityContext.Provider>
  )
}
