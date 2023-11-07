import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar'; // Import the Navbar component


export default function Navigation() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          AboutMe
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/project">
          Project
        </Link>,
      ]}
    />
  );
}


