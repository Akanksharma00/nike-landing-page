import React from 'react';
import { navLinks } from '../constants';

const Sidenav = () => {
  return (
    <nav className='bg-slate-200 w-[30%] flex justify-start px-8 py-8 absolute right-10 lg:hidden'>
        <ul className='flex flex-col justify-start gap-4'>
            {navLinks?.map((item)=>(
                <li className='font-montserrat text-xl leading-normal hover:border-b-2 hover:border-black underline-transition'>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Sidenav