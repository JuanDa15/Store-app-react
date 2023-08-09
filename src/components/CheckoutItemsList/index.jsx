import CheckoutItemCard from "../CheckoutItemCard";

export default function CheckoutItemsList({ children }) {
  return (
    <ul className="flex flex-col gap-3 p-2">
      {
        children
      }
    </ul>
  )
}