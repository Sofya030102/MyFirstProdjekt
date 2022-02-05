import React from 'react';
import s from './Nav.module.css'
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return <nav className={s.nav}>

    <div className={s.item}>
      <NavLink to='/profile' className = { navData => navData.isActive ? s.activeLink : s.item }>Profile</NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/news'className = { navData => navData.isActive ? s.activeLink : s.item }>News</NavLink></div>
    <div className={s.item}>
      <NavLink to='/music'className = { navData => navData.isActive ? s.activeLink : s.item }>Music</NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/dialogs'className = { navData => navData.isActive ? s.activeLink : s.item }>Message</NavLink>
      </div>
    <div className={s.item}>
      <NavLink to='/setings'className = { navData => navData.isActive ? s.activeLink : s.item }>Setings</NavLink>
      </div>
  </nav>
}

export default Nav;