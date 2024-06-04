import { createContext, useState } from "react"

import Loading from "@components/Loading/Loading"

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
    recentRestaurantsSliderTrigger,
    setRecentRestaurantsSliderTrigger,
  }

  return (
    <UIContext.Provider value={contextValue}>
      {isLoading && <Loading />}
      {children}
    </UIContext.Provider>
  )
}

export { UIContext, UIContextProvider }
