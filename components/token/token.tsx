import Intro from "./intro/intro.component";
import About from "./about/about.component";
import Graph from "./graph/graph.component";
import Roadmap from "./roadmap/roadmap.component";
import JoinUs from "../common/join-us.component";
import PageContainer from "../common/page-container.component";

export default function Token() {
  return (
    <PageContainer className="overflow-hidden">
      <Intro />
      <About />
      <Graph />
      <Roadmap />
      <JoinUs />
    </PageContainer>
  );
}
