import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";
import Image from "next/image";
import CustomHeader3 from "@/components/common/custom-header-3.component";

export default function Footwear() {
  return (
    <SectionContainer className="w-full max-w-[1600px] text-sm md:text-xl">
      <CustomHeader1>FOOTWEAR</CustomHeader1>
      <div className="flex flex-wrap gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_5.png"
          alt="platform"
          width={600}
          height={600}
        />
        <p className="flex-1">
          <CustomHeader3>The Opportunity</CustomHeader3>
          <br />
          Nickel based materials in footwear will considerably improve fit,
          comfort, and durability in a diverse array of applications: sport,
          leisure or protective work shoes.
          <br />
          The footwear industry has used traditional materials such as rubber,
          leather, and synthetic fibres. These materials have disadvantages,
          including poor durability, poor fittings, and discomfort.
          <br />
          <br />
          <CustomHeader3>The Competitive Advantage</CustomHeader3>
          <br />
          Nickel mixed with other metals makes an excellent material for the
          manufacture of footwear. Its super elastic nature to retain its
          initial shape after being subjected to heat or pressure allows
          nickel-based shoes to conform to the wearer’s foot, providing a better
          fit and enhanced comfort. Nickel-based footwear has a broad range of
          potential applications, including Sports shoes (for better support,
          flexibility, and comfort). Industrial shoes (for better comfort and
          durability) and Children’s shoes (for easy fit for their developing
          feet).
        </p>
      </div>
      <div className="flex flex-wrap-reverse gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_6.png"
          alt="platform"
          width={600}
          height={600}
        />
        <div>
          <p className="flex-1">
            <CustomHeader3>The Distinctive Benefits</CustomHeader3>
            <br />
          </p>
          <ul className="list-inside list-disc">
            <li>
              They are more comfortable and lighter than traditional shoes.
            </li>
            <li>
              The shoes can reform to the wearer’s feet, offering a better fit.
            </li>
            <li>
              They last much longer than traditional shoes, reducing the
              long-term cost for consumers.
            </li>
            <li>
              They can potentially offer health benefits, especially for
              children and growing feet.
            </li>
            <li>They are eco-friendly.</li>
          </ul>
        </div>
      </div>
      <p>
        <CustomHeader3>Some Market Insights</CustomHeader3>
        <br />
        The global footwear market was worth $365.5 billion in 2020, with a 3.7%
        growth rate forecast from 2021 to 2028. The footwear industry is
        dominated by the United States and developing countries. The footwear
        market in the United States was estimated at $85.8 billion in 2020, with
        a 4.0% growth rate expected from 2021 to 2028. The footwear market in
        developing countries is expected to reach $214.2 billion by 2027.
        Typically an innovation in this field would be able to generate revenues
        in licensing that could represent 2 to 3% of this market.
        <br />
        <br />
        <CustomHeader3>Solid Collaborations and Partnership</CustomHeader3>
        <br />
        The creation of footwear has immense potential for innovation. Designers
        can develop shoe styles and shapes that were previously unattainable
        with standard materials with its shape memory and elastic qualities.
        Collaboration with the Venture Studio and other stakeholders will enable
        more designers and innovators to participate in the creation of new and
        sustainable products. Partnerships through ingredient licensing can be
        contracted with leading companies in each of the market in the sport
        area, lifestyle and personal protection equipment opening the door to
        considerable revenue streams through royalties based on sales.
      </p>
    </SectionContainer>
  );
}
