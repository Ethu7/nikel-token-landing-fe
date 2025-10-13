import Image from "next/image";
import SectionContainer from "@/components/common/section-container.component";
import CustomHeader2 from "@/components/common/custom-header-2.component";
import CustomHeader3 from "@/components/common/custom-header-3.component";

export default function Intro() {
  return (
    <SectionContainer className="pt-[120px] md:pt-[200px]">
      <CustomHeader2 className="text-center">
        Why Innovate With Our Nikel Token Community?
      </CustomHeader2>
      <p className="text-center">
        We have your back always, putting together all you need to create the
        next big products and innovations in the nickel industry. Our community
        comprises great thinkers, professionals, enthusiasts, and financiers.
      </p>
      <Image
        className="w-full object-cover rounded-xl"
        src="/venture-studio/intro.png"
        width={641}
        height={400}
        alt="abstract_intro"
      />
      <div className="flex flex-col gap-lg md:gap-xl">
        <div>
          <CustomHeader3>Streamlined Process</CustomHeader3>
          <p>
            You become a part of our passionate network, advancing
            nickel-related innovations. With our Venture Studio, you have
            like-minded individuals to discuss and share your vision for a
            better future.
          </p>
        </div>
        <div>
          <CustomHeader3>Sense of Belonging</CustomHeader3>
          <p>
            Our collaborative efforts and methods as a community will accelerate
            your journey from the idea to the realization. The Venture Studio
            uses creative methods and data analysis to transform concepts into
            real-world solutions, fostering rapid progress and driving
            innovation.
          </p>
        </div>
        <div>
          <CustomHeader3>Access to Knowledge and Learning</CustomHeader3>
          <p>
            You will gain unparalleled access to knowledge and educational
            resources or funding. The Venture Studio facilitates effective
            communication and engagement between professionals, individuals, or
            brands within the nickel industry.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
