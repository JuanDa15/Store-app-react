
import Home from './Pages/Home';
import Account from './Pages/Account';
import Orders from './Pages/Orders';
import Order from './Pages/Order';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Layout from './Layout';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: ':category',
          element: <Home />
        },
        {
          path: 'account',
          element: <Account />
        },
        {
          path: 'orders',
          element: <Orders />,
        },
        {
          path: 'order',
          children: [
            {
              path: 'last',
              element: <Order />,
            }
          ]
        },
        {
          path: 'order/:id',
          element: <Order />
        },
        {
          path: 'sign-in',
          element: <SignIn />
        },
        {
          path: 'sign-up',
          element: <SignUp />
        }
      ]
    }
  ])

  return routes;
}