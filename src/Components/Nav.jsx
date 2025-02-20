import React from 'react';
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='py-8 p-10 w-full absolute z-10'>
      <nav className='flex justify-between items-center max-width-[1440px] margin-[0 auto]'>
        <a href='/'>
         <img src={headerLogo}
         alt='logo'
         width={130}
         height={30 }
         />
         </a>
         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((link)=>{
                return (
                  <li key={link.label}>
                    <a
                    href={link.href} className='leading-normal text-lg text-gray-950'
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
         </ul>
         <div className='hidden max-lg:block'>
          <img src={hamburger}
          alt='harmburger'
          width={25}
          height={25}/>
         </div>
       </nav>
    </header>

  )
}

export default Nav
