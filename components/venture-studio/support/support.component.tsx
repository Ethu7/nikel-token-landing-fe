import CustomHeader2 from "@/components/common/custom-header-2.component";
import CustomHeader3 from "@/components/common/custom-header-3.component";
import SectionContainer from "@/components/common/section-container.component";
import Card from "./card.component";

export default function Support() {
  return (
    <SectionContainer className="max-w-[1600px]">
      <div className="w-full flex flex-wrap gap-lg md:gap-xl">
        <div className="flex-1 flex flex-col gap-md">
          <CustomHeader2>
            Our Venture Studio Supports Our Community and Its Members
          </CustomHeader2>
          <p className="text-sm md:text-xl">
            The Venture Studio is the community’s strategic resource to
            facilitate the perfect collaboration for the optimal development of
            innovative Nikel-based products and solutions. The Venture Studio
            focuses on how Nikel-based ideas transform into innovation and
            business opportunities.
          </p>
          <p className="text-sm md:text-xl">
            The Venture Studio is a team of experts, strategic thinkers, and
            institutions brainstorming and collecting ideas, assessing their
            feasibility, and developing the prospective ones in the fastest time
            possible at a minimal cost. By prioritizing speed and
            cost-efficiency, the lab helps brands invest in profitable ideas
            only. Our approach encompasses idea validation, meticulous
            incubation, swift acceleration, and empowering aspiring
            entrepreneurs to actualize their visions.
          </p>
          <p className="text-sm md:text-xl">
            The headquarters of the Venture Studio is in the Malaga Tech Park in
            Spain — a thriving technological landscape.
          </p>
        </div>
        <div className="flex flex-col gap-lg md:gap=xl">
          <CustomHeader3>
            Our members help our innovators in multiple ways, including:
          </CustomHeader3>
          <div className="flex-1 flex flex-row gap-md">
            <div className="flex-1 flex flex-col gap-md">
              <Card>Financing and other Funding Sources</Card>
              <Card>Brand Development and Network Growth</Card>
            </div>
            <div className="flex-1 flex flex-col gap-md">
              <Card>Market Testing and Product Trials</Card>
              <Card>Licensing/Patents and IP Protection</Card>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
