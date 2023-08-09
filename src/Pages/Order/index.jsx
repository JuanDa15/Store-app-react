import { useContext } from "react"
import { OrdersContext } from "../../context/orders-context"
import CheckoutItemCard from "../../components/CheckoutItemCard"

export default function Order() {
  const { orders, getOrder } = useContext(OrdersContext)

  const isLastOrder = location.pathname.includes('last')
  const id = !isLastOrder ? location.pathname.substring(location.pathname.lastIndexOf('/') + 1) : -1;
  const currentOrder = isLastOrder ? orders.slice(-1).pop() : getOrder(id)

  if (!currentOrder) {
    return (
      <p className="text-center bg-sky-400 border-[1px] border-blue-900 rounded-md p-4 text-blue-900 font-semibold text-2xl">
        No orders yet
      </p>
    )
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mb-2">
        {isLastOrder ? 'Last Order' : 'Order: ' + id}
      </h1>
      <p className="text-center mb-4">
        Created:
        <small className="ml-2">{currentOrder.created.toLocaleString()}</small>
      </p>
      <section className="flex flex-col gap-2">
        {
          currentOrder.products.map((product) => (
            <CheckoutItemCard
              key={product.id}
              img={product.images[0]}
              name={product.title}
              price={product.total}
              quantity={product.quantity}
              id={product.id}
              handleActions={false}
            />
          ))
        }
      </section>
      <section className="flex flex-row justify-between mt-4">
        <p>Total Products: <b>{currentOrder.totalProducts}</b></p>
        <p>Total Price: <b>$ {currentOrder.total}</b></p>
      </section>
    </>
  )
}