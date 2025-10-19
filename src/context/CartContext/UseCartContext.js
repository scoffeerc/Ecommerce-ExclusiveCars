import { useContext } from "react"
import { CartContext } from "./CartContext"

export const UseCartContext = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("UseCartContext debe usarse dentro de un CartProvider")
  }
  return context
}