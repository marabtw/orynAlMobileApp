import { useContext } from "react"
import { UIContext } from "@context/UIContext"

export const useLoading = () => {
  const { setIsLoading, isLoading } = useContext(UIContext)

  const setLoading = (status) => {
    setIsLoading(status)
  }

  return [isLoading, setLoading];
}
