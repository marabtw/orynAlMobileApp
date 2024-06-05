import { createContext, useState } from "react"

const UIContext = createContext(null)

const UIContextProvider = ({ children }) => {
  const [openedContextMenuIndex, setOpenedContextMenuIndex] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [recentRestaurantsSliderTrigger, setRecentRestaurantsSliderTrigger] =
    useState(false)

  const contextValue = {
    openedContextMenuIndex,
    setOpenedContextMenuIndex,
    setIsLoading,
    isLoading,
    recentRestaurantsSliderTrigger,
    setRecentRestaurantsSliderTrigger,
  }

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  )
}

export { UIContext, UIContextProvider }
