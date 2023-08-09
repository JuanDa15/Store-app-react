import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import { CheckoutWidget } from "../components/CheckoutWidget";

export default function Layout() {
  return (
    <div className="w-screen">
      <NavBar/>
      <ProductDetail />
      <CheckoutWidget />
      <div className="container mx-auto mt-1">
        <Outlet/>
      </div>
    </div>
  )
}