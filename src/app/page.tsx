import { AboutUs } from '../components/AboutUs/page';
import { BigQuery } from '../components/BigQuery/page';
import { ChatAssistant } from '../components/ChatAssistant/page';
import { CustomSoftware } from '../components/CustomSoftware/page';
import { CustomUi } from '../components/CustomUi/page';
import { FullServiceMedia } from '../components/FullServiceMedia/page';
import { OurTeam } from '../components/OurTeam/page';
import { SearchAssistant } from '../components/SearchAssistant/page';
import { Services } from '../components/Services/page';

export default function Home() {
  return (
    <main>
      <SearchAssistant />
      <ChatAssistant />
      <Services />
      <BigQuery />
      <CustomUi />
      <CustomSoftware />
      <FullServiceMedia />
      <AboutUs />
      <OurTeam />
    </main>
  );
}
