import { Link, Navigate } from "react-router-dom";
import NavLinksGroup from "../NavLinksGroup";
import CartCounter from "../CartCounter";

const links = [
  {
    id: 1,
    links: [
      {
        path: (session) => '/',
        text: 'all',
        public: true
      },
      {
        path: (session) => '/clothes',
        text: 'Clothes',
        public: true
      },
      {
        path: (session) =>  '/electronics',
        text: 'Electronics',
        public: true
      },
      {
        path: (session) => '/furniture',
        text: 'Furniture',
        public: true
      },
      {
        path: (session) => '/others',
        text: 'Others',
        public: true
      },
    ]
  },
  {
    id:2,
    links: [
      {
        path: (session) => session ? '/account' : <Navigate to={'/'} replace={true} />,
        text: 'jdoo@gmail.com',
        public: false
      },
      {
        path: (session) => session ? '/account' : <Navigate to={'/'} replace={true} />,
        text: 'My Orders',
        public: false
      },
      {
        path: (session) => '/sign-in',
        text: 'Sign in',
        public: true
      },
      {
        path: (session) => '',
        text: <CartCounter />,
        public: false
      }
    ]
  }
]


export default function NavBar() {
  return (
    <nav className="sticky top-0 w-screen flex flex-row gap-4 h-[60px] items-center px-10 z-30 bg-[#242424]">
      <p className="font-bold text-2xl">
        <Link to="/">Shopi</Link>
      </p>
      <div className="w-full flex flex-row justify-between">
        {
          links.map(link => <NavLinksGroup key={link.id} links={link.links} />)
        }
      </div>
    </nav>
  )
}