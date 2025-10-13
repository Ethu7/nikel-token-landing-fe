import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";
import Image from "next/image";
import CustomHeader3 from "@/components/common/custom-header-3.component";

export default function BodyArmor() {
  return (
    <SectionContainer className="w-full max-w-[1600px] text-sm md:text-xl">
      <CustomHeader1>BODY ARMOR</CustomHeader1>
      <div className="flex flex-wrap gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_7.png"
          alt="platform"
          width={600}
          height={600}
        />
        <p className="flex-1">
          <CustomHeader3>The Opportunity</CustomHeader3>
          <br />
          Body armour is essential for the safety and security of law
          enforcement officers, military personnel, and people in high-risk
          occupations. With Nickel’s unique qualities, a shape memory alloy
          consisting of Nickel and titanium has been proposed as a breakthrough
          material for body armour fabrication. The new body armour can provide
          better protection, more comfort, improved durability, and less weight.
          <br />
          <br />
          <CustomHeader3>The Competitive Advantage</CustomHeader3>
          <br />
          Conventional body armours are made of steel, ceramic, and Kevlar.
          These are materials with relatively heavy weights. Innovators found
          nickel as a perfect substitute for these materials without
          compromising quality. Nickel-based body armour is lighter, stronger,
          more flexible, and relatively cheaper to maintain. The innovators,
          manufacturing industry, science, and researchers are working together
          to increase the development of Nitinol body armour.
        </p>
      </div>
      <div className="flex flex-wrap-reverse gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_8.png"
          alt="platform"
          width={600}
          height={600}
        />
        <p className="flex-1">
          <CustomHeader3>The Distinctive Benefits</CustomHeader3>
          <br />
          <ul className="list-inside list-disc">
            <li>
              Safety: Nickel Titanium body armour are stronger and provide
              better protection.
            </li>
            <li>
              Lifesaving: They can absorb more energy than traditional armour,
              reducing the likelihood of injury or death.
            </li>
            <li>
              Agility and mobility: They are lighter and more comfortable to
              wear, reducing fatigue and increasing mobility.
            </li>
            <li>
              Cost effective: They last longer, displacing the need for
              replacements.
            </li>
            <li>
              Ecological: They are recyclable and reduces environmental
              pollution.
            </li>
          </ul>
        </p>
        <p>
          <CustomHeader3>Some Market Insights</CustomHeader3>
          <br />
          The global body armour market was worth USD 2.3 billion in 2020 and is
          predicted to increase at a CAGR of 4.5% between 2021 and 2028. Due to
          considerable demand from military and law enforcement personnel as
          well as regular citizens, it forms the main markets for body armour.
          <br />
          Through our technology, patents and licensing in this field could
          represent up to 5% of the current market.
          <br />
          <br />
          <CustomHeader3>Solid Collaborations and Partnership</CustomHeader3>
          <br />
          The creation of Body Armour has immense potential for innovation. The
          community can develop styles and strengths that were previously
          unattainable with its new potential. Collaboration with the Innovation
          Lab and its community will enable better designs and innovations in
          the creation of new and sustainable products. There are fewer players
          in this market and our connection are second to none to quickly make
          an impact and position our innovation as leading in this field.
        </p>
      </div>
    </SectionContainer>
  );
}
