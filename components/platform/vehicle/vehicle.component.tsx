import CustomHeader1 from "@/components/common/custom-header-1.component";
import CustomHeader3 from "@/components/common/custom-header-3.component";
import SectionContainer from "@/components/common/section-container.component";
import Image from "next/image";

export default function Vehicle() {
  return (
    <SectionContainer className="w-full max-w-[1600px] text-sm md:text-xl">
      <CustomHeader1>VEHICLE TYRES</CustomHeader1>
      <div className="flex flex-wrap gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_3.png"
          alt="platform"
          width={900}
          height={600}
        />
        <p className="flex-1 min-w-[200px]">
          <CustomHeader3>The Opportunity</CustomHeader3>
          <br />
          Tyres are a crucial component of every vehicle and a key element in
          safety. Tyres durability affects the performance and operational costs
          of large vehicles such as trucks and buses or off-road vehicles.
          Traditional rubber tyres wear and tear easily, and they contribute to
          environmental damage when replaced frequently.
          <br />
          Using Nitinol materials in tyre manufacture, NASA was able to make
          more durable, cost-efficient, and eco-friendly tyres for its Mars
          rover vehicle. This landmark initiative in tyre production has opened
          the door to endless possibilities.
          <br />
          <br />
          <CustomHeader3>Development of Nitinol Tyres</CustomHeader3>
          <br />
          NASA first created Nitinol tyres for Mars exploration missions, where
          the rough terrain and high- temperature variations demanded a
          long-lasting and dependable tyre solution. Following successful
          testing, the technology was further developed for large vehicles such
          as trucks and buses, agricultural vehicles, and defence vehicles.
        </p>
      </div>
      <div className="flex flex-wrap-reverse gap-md sm:gap-lg">
        <div className="flex-1 flex flex-col">
          <CustomHeader3>The Distinctive Benefits</CustomHeader3>
          <br />
          <ul className="list-inside list-disc">
            <li>
              Adaptability to all terrain; nitinol tyres can automatically
              return to their original shape and size after a deformation.
            </li>
            <li>
              They are durable and have longer lifespan than traditional rubber
              tyres which has a beneficial impact on safety, ecology and cost.
            </li>
            <li>
              Do not puncture and are more robust and will require fewer
              replacement over time
            </li>
            <li>
              These tyres help reduce the environmental damage caused by burning
              discarded rubber tyres.
            </li>
          </ul>
        </div>
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_4.png"
          alt="platform"
          width={1000}
          height={900}
        />
      </div>
      <p>
        <br />
        <CustomHeader3>Some Market Insights</CustomHeader3>
        <br />
        Large tyres, such as those used on trucks and buses, have a sizable
        market that is expected to expand further. According to Allied Market
        Research, the worldwide commercial vehicle tyre market was valued at
        $182.3 billion in 2020 and is expected to reach $312.1 billion by 2030.
        <br />
        By developing this technology and creating patents and licences, one
        could expect to claim 1 to 2% of the global tyre market whilst making a
        stronger impact in specific markets such as defence, commercial trucks
        and buses.
        <br />
        <CustomHeader3>Solid Collaborations and Partnership</CustomHeader3>
        <br />
        To develop and manufacture Nitinol tyres requires collaboration between
        industry specialist, science, and research, distribution and marketing.
        This can be achieved and brought to market by collaborating with
        well-known Tyre manufacturers with proven production methods and wider
        distribution channels. Our expertise and connections within the industry
        allows this to become a reality.
        <br />
        Such exclusive development will be applicable to most industries using
        tyres, from transport to aeronautic to defence to automobile and 2 wheel
        vehicles and will enable us to operate across the board.
      </p>
    </SectionContainer>
  );
}
