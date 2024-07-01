import Image from 'next/image';
import { ChatAssistant, SearchAssistant } from '@/utils/imageConstants';

const Products = () => {
  return (
    <main className="min-h-dvh px-14 pb-10 pt-28 sm:p-6">
      <section className="enterprise-section flex items-center justify-between lg:flex-wrap">
        <div id="search-assistant" className="w-[50%] lg:w-full">
          <h1 className="mb-5 font-extrabold text-primary lg:text-center">Enterprise Search Assistant</h1>
          <div className="w-[50%] 3xl:hidden lg:block lg:w-full">
            <Image src={SearchAssistant} alt="Search Assistant" />
          </div>
          <div>
            <p className="font-bold lg:text-center">
              The Enterprise Search Assistant is an advanced search platform specifically designed to enhance
              organizational search capabilities across multiple data sources. Its user-friendly interface facilitates
              effortless searches on websites, documents, database tables, and seamlessly integrates with your companys
              intranet,
            </p>
            <p className="mb-5 font-bold lg:text-center">Slack, or Jira/Confluence.</p>
            <p className="font-bold lg:text-center">
              Our primary objective is to leverage advanced Large language model processing techniques to retrieve
              information efficiently, utilizing semantic similarity and related items. Powered by AI, our intelligent
              search engines comprehend user intent and deliver results based
            </p>
            <p className="font-bold lg:text-center">
              on the authenticity of your enterprise data safely and securely. By leveraging our tool, your business can
              experience transformative benefits, including highly relevant and comprehensive search
            </p>
            <p className="mb-5 font-bold lg:text-center">results across all data points.</p>
            <p className="font-bold lg:text-center">
              Furthermore, our user interface incorporates a follow-up question functionality that enhances a
              personalized search experience tailored specifically for you!
            </p>
          </div>
        </div>
        <div className="w-[50%] lg:hidden lg:w-full">
          <Image src={SearchAssistant} alt="Search Assistant" />
        </div>
      </section>
      <section
        id="chat-assistants"
        className="chat-assistant mt-8 flex items-center justify-between gap-10 lg:flex-wrap"
      >
        <h1 className="mb-5 w-full text-center font-extrabold text-primary 3xl:hidden lg:block">
          Enterprise Chat Assistant
        </h1>
        <div className="w-[50%] lg:w-full">
          <Image src={ChatAssistant} alt="Chat Assistant" />
        </div>
        <div className="w-[50%] lg:w-full">
          <h1 className="mb-5 font-extrabold text-[#1A81F3] lg:hidden">Enterprise Chat Assistant</h1>
          <p className="text-right font-bold lg:text-center">
            The Enterprise Chat Assistant engages in human-like conversations by utilizing Gen AI to interpret human
            input. Our Gen AI-powered Chat Assistant is designed to comprehend and address your queries or commands in a
            conversational manner. We can tailor our chat assistant to suit any context, whether it be customer service
            for retrieving information and processing updates, providing virtual companionship in various aspects of
            your life, or conducting secure information retrieval from both internal and external data sources. Our chat
            assistant responds conversationally, extracting crucial keywords from responses and making API calls to
            process system updates according to your requirements.
          </p>
        </div>
      </section>
    </main>
  );
};
export default Products;
