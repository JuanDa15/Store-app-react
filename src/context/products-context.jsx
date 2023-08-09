import { createContext, useMemo, useState, useEffect } from "react";
import useProducts from "../Hooks/useProducts";

const FILTERS = {
  all: ''
}
const FILTER_CONDITIONS = {
  'category': (product, search, category) => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && product.category.name.toLocaleLowerCase() === category.toLocaleLowerCase(),
  '': (product, search) => product.title.toLowerCase().includes(search.toLowerCase())
}
export const ProductsContext = createContext()

export default function ProductsContextProvider({ children }) {
  const { products, loading, error } = useProducts()
  
  const [search, setSearch] = useState('')
  const [categorySearch, setCategorySearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const filterProducts = useMemo(() => (products, search, category) => {
    if (category === FILTERS.all) {
      return products?.filter((product) => FILTER_CONDITIONS[''](product, search))
    }
    return products?.filter((product) => FILTER_CONDITIONS['category'](product, search, category))
  }, [products, search, categorySearch])

  useEffect(() => {
    const filtered = filterProducts(products, search, categorySearch)
    setFilteredProducts(filtered)
  }, [products, search, categorySearch])
  
  return (
    <ProductsContext.Provider value={{
      products: filteredProducts,
      loading,
      error,
      search,
      setSearch,
      setCategorySearch,
      categorySearch
    }}>
      {children}
    </ProductsContext.Provider>
  )
}