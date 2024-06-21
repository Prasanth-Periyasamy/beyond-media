'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CloseIcon, HamBurgerMenu, Logo } from '@/utils/imageConstants';

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState(!menuState);
  };
  return (
    <header>
      <nav className="mx-10 flex justify-between rounded-b-3xl bg-tertiary py-4 pl-5 pr-10 shadow-header-blue md:pr-6 sm:mx-0">
        <div>
          <Image className="w-48 sm:w-14" src={Logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-14 md:gap-10 sm:hidden">
          <ul className="flex gap-10 text-2xl font-bold *:text-primary md:gap-5 md:text-base">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <button className="rounded-3xl bg-primary px-10 py-2 text-base font-bold text-white">Contact Us</button>
        </div>
        <div className="hidden sm:block">
          <Image className="w-4 cursor-pointer" onClick={handleClick} src={HamBurgerMenu} alt="menu-icon" />
          <div
            className={`fixed top-0 ${menuState ? 'right-[0%]' : 'right-[-50%]'} z-10 h-full w-[50%] bg-black text-white opacity-95 duration-300 ease-linear`}
          >
            <span className="m-5 flex justify-end" onClick={handleClick}>
              <Image className="w-4 cursor-pointer" src={CloseIcon} alt="close-icon" />
            </span>
            <div className="flex flex-col items-center justify-center gap-8">
              <ul className="flex flex-col items-center gap-y-5">
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
              </ul>
              <button className="rounded-3xl bg-primary px-8 py-1 text-base font-bold text-white">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
