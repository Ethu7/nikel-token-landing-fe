import JoinUs from "../common/join-us.component";
import PageContainer from "../common/page-container.component";
import Articles from "./articles/articles.component";
import Videos from "./videos/videos.component";

export default function Blog() {
  return (
    <PageContainer>
      <Videos />
      <Articles />
      <JoinUs />
    </PageContainer>
  );
}
