import React,{useState} from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import Sidenav from './Sidenav';

const Nav = () => {
 const [showSideNav, setShowSideNav] = useState(false);

  return (
    <header className='padding-x py-8 w-full absolute z-10'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} alt='logo' width={130} height={29} className='m-0 w-[129px] h-[29px]'/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks?.map((item)=> (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:border-b-2 hover:border-slate-gray underline-transition'>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div onClick={()=>setShowSideNav(!showSideNav)}>
                <img src={hamburger} alt='hamburger' width={25} height={25} className='hidden max-lg:block'/>
            </div>
        </nav>
        {showSideNav && <Sidenav />}
    </header>
  )
}

export default Nav

