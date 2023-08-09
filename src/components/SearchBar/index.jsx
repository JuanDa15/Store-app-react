import { useContext } from "react"
import { ProductsContext } from "../../context/products-context"

export default function SearchBar() {
  const { setSearch, search } = useContext(ProductsContext)

  const changeHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <input 
        type="search" 
        placeholder="Cars..." 
        className="p-2 my-4 rounded-md"
        value={search}
        onChange={changeHandler}
        />
    </div>
  )
}