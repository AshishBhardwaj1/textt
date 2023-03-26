import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', padding: '10px' }}>
        <li><Link to="/">About</Link></li>
        <li><Link to="/textform">Textform</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <input type="search" />
      </ul>
    </nav>
  );
}
