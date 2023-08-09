import { createContext, useState } from 'react'

export const CheckoutContext = createContext()

export function CheckoutContextProvider({ children }) {
  const [isCheckoutWidgetOpen, setIsCheckoutWidgetOpen] = useState(false)

  const toggleCheckoutWidget = () => {
    setIsCheckoutWidgetOpen(!isCheckoutWidgetOpen)
  }

  return (
    <CheckoutContext.Provider value={{
      toggleCheckoutWidget,
      isCheckoutWidgetOpen
    }}>
      {children}
    </CheckoutContext.Provider>
  )
}