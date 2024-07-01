'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CloseIcon, HamBurgerMenu, Logo } from '@/utils/imageConstants';

const navLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Products', path: '/products' },
  { id: 3, name: 'About Us', path: '/about-us' },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const handleClick = () => {
    setMenuState(!menuState);
  };

  const pathname = usePathname();
  return (
    <header>
      <nav className="mx-10 flex justify-between rounded-b-3xl bg-tertiary py-4 pl-5 pr-10 shadow-header-blue md:pr-6 sm:mx-0">
        <div>
          <Link href="/">
            <Image className="w-48 sm:w-28" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-14 md:gap-10 sm:hidden">
          <ul className="flex gap-10 text-2xl font-bold *:text-primary md:gap-5 md:text-base">
            {navLinks?.map((link) => (
              <li key={link?.id}>
                <Link className={pathname === link?.path ? `border-b-2 border-primary` : ''} href={link?.path}>
                  {link?.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact-us">
            <button className="rounded-3xl bg-primary px-10 py-2 text-base font-bold text-white">Contact Us</button>
          </Link>
        </div>
        <div className="hidden sm:block">
          <Image className="w-5 cursor-pointer" onClick={handleClick} src={HamBurgerMenu} alt="menu-icon" />
          <div
            className={`fixed top-0 ${menuState ? 'right-[0%]' : 'right-[-50%]'} z-10 h-full w-[50%] bg-black text-white opacity-95 duration-300 ease-linear`}
          >
            <span className="m-5 flex justify-end" onClick={handleClick}>
              <Image className="w-4 cursor-pointer" src={CloseIcon} alt="close-icon" />
            </span>
            <div className="flex flex-col items-center justify-center gap-8">
              <ul className="flex flex-col items-center gap-y-5">
                {navLinks?.map((link) => (
                  <li key={link?.id} onClick={handleClick}>
                    <Link
                      className={pathname === link?.path ? `border-b-2 border-primary text-primary` : ''}
                      href={link?.path}
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contact-us">
                <button
                  className="rounded-3xl bg-primary px-8 py-1 text-base font-bold text-white"
                  onClick={handleClick}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
