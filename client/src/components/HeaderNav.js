import React, { Component } from 'react';
import './HeaderNav.css';

class HeaderNav extends Component {
  render() {
    return (
      <div className='header'>
          <ul className='header-nav-links'>
            <li className='header-nav-links__link'>Home</li>
            <li className='header-nav-links__link'>Photos</li>
            <li className='header-nav-links__link'>Contact</li>
          </ul>
      </div>
    )
  }
}

export default HeaderNav;