import Image from 'next/image';
import { CustomSoftImage } from '@/utils/imageConstants';

export const CustomSoftware = () => {
  return (
    <section className="grid grid-cols-2 justify-between bg-secondary px-10 py-14 shadow-custom-blue sm:grid-cols-1 sm:p-6">
      <div className="sm:text-center">
        <h1 className="font-extrabold text-primary">Custom software development</h1>
        <div className="hidden sm:block">
          <Image src={CustomSoftImage} alt="software-dev-image" />
        </div>
        <h3 className="font-bold">
          We offer a wide array of services and expertise in frontend and backend technologies. As your trusted
          partners, we provide comprehensive support for building brand-new teams or collaborating with your existing
          engineering team. We are committed to assisting you every step of the way!
        </h3>
      </div>
      <div className="ml-auto sm:hidden">
        <Image src={CustomSoftImage} alt="software-dev-image" />
      </div>
    </section>
  );
};
