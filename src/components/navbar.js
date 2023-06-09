import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from '../pics/JMHlogo.png'

import '../styles/styles.css'
import '../styles/App.css'

export default function Navbar() {
  return (
    <>
    <img className="JMHlogo" src = {logo} />
        <nav className="nav">
        <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/services">Services</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
        </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}