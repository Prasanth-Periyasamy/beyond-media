import Image from 'next/image';
import { ServiceImage } from '@/utils/imageConstants';

export const FullServiceMedia = () => {
  return (
    <section className="grid grid-cols-2 justify-between px-10 py-14 sm:grid-cols-1 sm:p-6">
      <div className="mt-20 md:my-auto sm:hidden">
        <Image src={ServiceImage} alt="service-image" />
      </div>
      <div className="text-right sm:text-center">
        <h1 className="font-extrabold text-primary">Full service Media Operation Solution</h1>
        <div className="my-5 hidden sm:block">
          <Image src={ServiceImage} alt="service-image" />
        </div>
        <h3 className="font-bold">
          With our extensive expertise in Ad tech, we provide a seamless and unique digital marketing experience that
          caters to your daily ad operation requirements, improving efficiency, guaranteeing error-free media setups,
          and maximizing customer lifetime value. Our expertise spans across different Media formats, Ad servers, Data
          management platforms, and other Media types. We impeccably integrate with your operational needs, encompassing
          everything from Media buying & Activation to Analytics and post-campaign reporting, offering you a sustainable
          process flow.
        </h3>
      </div>
    </section>
  );
};
