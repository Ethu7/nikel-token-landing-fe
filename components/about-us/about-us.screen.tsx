import JoinUs from "../common/join-us.component";
import OurMission from "./our-mission/out-mission.component";
import Resources from "./resources/resources.component";
import Team from "./team/team.component";
import PageContainer from "../common/page-container.component";

export default function AboutUs() {
  return (
    <PageContainer>
      <OurMission />
      <Resources />
      <Team />
      <JoinUs />
    </PageContainer>
  );
}
