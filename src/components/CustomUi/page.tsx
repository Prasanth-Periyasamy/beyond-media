import Image from 'next/image';
import { CustomAImage, CustomBImage, CustomCImage } from '@/utils/imageConstants';

export const CustomUi = () => {
  return (
    <section className="overflow-hidden px-10 py-20 sm:p-6">
      <section className="grid grid-cols-2 sm:grid-cols-1">
        <div className="sm:hidden">
          <Image src={CustomAImage} alt="customUI-image" />
        </div>
        <div className="relative mt-5 text-right sm:text-center">
          <h1 className="font-extrabold text-primary">Building Custom UI</h1>
          <h3 className="font-bold sm:hidden">
            Building custom UI and tools to manage tasks not supported by your existing tools.
          </h3>
          {/* <div className="blue-glow top-[-10%] right-[-50%]"></div> */}
        </div>
      </section>
      <section className="my-20 grid grid-cols-2 justify-between sm:my-10 sm:grid-cols-1 sm:gap-10">
        <div className="hidden sm:order-1 sm:mx-auto sm:block">
          <Image src={CustomAImage} alt="customUI-image" />
        </div>
        <div className="sm:order-3">
          <Image src={CustomCImage} alt="customUI-image" />
        </div>
        <div className="ml-auto sm:order-2">
          <Image src={CustomBImage} alt="customUI-image" />
        </div>
        <h3 className="hidden text-center font-bold sm:order-4 sm:block">
          Building custom UI and tools to manage tasks not supported by your existing tools.
        </h3>
      </section>
    </section>
  );
};
