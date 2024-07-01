'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  SearchAssistImage,
  ChatImage,
  AiImage,
  BigQueryImg,
  CustomAImage,
  CustomBImage,
  CustomCImage,
  CustomSoftImage,
  ServiceImage,
} from '@/utils/imageConstants';

export default function Home() {
  return (
    <main>
      <section className="px-10 pb-20 pt-28 sm:p-6 sm:text-center">
        <div className="relative space-y-3">
          <div className="w-[50%] md:w-[80%] sm:w-full">
            <h1 className="font-extrabold text-primary">Enterprise Search Assistant</h1>
            <p className="font-bold">Unveil your unparalleled Search experience...</p>
          </div>
          <p className="w-[55%] font-bold sm:w-full">
            We offer an outstanding AI search experience based on your enterprise data that can be customized to meet
            your specific requirements.
          </p>
          <Link href="/products/#search-assistant">
            <button className="mt-2.5 rounded bg-white px-8 py-4 text-lg font-bold text-primary sm:hidden">
              See how it works
            </button>
          </Link>
        </div>
        <div className="flex justify-center sm:mt-5">
          <Image src={SearchAssistImage} alt="search-assist-image" />
        </div>
        <div className="mt-5 flex justify-center">
          <Link href="/products/#search-assistant">
            <button className="hidden rounded bg-white px-3 py-1 text-[10px] font-bold text-primary sm:block">
              See how it works
            </button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-2 items-start justify-between bg-secondary p-10 shadow-custom-blue md:grid-cols-1 sm:p-6">
        <div className="py-2 md:order-2">
          <Image src={ChatImage} alt="image" />
        </div>
        <div className="mt-10 space-y-2 text-right md:order-1 sm:mt-0 sm:text-center">
          <h1 className="font-extrabold text-primary">Enterprise Chat Assistant</h1>
          <p className="ml-auto w-[350px] font-bold sm:w-full">Your Assistant at work, powered by Gen AI...</p>
          <Link href="/products/#chat-assistants">
            <button className="mt-2.5 rounded bg-white px-8 py-3 text-lg font-bold text-primary sm:hidden">
              See how it works
            </button>
          </Link>
        </div>
        <div className="mt-5 flex justify-center sm:order-3">
          <Link href="/products/#chat-assistants">
            <button className="hidden rounded bg-white px-3 py-1 text-[10px] font-bold text-primary sm:block">
              See how it works
            </button>
          </Link>
        </div>
      </section>
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
            <p className="font-bold">
              Powered by Gen AI, our skilled engineers are capable of delivering exceptional customized services
              specifically designed for you and your enterprise.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 justify-between bg-secondary p-10 shadow-custom-blue sm:grid-cols-1 sm:p-6">
        <div className="mt-20 md:mt-5 sm:text-center">
          <h1 className="font-extrabold text-primary">Unique Media Reporting Capabilities</h1>
          <div className="my-5 hidden sm:block">
            <Image src={BigQueryImg} alt="big-query-image" />
          </div>
          <p className="font-bold">Enhanced reporting functionality leveraging log-level data</p>
        </div>
        <div className="ml-auto sm:hidden">
          <Image src={BigQueryImg} alt="big-query-image" />
        </div>
      </section>
      <section className="overflow-hidden px-10 py-20 sm:p-6">
        <section className="grid grid-cols-2 sm:grid-cols-1">
          <div className="sm:hidden">
            <Image src={CustomAImage} alt="customUI-image" />
          </div>
          <div className="relative mt-5 text-right sm:text-center">
            <h1 className="font-extrabold text-primary">Building Custom UI</h1>
            <p className="font-bold sm:hidden">
              Building custom UI and tools to manage tasks not supported by your existing tools.
            </p>
          </div>
        </section>
        <section className="my-20 grid grid-cols-2 justify-between sm:my-10 sm:grid-cols-1 sm:gap-10">
          <div className="hidden sm:order-1 sm:mx-auto sm:block">
            <Image src={CustomAImage} alt="customUI-image" />
          </div>
          <div className="sm:order-2">
            <Image src={CustomBImage} alt="customUI-image" />
          </div>
          <div className="ml-auto sm:order-3">
            <div className="my-3 w-72 rounded-xl bg-primary px-3 py-6 sm:w-full sm:py-4">
              <p className="text-sm">C. Bid Management</p>
            </div>
            <Image src={CustomCImage} alt="customUI-image" />
          </div>
          <p className="hidden text-center font-bold sm:order-4 sm:block">
            Building custom UI and tools to manage tasks not supported by your existing tools.
          </p>
        </section>
      </section>
      <section className="grid grid-cols-2 justify-between bg-secondary px-10 py-14 shadow-custom-blue sm:grid-cols-1 sm:p-6">
        <div className="sm:text-center">
          <h1 className="font-extrabold text-primary">Custom software development</h1>
          <div className="hidden sm:block">
            <Image src={CustomSoftImage} alt="software-dev-image" />
          </div>
          <p className="font-bold">
            We offer a wide array of services and expertise in frontend and backend technologies. As your trusted
            partners, we provide comprehensive support for building brand-new teams or collaborating with your existing
            engineering team. We are committed to assisting you every step of the way!
          </p>
        </div>
        <div className="ml-auto sm:hidden">
          <Image src={CustomSoftImage} alt="software-dev-image" />
        </div>
      </section>
      <section className="grid grid-cols-2 justify-between px-10 py-14 sm:grid-cols-1 sm:p-6">
        <div className="mt-20 md:my-auto sm:hidden">
          <Image src={ServiceImage} alt="service-image" />
        </div>
        <div className="text-right sm:text-center">
          <h1 className="font-extrabold text-primary">Full service Media Operation Solution</h1>
          <div className="my-5 hidden sm:block">
            <Image src={ServiceImage} alt="service-image" />
          </div>
          <p className="font-bold">
            With our extensive expertise in Ad tech, we provide a seamless and unique digital marketing experience that
            caters to your daily ad operation requirements, improving efficiency, guaranteeing error-free media setups,
            and maximizing customer lifetime value. Our expertise spans across different Media formats, Ad servers, Data
            management platforms, and other Media types. We impeccably integrate with your operational needs,
            encompassing everything from Media buying & Activation to Analytics and post-campaign reporting, offering
            you a sustainable process flow.
          </p>
        </div>
      </section>
      <section className="bg-secondary px-10 py-8 shadow-custom-blue sm:p-6 sm:text-center">
        <h1 className="mb-3 font-extrabold text-primary md:text-[70px] sm:text-xl">About Us</h1>
        <div className="space-y-5">
          <p className="font-bold">
            We offer a distinctive approach to designing and developing your product, while also providing valuable
            input based on our ideas and experience. Our extensive range of software services can assist you in
            achieving efficiency, automation, and provide you with a competitive edge with expertise in Gen AI products.
            We take pride in developing customer-centric technology solutions that integrate automated processes for our
            clients, ensuring the highest level of service quality.
          </p>
          <p className="font-bold">
            At Beyond Media, we specialize in optimizing intricate operations, crafting exceptional user experiences,
            and delivering enduring business value to facilitate the growth and realization of your concepts. We
            consistently capitalize on opportunities to showcase our unwavering dedication, exceptional expertise, and
            complete commitment to both our team and clients.
          </p>
        </div>
      </section>
      <section className="p-10 md:text-center sm:p-6">
        <h1 className="mb-3 font-extrabold text-primary md:text-[70px] sm:text-xl">Our Team</h1>
        <p className="font-bold">
          We adhere strictly to Engineering best practices and development standards. Our team comprises passionate
          professionals with extensive Technical and Product expertise, committed to delivering exceptional solutions.
          With more than ten years of experience in constructing high traffic systems and web applications, we possess a
          proven track record in comprehending our clients requirements and are always ready to surpass their
          expectations by going the extra mile.
        </p>
      </section>
    </main>
  );
}
