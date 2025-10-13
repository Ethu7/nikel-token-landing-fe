import Intro from "./intro/intro.component";
import Welcome from "./intro/welcome.component";
import Innovations from "./innovations/innovations.component";
import JoinUs from "../common/join-us.component";
import PageContainer from "../common/page-container.component";

export default function Landing() {
  return (
    <PageContainer className="overflow-hidden">
      <Intro />
      <Welcome />
      <Innovations />
      <JoinUs />
    </PageContainer>
  );
}
