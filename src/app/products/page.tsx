import Image from 'next/image';
import { ProductSearchAssistant, ProductChatAssistant } from '@/utils/imageConstants';

const Products = () => {
  return (
    <main className="min-h-dvh px-14 pb-10 pt-28 sm:p-6">
      <section className="enterprise-section flex justify-between gap-4 lg:flex-wrap sm:gap-6">
        <div id="search-assistant" className="w-[50%] lg:w-full">
          <h1 className="mb-5 font-extrabold text-primary">Enterprise Search Assistant</h1>
          <div className="w-[50%] 3xl:hidden lg:block lg:w-full">
            <Image src={ProductSearchAssistant} alt="Search Assistant" className="rounded-md" />
          </div>
          <div className="sm:mt-4">
            <p className="mb-5">
              The Enterprise Search Assistant is an advanced search platform specifically designed to enhance
              organizational search capabilities across multiple data sources. Its user-friendly interface facilitates
              effortless searches on websites, documents database tables, and seamlessly integrates with your companys
              intranet, Slack, or Jira/Confluence.
            </p>
            <p className="mb-5">
              Our primary objective is to leverage advanced Large language model processing techniques to retrieve
              information efficiently, utilizing semantic similarity and related items. Powered by AI, our intelligent
              search engines comprehend user intent and deliver results based on the authenticity of your enterprise
              data safely and securely. By leveraging our tool, your business can experience transformative benefits,
              including highly relevant and comprehensive search results across all data points.
            </p>
            <p className="">
              Furthermore, our user interface incorporates a follow-up question functionality that enhances a
              personalized search experience tailored specifically for you!
            </p>
          </div>
        </div>
        <div className="mt-5 h-full w-[50%] lg:hidden lg:w-full">
          <Image
            src={ProductSearchAssistant}
            alt="Search Assistant"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </section>
      <section
        id="chat-assistants"
        className="chat-assistant mt-8 flex items-center justify-between gap-10 lg:flex-wrap"
      >
        <h1 className="mb-5 w-full font-extrabold text-primary 3xl:hidden lg:block">Enterprise Chat Assistant</h1>
        <div className="w-[50%] lg:w-full">
          <Image src={ProductChatAssistant} alt="Chat Assistant" className="rounded-md" />
          <p className="mt-4 text-center text-lg">Sample use case of our Chat Assistant</p>
        </div>
        <div className="w-[50%] lg:w-full">
          <h1 className="mb-5 font-extrabold text-[#1A81F3] lg:hidden">Enterprise Chat Assistant</h1>
          <p className="">
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
