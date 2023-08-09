import { Link } from "react-router-dom";

export default function OrderCard({ id, created, totalProducts, total}) {
  return (
    <Link to={`/order/${id}`}>
      <li className="flex flex-row justify-between border-[1px] rounded-md p-3 hover:cursor-pointer hover:bg-gray-700">
        <p>{created.toLocaleString()}</p>
        <div>
          <p>Products: {totalProducts}</p>
          <p>Price: {total}</p>
        </div>
      </li>
    </Link>
  )
}