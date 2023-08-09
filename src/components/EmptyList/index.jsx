export default function EmptyList({ search }) {
  return (
    <p className="bg-sky-300 border-blue-800 text-blue-800 p-4 rounded-md">Products not found: <b>{search}</b></p>
  )
}