import React from 'react';
import Navigation from '../components/Navigation';
import logo from '../../public/images/logo.jpg'
import '../index.css';


function Header() {
  return (
    <header className='header'>
      <div className='header-content'>     
       <img src={logo} alt="Logo" className="header-image" />
        <h1 className='title'>Rael.W <br></br> Portfolio</h1>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
