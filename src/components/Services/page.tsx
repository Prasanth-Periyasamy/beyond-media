import Image from 'next/image';
import { AiImage } from '@/utils/imageConstants';

export const Services = () => {
  return (
    <section className="px-10 pb-20 sm:p-6">
      <h1 className="w-fit border-b-4 border-primary py-3 font-extrabold text-primary sm:mx-auto sm:py-1">
        Our Services
      </h1>
      <div className="grid grid-cols-2 justify-between py-5 sm:grid-cols-1">
        <div className="sm:hidden">
          <Image src={AiImage} alt="services-image" />
        </div>
        <div className="space-y-5 text-right sm:text-center">
          <h1 className="font-extrabold text-primary">Generative AI tailored services and solutions</h1>
          <div className="hidden sm:block">
            <Image src={AiImage} alt="services-image" />
          </div>
          <h3 className="font-bold">
            Powered by Gen AI, our skilled engineers are capable of delivering exceptional customized services
            specifically designed for you and your enterprise.
          </h3>
        </div>
      </div>
    </section>
  );
};
