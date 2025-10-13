import Image from "next/image";
import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";

export default function Hubs() {
  return (
    <SectionContainer>
      <CustomHeader1 className="text-primary">
        We are bringing the world to our members through our Technology Hubs
      </CustomHeader1>
      <Image
        className="m-auto w-full object-contain max-w-[800px]"
        src="/venture-studio/map.png"
        width={1184}
        height={640}
        alt="office"
      />
      <div className="flex flex-wrap gap-md md:gap-xl items-start">
        <div className="flex-1 flex flex-col gap-sm text-sm md:text-lg">
          <p>
            An essential part of the community revolves around establishing a
            comprehensive system, interconnecting diverse stakeholders across
            various domains. Our Technology hubs serve as vital conduits for
            networking, relationship-building, awareness, content development,
            and partnership management within our network.
          </p>
          <p>
            As efficient and cost-effective channels, the technology hubs
            connect to our central headquarters, the Venture Studio, fostering a
            thriving global community. These hubs are swiftly deployed and
            achieve functionality promptly.
          </p>
          <p>
            With these interconnected Hubs, we facilitate seamless global
            collaboration, knowledge sharing, and resource utilization to build
            a vibrant community of partners and contributors.
          </p>
          <p>
            Are you a Researcher, an Engineer, a Financier, or an Innovator?
          </p>
          <p>
            You can join our Technology Hubs by contacting our Venture Studio
            now!
          </p>
          <p>Let’s connect you to the world!</p>
        </div>
        <Image
          className="flex-1 object-contain rounded-xl"
          src="/venture-studio/office.png"
          width={560}
          height={320}
          alt="office"
        />
      </div>
    </SectionContainer>
  );
}
