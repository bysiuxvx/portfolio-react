import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const [menu, setMenu] = useState(false)

  const handleSetMenu = () => setMenu(!menu)

  const navList = [
    { name: "Home", path: "/", exact: true },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  const navMenu = navList.map((item) => (
    <li key={item.name} onClick={handleSetMenu}>
      <NavLink
        className="li-item"
        to={item.path}
        exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ))

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleSetMenu}>
          <div className={menu ? "line line-1" : "line"}></div>
          <div className={menu ? "line line-2" : "line"}></div>
          <div className={menu ? "line line-3" : "line"}></div>
        </div>
        <div className="navbar-container">
          <ul className={menu ? "nav-menu active" : "nav-menu"}>{navMenu}</ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
