import { createContext, useMemo, useState } from "react";
import { getTotalPrice } from "../utils/products-helper";

export const CartContext = createContext({})

export function CartContextProvider({children}){

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exist = cart.findIndex(item => item.id === product.id);
    const cartCopy = [...cart]
    if (exist === -1) {
      cartCopy.push({
        ...product,
        quantity: 1,
        total: product.price * 1
      })
      setCart(cartCopy)
    } else {
      cartCopy[exist].quantity += 1;
      cartCopy[exist].total = product.price * cartCopy[exist].quantity;
      setCart(cartCopy)
    }
  }

  const decreaseCart = (id) => {
    const position = cart.findIndex(item => item.id === id);
    const cartCopy = [...cart];

    (cartCopy[position].quantity === 1) 
      ? cartCopy.splice(position, 1)
      : cartCopy[position].quantity -= 1;
    cartCopy[position].total = cartCopy[position].quantity * cartCopy[position].price;
    setCart(cartCopy);
  }

  const incrementCart = (id) => {
    const position = cart.findIndex(item => item.id === id);
    const cartCopy = [...cart];
    cartCopy[position].quantity += 1;
    cartCopy[position].total = cartCopy[position].quantity * cartCopy[position].price;
    setCart(cartCopy);
  }

  const deleteFromCart = (id) => {
    const cartCopy = cart.filter(item => item.id !== id);
    setCart(cartCopy);
  }

  const cartQuantity = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
  }, [cart]);

  const totalPrice = useMemo(() => {
    return getTotalPrice(cart)
  }, [cart])

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      addToCart,
      cartQuantity,
      cart,
      incrementCart,
      decreaseCart,
      deleteFromCart,
      totalPrice,
      clearCart
    }}>
      { children }
    </CartContext.Provider>
  )
}