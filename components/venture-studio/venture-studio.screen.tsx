import JoinUs from "../common/join-us.component";
import PageContainer from "../common/page-container.component";
import Hubs from "./hubs/hubs.component";
import Intro from "./intro/intro.component";
import Process from "./process/process.component";
import Support from "./support/support.component";

export default function VentureStudio() {
  return (
    <PageContainer>
      <Intro />
      <Process />
      <Support />
      <Hubs />
      <JoinUs />
    </PageContainer>
  );
}
