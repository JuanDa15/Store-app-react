import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductsContext } from "../../context/products-context"
import { Session } from "../../context/session-context"

export default function NavLinksGroup({ links }) {
  const { session } = useContext(Session)
  const { setCategorySearch } = useContext(ProductsContext)

  const handleCategorySearch = (path) => {
    const validPaths = ['/', '/others', '/electronics','/clothes', '/furniture']

    const pathTranslation = {
      '/': '',
      '/electronics': 'electronics',
      '/others': 'others',
      '/clothes': 'clothes',
      '/furniture': 'furniture'
    }
    if (validPaths.includes(path)) {
      setCategorySearch(pathTranslation[path])
    }
  }

  const mappedLinks = links.map((link, index) => {
    if (session && !link.public) {
      return link
    } else if (!session && link.public) {
      return link
    }
  }).filter(Boolean)

  return (
    <ul className="flex flex-row gap-5 items-center [&>li:hover]:font-semibold">
      {
        mappedLinks.map((link, index) => 
          <li key={index}>
            <NavLink
              onClick={ () => handleCategorySearch(link.path)}
              to={link.path(session)}
              className={({ isActive}) => isActive ? 'underline' : ''}
            >
              {link.text}
            </NavLink>
          </li>
        )
      }
  </ul>
  )
}
