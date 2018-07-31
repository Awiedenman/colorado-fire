import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export const Header = () => {
  return ( 
    <div className='header'>
      <div className='layer'>
        <h1 className='main-title'> Wild<span className='fire'>Fire</span>Watch </h1>
        <div className='header-navLinks'>
          <NavLink exact to="/">Current Fires</NavLink>
          <NavLink exact to = "/reportFires" >Report a Fire</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Header;