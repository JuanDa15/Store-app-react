import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { ProductDetailContext } from "../../context/product-detail-context"
import { CheckoutContext } from "../../context/checkout-context"
import { OutlinePlusIcon } from "../../utils/icons"
export default function Card({
  product
}) {

  const { addToCart } = useContext(CartContext)
  const { selectProduct, toggleProductDetail } = useContext(ProductDetailContext)
  const { toggleCheckoutWidget, isCheckoutWidgetOpen} = useContext(CheckoutContext)

  const handleClick = (product) => {
    selectProduct({...product});
    (isCheckoutWidgetOpen) && toggleCheckoutWidget();
    toggleProductDetail()
  }

  const addToCartHandler = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(product)
  }

  return (
    <article className="w-56 aspect-square rounded-xl overflow-hidden bg-zinc-700 mx-auto" onClick={ () => handleClick(product)}>
      <figure className="W-56 h-5/6 relative">
        <img className="w-full h-full object-cover" src={product.images[0]} alt="" />
        <span className="absolute bottom-2 left-2 bg-slate-500 px-3 rounded-md">{product.category.name}</span>
        <button className="absolute top-2 right-2 border-[1px] border-white rounded-full p-1 text-white bg-slate-700 hover:bg-slate-900 transition-all" type="button" onClick={ (e) => addToCartHandler(e,product)}>
          <OutlinePlusIcon />
        </button>
      </figure>
      <footer className="flex flex-row justify-between items-center h-1/6 px-2">
        <p className="font-semibold text-ellipsis whitespace-nowrap w-[150px] overflow-hidden">{product.title}</p><span className="font-bold">${product.price}</span>
      </footer>
    </article>
  )
}