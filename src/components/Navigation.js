import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  const [menu, setMenu] = useState([false]);

  const handleSetMenu = () => setMenu(!menu);

  const navList = [
    { name: 'Home', path: '/', exact: true },
    { name: 'About', path: '/about', exact: true },
    { name: 'Projects', path: '/projects', exact: true },
    { name: 'Contact', path: '/contact', exact: true },
  ];

  const navMenu = navList.map((item) => (
    <li className="li-item" key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleSetMenu}>
            <div className={menu ? 'line line-1' : 'line'}></div>
            <div className={menu ? 'line line-2' : 'line'}></div>
            <div className={menu ? 'line line-3' : 'line'}></div>
          </div>
          <ul className="nav-menu">{navMenu}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
