import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let Links =[
        {name:"HOME",link:"/Home"},
        {name:"ACHIEVMENT",link:"/Achievment"},
        {name:"JADWAL",link:"/Jadwal"},
        {name:"ANGGOTA",link:"/Anggota"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full sticky top-0 left-0 bg-[#2C3333]'>
           <div className='md:flex items-center justify-between py-4 md:px-10 px-7 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            {/* logo section */}
            <a href="/Home" class="flex items-center">
        <img src="images/logopnj.png" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#E7F6F2]">Taekwondo</span>
        </a>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 bg-white'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#2C3333] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-[#E7F6F2] hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                
            </ul>
            
           </div>
        </div>
    );
};

export default Header;