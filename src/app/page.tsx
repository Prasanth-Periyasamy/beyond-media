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
      <section className="px-10 pb-20 pt-28 sm:p-6">
        <div className="relative space-y-3">
          <div className="w-[50%] md:w-[80%] sm:w-full">
            <h1 className="font-extrabold text-primary">Enterprise Search Assistant</h1>
            <p>Unveil your unparalleled Search experience...</p>
          </div>
          <p className="w-[55%] sm:w-full">
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
      <section className="grid grid-cols-2 items-start justify-between gap-14 bg-secondary p-10 shadow-custom-blue md:grid-cols-1 sm:gap-6 sm:p-6">
        <div className="py-2 md:order-2">
          <Image src={ChatImage} alt="image" />
          <p className="mt-4 text-center text-lg">Sample use case of our Chat Assistant</p>
        </div>
        <div className="mt-10 space-y-2 md:order-1 sm:mt-0">
          <h1 className="font-extrabold text-primary">Enterprise Chat Assistant</h1>
          <p className="sm:w-full">Your Assistant at work, powered by Gen AI...</p>
          <p className="sm:w-full">
            Our highly customizable chat assistant has been designed to comprehend and address your inquiries or
            instructions in a conversational manner. It has the ability to extract keywords from your response messages
            and find required information or perform system updates via customizable API calls.
          </p>
          <Link href="/products/#chat-assistants">
            <button className="mt-5 rounded bg-white px-8 py-3 text-lg font-bold text-primary sm:hidden">
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
        <div className="grid grid-cols-2 justify-between gap-14 py-5 sm:grid-cols-1">
          <div className="sm:hidden">
            <Image src={AiImage} alt="services-image" />
          </div>
          <div className="space-y-5">
            <h1 className="font-extrabold text-primary">Generative AI tailored services and solutions</h1>
            <div className="hidden sm:block">
              <Image src={AiImage} alt="services-image" />
            </div>
            <p className="font-bold">
              Powered by Langchain, we provide highly adaptable Gen AI workflows tailored to meet your specific
              requirements. Our services offer complete flexibility, allowing us to manage your Langchain application
              entirely in the Cloud or collaborate with your team to develop customized solutions that align with your
              needs.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 justify-between bg-secondary p-10 shadow-custom-blue sm:grid-cols-1 sm:p-6">
        <div className="mt-20 md:mt-5">
          <h1 className="font-extrabold text-primary">Unique Media Reporting Capabilities</h1>
          <div className="my-5 hidden sm:block">
            <Image src={BigQueryImg} alt="big-query-image" />
          </div>
          <p>Enhanced reporting functionality leveraging log-level data</p>
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
          <div className="relative mt-5">
            <h1 className="font-extrabold text-primary">Building Custom UI</h1>
            <p className="sm:hidden">
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
          <p className="hidden sm:order-4 sm:block">
            Building custom UI and tools to manage tasks not supported by your existing tools.
          </p>
        </section>
      </section>
      <section className="grid grid-cols-2 justify-between bg-secondary px-10 py-14 shadow-custom-blue sm:grid-cols-1 sm:p-6">
        <div className="">
          <h1 className="font-extrabold text-primary">Custom software development</h1>
          <div className="hidden sm:block">
            <Image src={CustomSoftImage} alt="software-dev-image" />
          </div>
          <p>
            We offer a wide array of services and expertise in frontend and backend technologies. As your trusted
            partners, we provide comprehensive support for building brand-new teams or collaborating with your existing
            engineering team. We are committed to assisting you every step of the way!
          </p>
        </div>
        <div className="ml-auto sm:hidden">
          <Image src={CustomSoftImage} alt="software-dev-image" />
        </div>
      </section>
      <section className="grid grid-cols-2 justify-between gap-10 px-10 py-14 sm:grid-cols-1 sm:p-6">
        <div className="mt-20 md:my-auto sm:hidden">
          <Image src={ServiceImage} alt="service-image" />
        </div>
        <div className="">
          <h1 className="font-extrabold text-primary">Full service Media Operation Solution</h1>
          <div className="my-5 hidden sm:block">
            <Image src={ServiceImage} alt="service-image" />
          </div>
          <p className="">
            With our extensive expertise in Ad tech, we provide a seamless and unique digital marketing experience that
            caters to your daily ad operation requirements, improving efficiency, guaranteeing error-free media setups,
            and maximizing customer lifetime value. Our expertise spans across different Media formats, Ad servers, Data
            management platforms, and other Media types. We impeccably integrate with your operational needs,
            encompassing everything from Media buying & Activation to Analytics and post-campaign reporting, offering
            you a sustainable process flow.
          </p>
        </div>
      </section>
    </main>
  );
}
