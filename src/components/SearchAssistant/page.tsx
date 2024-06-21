import Image from 'next/image';
import { SearchAssistImage } from '@/utils/imageConstants';

export const SearchAssistant = () => {
  return (
    <section className="px-10 pb-20 pt-28 sm:p-6 sm:text-center">
      <div className="relative space-y-3">
        <div className="w-[50%] md:w-[80%] sm:w-full">
          <h1 className="font-extrabold text-primary">Enterprise Search Assistant</h1>
          <h3 className="font-bold">Unveil your unparalleled Search experience...</h3>
        </div>
        <p className="w-[55%] font-bold sm:w-full">
          We offer an outstanding AI search experience based on your enterprise data that can be customized to meet your
          specific requirements.
        </p>
        <button className="rounded bg-white px-8 py-4 text-lg font-bold text-primary sm:hidden">
          See how it works !
        </button>
        {/* <div className="blue-glow top-[50%] left-[-22%]"></div> */}
      </div>
      <div className="flex justify-center sm:mt-5">
        <Image src={SearchAssistImage} alt="search-assist-image" />
      </div>
      <div className="mt-5 flex justify-center">
        <button className="hidden rounded bg-white px-3 py-1 text-[10px] font-bold text-primary sm:block">
          See how it works !
        </button>
      </div>
    </section>
  );
};
