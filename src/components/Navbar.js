
import React from 'react'

export default function Navbar() {
  return (
    <nav>

<ul style={{listStyle:"none" ,display:"flex", padding:"10px"}}>
  <li><a href="About">about</a></li>
  <li><a href="TextForm">Textform</a></li>
  <li><a href="Contacts">Contacts</a></li>
  <input type ="search" />
</ul>
</nav>
  )
}
