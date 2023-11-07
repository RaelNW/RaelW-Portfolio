import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar'; // Import the Navbar component


export default function Navigation() {
  return (
    <Navbar
    style={{ display: 'flex', justifyContent: 'space-evenly' }}
      links={[
        <Link key={1} className="nav" to="/">
          AboutMe
        </Link>,
        <Link key={3} className="nav" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav" to="/project">
          Project
        </Link>,
      ]}
    />
  );
}


