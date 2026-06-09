import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto) {
    setCarrito(prev => {
      const existe = prev.find(i => i.id === producto.id && i.tamano === producto.tamano)
      if (existe) {
        return prev.map(i => i.id === producto.id && i.tamano === producto.tamano
          ? { ...i, cantidad: i.cantidad + producto.cantidad }
          : i
        )
      }
      return [...prev, producto]
    })
  }

  function eliminarDelCarrito(id, tamano) {
    setCarrito(prev => prev.filter(i => !(i.id === id && i.tamano === tamano)))
  }

  function actualizarCantidad(id, tamano, cantidad) {
    if (cantidad < 1) return
    setCarrito(prev => prev.map(i => i.id === id && i.tamano === tamano ? { ...i, cantidad } : i))
  }

  function vaciarCarrito() {
    setCarrito([])
  }

  const total = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0)
  const totalItems = carrito.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito, total, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
