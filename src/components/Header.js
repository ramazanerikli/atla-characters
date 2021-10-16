import React from 'react';
import Logo from '../images/logo.png';

const Header = () => {
  
    return (
      <header>
      <img src={Logo} className="logo" alt="logo" />
      </header>
    )
}

export default Header;