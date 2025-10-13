import Image from "next/image";
import CustomHeader1 from "@/components/common/custom-header-1.component";
import CustomHeader2 from "@/components/common/custom-header-2.component";
import SectionContainer from "@/components/common/section-container.component";

export default function Resources() {
  return (
    <SectionContainer>
      <CustomHeader1>Introducing Our Revolutionary Resources</CustomHeader1>
      <div className="flex-1 flex flex-col gap-lg sm:gap-xl">
        <div className="flex-1 flex flex-row sm:gap-lg">
          <CustomHeader2 className="flex-1">The Venture Studio</CustomHeader2>
          <div className="flex-1 hidden sm:block" />
        </div>
        <div className="flex-1 flex flex-wrap-reverse gap-md sm:gap-lg">
          <p className="flex-1">
            Our NKL1 Token Community Venture Studio will be located in the
            prestigious Malaga Tech Park in Spain. Employing and partnering the
            best creative and strategic thinkers, spearheading a new world of
            Nickel innovation. At the Lab, we willl prioritize speed and
            cost-efficiency in today's marketplace. Our streamlined innovation
            process helps to minimize time and expenses, empowering our members
            to bring their ideas to life.
          </p>
          <Image
            className="flex-1 rounded-[40px] min-w-[200px] max-h-[400px] object-cover"
            src="/about-us/venture-studio.png"
            alt="innovation_lab"
            width={592}
            height={400}
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-lg sm:gap-xl">
        <div className="flex-1 flex flex-row sm:gap-lg">
          <div className="flex-1 hidden sm:block" />
          <CustomHeader2 className="flex-1">The Technology Hubs</CustomHeader2>
        </div>
        <div className="flex-1 flex flex-wrap gap-md sm:gap-lg">
          <Image
            className="flex-1 rounded-[40px] min-w-[200px] max-h-[400px] object-cover"
            src="/about-us/technology-hubs.png"
            alt="technology_hubs"
            width={592}
            height={400}
          />
          <p className="flex-1">
            Fostering seamless partnerships and knowledge sharing between our
            members, our technology hubs will form dynamic and comprehensive
            resources that brings together diverse stakeholders from various
            domains, uniting their vast skills and expertise. You will be able
            to connect to laboratories, financial institutions, licensing
            agencies, and more.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
