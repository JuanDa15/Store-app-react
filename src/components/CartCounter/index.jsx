import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { CheckoutContext } from "../../context/checkout-context"
import { ProductDetailContext } from "../../context/product-detail-context"
import { CartBagIcon } from "../../utils/icons"

export default function CartCounter() {
  const { cartQuantity } = useContext(CartContext)
  const { toggleCheckoutWidget } = useContext(CheckoutContext)
  const { isOpen, toggleProductDetail,} = useContext(ProductDetailContext)

  const handleClick = (event) => {
    event.preventDefault();
    (isOpen) && toggleProductDetail();
    toggleCheckoutWidget();
  }

  return (
    <div className="relative" onClick={ (e) =>  handleClick(e) }>
     <CartBagIcon />
      <span className="absolute top-[-10px] right-[-5px] bg-black rounded-full px-1">{cartQuantity}</span>
    </div>
  )
}