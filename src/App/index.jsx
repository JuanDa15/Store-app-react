import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../context/cart-context';
import { ProductDetailProvider } from '../context/product-detail-context';
import { CheckoutContextProvider } from '../context/checkout-context';
import { OrdersContextProvider } from '../context/orders-context';
import ProductsContextProvider from '../context/products-context';
import { AppRoutes } from '../routes';
import { SessionProvider } from '../context/session-context';

export default function App() {
  return (
    <>
      <SessionProvider>
        <ProductsContextProvider>
          <CheckoutContextProvider>
            <CartContextProvider>
              <OrdersContextProvider>
                <ProductDetailProvider>
                  <BrowserRouter basename='/'>
                    <AppRoutes />
                  </BrowserRouter>
                </ProductDetailProvider>
              </OrdersContextProvider>
            </CartContextProvider>
          </CheckoutContextProvider>
        </ProductsContextProvider>
      </SessionProvider>
    </>
  )
}