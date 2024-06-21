import Image from 'next/image';
import { ChatImage } from '@/utils/imageConstants';

export const ChatAssistant = () => {
  return (
    <>
      <section className="grid grid-cols-2 items-start justify-between bg-secondary p-10 shadow-custom-blue md:grid-cols-1 sm:p-6">
        <div className="py-2 md:order-2">
          <Image src={ChatImage} alt="image" />
        </div>
        <div className="mt-10 space-y-2 text-right md:order-1 sm:mt-0 sm:text-center">
          <h1 className="font-extrabold text-primary">Enterprise Chat Assistant</h1>
          <h3 className="ml-auto w-[350px] font-bold sm:w-full">Your Assistant at work, powered by Gen AI...</h3>
          <button className="rounded bg-white px-8 py-3 text-lg font-bold text-primary sm:hidden">
            See how it works !
          </button>
        </div>
        <div className="mt-5 flex justify-center sm:order-3">
          <button className="hidden rounded bg-white px-3 py-1 text-[10px] font-bold text-primary sm:block">
            See how it works !
          </button>
        </div>
      </section>
    </>
  );
};
