import { useContext } from "react"
import { UIContext } from "@context/UIContext"

export const useLoading = () => {
  const { setIsLoading } = useContext(UIContext)

  const setLoading = (isLoading) => {
    setIsLoading(isLoading)
  }

  return setLoading
}
