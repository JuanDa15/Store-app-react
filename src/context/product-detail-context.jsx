import { createContext, useState } from "react";

export const ProductDetailContext = createContext()

export function ProductDetailProvider({children}) {
  const [isOpen, setIsOpen] = useState(false)
  const [productDetail, setProductDetail] = useState(null)

  const toggleProductDetail = () => {
    const newState = !isOpen;
    (!newState) && setProductDetail(null);
    setIsOpen(newState)
  }

  const selectProduct = (product) => {
    setProductDetail(product)
  }

  return (
    <ProductDetailContext.Provider value={{
      isOpen,
      toggleProductDetail,
      selectProduct,
      productDetail
    }}>
      {children}
    </ProductDetailContext.Provider>
  )
}