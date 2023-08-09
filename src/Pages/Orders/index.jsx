import { useContext } from "react"
import { OrdersContext } from "../../context/orders-context"
import OrderCard from "../../components/OrderCard"

export default function Orders() {
  const { orders } = useContext(OrdersContext) 
  return (
    <>
      <h1>
        Orders
      </h1>

      <ul className="m-auto max-w-[75ch] flex flex-col gap-2">
        {
          orders.map((order) => (
            <OrderCard key={order.id} id={order.id} totalProducts={order.totalProducts} total={order.total} created={order.created}/>
          ))
        }
      </ul>
    </>
  )
}