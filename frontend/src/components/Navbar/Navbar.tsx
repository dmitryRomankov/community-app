import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarProps } from './Navbar.model';
import { Link } from './Navbar.model';
import './Navbar.scss';

export const CaNavbar = (props: NavbarProps) => {
  return (
    <div className='ca-navbar'>
      <div className='ca-navbar__container'>
        <ul className='ca-navbar__items-container'>
          {props.children}
          <div>
          {props.linksToRender &&
            props.linksToRender.map((link: Link, index: number) => {
              return (
                <NavLink
                  isActive={(navLink, currentPath) => {
                      return currentPath.pathname === link.to ||
                      currentPath.pathname.includes(link.to.slice(0, -1));
                    }
                  }
                  key={index}
                  to={link.to}
                  activeClassName={link.activeClassName}
                  className='ca-navbar__nav-item'
                >
                  {link.text}
                </NavLink>
              );
            })}
            </div>
        </ul>
      </div>
    </div>
  );
};
