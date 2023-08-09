import { useContext } from "react";
import { CheckoutContext } from "../../context/checkout-context";
import { CartContext } from "../../context/cart-context";
import CheckoutItemsList from "../CheckoutItemsList";
import CheckoutItemCard from "../CheckoutItemCard";
import { OrdersContext } from "../../context/orders-context";
import { Link } from "react-router-dom";
import { CartIcon, XIcon } from "../../utils/icons";

export function CheckoutWidget() {
  const { toggleCheckoutWidget, isCheckoutWidgetOpen } = useContext(CheckoutContext);
  const { cart, totalPrice, clearCart } = useContext(CartContext)
  const { addOrder } = useContext(OrdersContext)

  const handleClick = () => {
    toggleCheckoutWidget();
  }

  const handleCheckout = () => {
    addOrder(cart);
    toggleCheckoutWidget();
    clearCart();
  }

  return (
    <aside className={`${isCheckoutWidgetOpen ? 'block animate-fade-left animate-duration-300' : 'hidden'} w-[360px] fixed right-0 min-h-[calc(100vh-60px)] bg-gray-600 z-30 rounded-l-md p-4`}>
      <div className="flex flex-row justify-between items-center">
        <b>Checkout</b>
        <button type="button" onClick={handleClick}>
          <XIcon />
        </button>
      </div>
      <div className="mt-4 max-h-[700px] overflow-y-auto">
        <CheckoutItemsList>
        {
          cart.map(product => (
            <CheckoutItemCard
              key={product.id} 
              img={product.images[0]} 
              name={product.title} 
              price={product.total}
              quantity={product.quantity}
              id={product.id}
            />
          ))
        }
        </CheckoutItemsList>
      </div>
      <div className="absolute bottom-4 left-0 w-full p-4 bg-gray-800 items-center flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between w-full">
          <p>Total:</p> <span className="text-3xl"><b>$ {totalPrice}</b></span>
        </div>
        <Link to="/order/last">
          <button 
            type="button" 
            className="w-full bg-violet-900 flex flex-row items-center justify-center p-2 rounded-md gap-2 hover:bg-violet-700 transition-all"
            onClick={ handleCheckout }
          >
            Checkout
            <CartIcon />
          </button>
        </Link>
      </div>
    </aside>
  );
}