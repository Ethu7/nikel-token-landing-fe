import Image from "next/image";
import CustomHeader1 from "@/components/common/custom-header-1.component";
import CustomHeader2 from "@/components/common/custom-header-2.component";
import SectionContainer from "@/components/common/section-container.component";

export default function OurMission() {
  return (
    <SectionContainer className="pt-[120px] md:pt-[200px]">
      <CustomHeader1>About us</CustomHeader1>
      <Image
        className="rounded-2xl"
        src="/about-us/about-us.png"
        alt="about_us"
        width={954}
        height={538}
      />
      <div className="flex flex-col items-start gap-md">
        <CustomHeader2>Our Story</CustomHeader2>
        <p>
          We see Nickel playing a pivotal role in shaping our future as its
          global demand soars higher. We know the unique properties of NKL1
          and how alloying it with other materials will unlock more remarkable
          properties like corrosion resistance, exceptional high-temperature
          strength, and shape memory. This uniqueness makes Nickel an
          exceptional material for innovation.
          <br />
          <br />
          However, we discovered that the Nickel industry is disjointed,
          fractured, and compartmentalized. Stakeholders work in isolation,
          leading to limited collaboration and knowledge-sharing. These are the
          problems we intend to solve. Our solution is to build an ecosystem and
          community that fosters: ideas capturing, collaboration, communication,
          and connecting Nickel innovators, researchers, engineers, financiers,
          partners, and developers.
          <br />
          <br />
          We want to give the Nickel industry and its stakeholders a new,
          intuitive experience where they could come together to make a change.
          With new technology and work ethics, we create a community of nickel
          investors, researchers, companies, and the public to refine, share,
          collaborate, and develop ideas and innovations.
        </p>
      </div>
      <div className="flex flex-col items-start gap-md">
        <CustomHeader2>Our Mission</CustomHeader2>
        <p>
          Establish an engaging community that unites diverse individuals to
          foster innovation, exchange knowledge, and embrace new technologies,
          thereby cultivating fruitful collaborations.
        </p>
      </div>
      <div className="flex flex-col items-start gap-md">
        <CustomHeader2>Our Vision</CustomHeader2>
        <p>
          Aspire to lead the nickel industry by setting standards in ethical
          practices and sustainability, developing innovative and advantageous
          products, and fostering wealth creation through strategic, long-term
          initiatives.
        </p>
      </div>
      <div className="flex flex-col items-start gap-md">
        <CustomHeader2>About the Company</CustomHeader2>
        <p>
          The NKL1 Token Company is a fully licenced and regulated company
          formed in Mauritius. Mauritius was chosen as the legal domicile of our
          company as the Island is one of the few jurisdictions with a fully
          compliant and legal framework for crypto companies.‍
          <br />
          <br />
          At the core of our company&apos;s vision lies the aspiration to emerge
          as a world-renowned leader in revolutionising the nickel-based product
          landscape, while fostering a vibrant community that drives positive
          transformation in the commodities sector. Through the united efforts
          of our exceptional team, visionary industry leaders, and dedicated
          community, we have set our sights on turning this vision into a
          tangible reality within a five-year timeframe. By investing in our
          journey, you become part of a remarkable opportunity to witness the
          realisation of ground-breaking achievements and impactful change on a
          global scale.
        </p>
      </div>
    </SectionContainer>
  );
}
