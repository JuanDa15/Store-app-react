import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { MinusIcon, PlusIcon, TrashIcon } from "../../utils/icons"

export default function CheckoutItemCard({ img, name, price, quantity, id, handleActions = true }) {
  const { incrementCart, decreaseCart, deleteFromCart } = useContext(CartContext)
  return (
    <li className="border-[1px] border-gray-700 flex flex-row gap-3 p-2 rounded-md justify-between">
      <div className="flex flex-row gap-2 items-center">
        <picture className="rounded-full">
          <img className="rounded-full" src={img} alt={name} width="48" />
        </picture>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-2 justify-between">
          <span>{name}</span>
          <span><b>${price}</b></span>
        </div>
        {
          handleActions && <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-4 items-center">
              <button className="bg-violet-700 text-white px-2 py-1 rounded-md hover:bg-violet-800" onClick={() => decreaseCart(id)}>
                <MinusIcon />
              </button>
              <span>{quantity}</span>
              <button className="bg-violet-700 text-white px-2 py-1 rounded-md hover:bg-violet-800" onClick={() => incrementCart(id)}>
                <PlusIcon />
              </button>
            </div>
            <button className="bg-gray-700 text-white px-2 py-1 rounded-md" onClick={() => deleteFromCart(id)}>
              <TrashIcon />
            </button>
          </div>
        }
      </div>
    </li>
  )
}