export default function ProductList({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      { children }
    </section>
  )
}