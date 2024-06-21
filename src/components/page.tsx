import Image from 'next/image';
import { Logo } from '@/utils/imageConstants';

export const Header = () => {
  return (
    <header className="bg-[#010101]">
      <nav className="shadow-header-blue mx-10 flex justify-between rounded-b-3xl bg-[#2D2D2D7A] py-3 pl-5 pr-10">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-16">
          <ul className="flex gap-8 text-[#1A81F3]">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
          <button className="rounded-3xl bg-[#1A81F3] px-4 py-2 text-white">Contact Us</button>
        </div>
      </nav>
    </header>
  );
};
