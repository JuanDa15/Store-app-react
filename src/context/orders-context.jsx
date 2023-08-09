import { createContext, useState } from "react";
import { getTotalPrice } from "../utils/products-helper";

export const OrdersContext = createContext()


export function OrdersContextProvider({ children }) {

  const [orders, setOrders] = useState([]);

  const addOrder = (products) => {
    const newOrder = {
      id: crypto.randomUUID(),
      created: new Date(),
      products: products,
      total: getTotalPrice(products),
      totalProducts: products.length
    }
    const ordersCopy = structuredClone(orders);
    setOrders([...ordersCopy, newOrder])
  }

  const getOrder = (id) => {
    return orders.find(order => order.id === id)
  }

  return (
    <OrdersContext.Provider value={{
      orders,
      addOrder,
      getOrder
    }}>
      {children}
    </OrdersContext.Provider>
  )
}