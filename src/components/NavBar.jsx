import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex fixed right-0 left-0 top-0 justify-between px-10 py-5 bg-blue-50 text-black'>
      <h1>My Website</h1>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default NavBar