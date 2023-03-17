import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
<nav className='py-10 mb-20 flex justify-between'>
<h1 className='text-2xl font-'>  Pollen and Pollution</h1>
<ul className='flex items-center'>
    <li>
    </li>
    <li> <NavLink className='bg-gray-800 text-white px-3 py-2 rounded-lg ml-2' to='/'>Home </NavLink></li>
    <li> <NavLink className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' to='/pollen_types'>Pollen Types </NavLink></li>
    <li> <NavLink className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' to='AQI'>Air Quality Index </NavLink>  </li>
</ul>
</nav>
</>
)};

export default Header