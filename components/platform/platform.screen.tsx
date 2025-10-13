import JoinUs from "../common/join-us.component";
import PageContainer from "../common/page-container.component";
import BodyArmor from "./armor/body-armor.component";
import Footwear from "./footwear/footwear.component";
import Opportunities from "./opportunities/opportunities.component";
import Vehicle from "./vehicle/vehicle.component";

export default function Platform() {
  return (
    <PageContainer>
      <Opportunities />
      <Vehicle />
      <Footwear />
      <BodyArmor />
      <JoinUs />
    </PageContainer>
  );
}
