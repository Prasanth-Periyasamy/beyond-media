import Image from 'next/image';
import { Logo } from '@/utils/imageConstants';

export const Footer = () => {
  return (
    <footer>
      <div className="grid h-72 items-end justify-end rounded-t-3xl bg-gradient-to-b from-primary to-black md:h-56 sm:h-32 sm:rounded-t-[50px]">
        <div className="flex flex-col items-center p-14 sm:p-4">
          <div>
            <Image className="w-48 sm:w-20" src={Logo} alt="logo" />
          </div>
          <div>
            <p className="text-[14px] sm:text-[5px]">© Copy Right 2024.</p>
            <p className="text-[14px] sm:text-[5px]">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
