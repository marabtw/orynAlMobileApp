import { useContext } from "react"
import { CartContext } from "@context/CartContext" // Adjust the path as needed

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider")
  }
  return context
}

export default useCart
