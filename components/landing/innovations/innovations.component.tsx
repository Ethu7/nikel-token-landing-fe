import SectionContainer from "@/components/common/section-container.component";
import InnovationCard from "./innovation-card.component";
import CustomHeader1 from "@/components/common/custom-header-1.component";

export default function Innovations() {
  return (
    <SectionContainer className="max-w-[1600px]">
      <CustomHeader1>FEATURED INNOVATIONS</CustomHeader1>
      <div className="flex-1 flex flex-wrap items-center justify-items-center gap-xl">
        <InnovationCard
          label="featured"
          text="How Nitinol Tires Could Pave the Way for"
          imgSrc="/landing/innovations/innovation_1.png"
          imgAlt="innovation_space"
          imgWidth={747}
          imgHeight={557}
        />
        <div className="bg-primary w-[4px] h-[50px] rounded-xl hidden xl:block" />
        <InnovationCard
          label="latest nickel research"
          text="Nickel-Based Footwear Revolutionizes"
          imgSrc="/landing/innovations/innovation_2.png"
          imgAlt="innovation_space"
          imgWidth={748}
          imgHeight={458}
        />
      </div>
    </SectionContainer>
  );
}
