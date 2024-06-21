import Image from 'next/image';
import { BigQueryImg } from '@/utils/imageConstants';

export const BigQuery = () => {
  return (
    <section className="grid grid-cols-2 justify-between bg-secondary p-10 shadow-custom-blue sm:grid-cols-1 sm:p-6">
      <div className="mt-20 md:mt-5 sm:text-center">
        <h1 className="font-extrabold text-primary">Unique Media Reporting Capabilities</h1>
        <div className="my-5 hidden sm:block">
          <Image src={BigQueryImg} alt="big-query-image" />
        </div>
        <h3 className="font-bold">Enhanced reporting functionality leveraging log-level data</h3>
      </div>
      <div className="ml-auto sm:hidden">
        <Image src={BigQueryImg} alt="big-query-image" />
      </div>
    </section>
  );
};
