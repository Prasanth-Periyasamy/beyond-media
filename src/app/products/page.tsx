import Image from 'next/image';
import { ChatAssistant, SearchAssistant } from '@/utils/imageConstants';

const Products = () => {
  return (
    <main className="min-h-dvh px-14 pb-10 pt-28 sm:p-6">
      <section className="enterprise-section flex items-center justify-between lg:flex-wrap">
        <div className="w-[50%] lg:w-full">
          <h1 className="mb-5 text-[40px] font-extrabold text-primary lg:text-center lg:text-[20px]">
            Enterprise Search Assistant
          </h1>
          <div className="w-[50%] 3xl:hidden lg:block lg:w-full">
            <Image src={SearchAssistant} alt="Search Assistant" />
          </div>
          <div className="!">
            <h4 className="text-[25px] font-bold lg:text-center md:text-[16px]">
              The Enterprise Search Assistant is an advanced search platform specifically designed to enhance
              organizational search capabilities across multiple data sources. Its user-friendly interface facilitates
              effortless searches on websites, documents, database tables, and seamlessly integrates with your companys
              intranet,
            </h4>
            <h4 className="mb-5 text-[25px] font-bold lg:text-center md:text-[16px]">Slack, or Jira/Confluence.</h4>
            <h4 className="text-[25px] font-bold lg:text-center md:text-[16px]">
              Our primary objective is to leverage advanced Large language model processing techniques to retrieve
              information efficiently, utilizing semantic similarity and related items. Powered by AI, our intelligent
              search engines comprehend user intent and deliver results based
            </h4>
            <h4 className="text-[25px] font-bold lg:text-center md:text-[16px]">
              on the authenticity of your enterprise data safely and securely. By leveraging our tool, your business can
              experience transformative benefits, including highly relevant and comprehensive search
            </h4>
            <h4 className="mb-5 text-[25px] font-bold lg:text-center md:text-[16px]">
              results across all data points.
            </h4>
            <h4 className="text-[25px] font-bold lg:text-center md:text-[16px]">
              Furthermore, our user interface incorporates a follow-up question functionality that enhances a
              personalized search experience tailored specifically for you!
            </h4>
          </div>
        </div>
        <div className="w-[50%] lg:hidden lg:w-full">
          <Image src={SearchAssistant} alt="Search Assistant" />
        </div>
      </section>
      <section className="chat-assistant mt-8 flex items-center justify-between gap-10 lg:flex-wrap">
        <h1 className="mb-5 w-full text-center text-[40px] font-extrabold text-primary 3xl:hidden lg:block md:text-[20px]">
          Enterprise Chat Assistant
        </h1>
        <div className="w-[50%] lg:w-full">
          <Image src={ChatAssistant} alt="Chat Assistant" />
        </div>
        <div className="w-[50%] lg:w-full">
          <h1 className="mb-5 text-[40px] font-extrabold text-[#1A81F3] lg:hidden">Enterprise Chat Assistant</h1>
          <h4 className="text-right text-[25px] font-bold lg:text-center md:text-[16px]">
            The Enterprise Chat Assistant engages in human-like conversations by utilizing Gen AI to interpret human
            input. Our Gen AI-powered Chat Assistant is designed to comprehend and address your queries or commands in a
            conversational manner. We can tailor our chat assistant to suit any context, whether it be customer service
            for retrieving information and processing updates, providing virtual companionship in various aspects of
            your life, or conducting secure information retrieval from both internal and external data sources. Our chat
            assistant responds conversationally, extracting crucial keywords from responses and making API calls to
            process system updates according to your requirements.
          </h4>
        </div>
      </section>
    </main>
  );
};
export default Products;
