import { useContext, useMemo } from "react";
import { ProductsContext } from "../../context/products-context";
import SearchBar from "../../components/SearchBar";
import ProductList from "../../components/ProductList";
import Card from "../../components/Card";
import EmptyList from "../../components/EmptyList";

export default function Home() {
  const { products, search } = useContext(ProductsContext)

  const memoizedComponent = useMemo(() => {
    return (
      <ProductList> 
        { 
          products.map(product => 
            <Card key={product.id} product={product}/>
          ) 
        }
      </ProductList> 
    )
  }, [products])

  return (
    <>
      <h1 className="text-center text-6xl mb-4 font-semibold">
        Products
      </h1>
      <SearchBar />
      <hr className="mb-4" />
      { products.length > 0 ? memoizedComponent : <EmptyList search={search} />}
    </>
  )
}
