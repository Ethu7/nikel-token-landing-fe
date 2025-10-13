import SectionContainer from "@/components/common/section-container.component";
import CustomHeader1 from "../../common/custom-header-1.component";
import CustomHeader2 from "../../common/custom-header-2.component";
import Image from "next/image";

export default function Intro() {
  return (
    <SectionContainer className="pt-[120px] md:pt-[200px]">
      <div className="flex flex-wrap gap-xl sm:gap-2xl">
        <div className="flex flex-col gap-md">
          <CustomHeader2>What is The NKL1 Token?</CustomHeader2>
          <p>
            The NKL1 Token offers exclusive membership in a community
            centered on fractionalized investment opportunities and nickel-based
            innovations. As a member, you join an interactive community
            committed to driving impactful change through innovative products,
            services, and solutions.
          </p>
        </div>
        <div className="flex flex-col gap-md">
          <CustomHeader2>Why should I have a NKL1 Token?</CustomHeader2>
          <p>
            Why should I have a NKL1 Token? Unlock exclusive access to
            cutting-edge nickel-related innovations within our diverse expert
            community. Collaborate with fellow members to co-create impactful
            products and solutions. Earn rewards, additional tokens, and
            exclusive benefits through active participation in our dynamic
            ecosystem. Join us and lead the charge in shaping the future of
            nickel technology.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-md">
        <CustomHeader1 className="text-center">The Function of The NKL1 Token.</CustomHeader1>
        <Image
          className="self-center bg-white rounded-xl"
          src="/NKL1-token/article-second.svg"
          alt="block_scheme"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex-1 flex flex-col gap-xl sm:gap-2xl">
        <CustomHeader1>The Benefits of The NKL1 Token.</CustomHeader1>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            Innovative Frontiers:
          </CustomHeader2>
          <p>
            Gain immediate entry to The NKL1 Token Innovation Centre, your
            gateway to pioneering ideas and strategic partnerships that set new
            industry standards.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            Wealth Generation:
          </CustomHeader2>
          <p>
            Activate new streams of passive income by earning tokens or
            sub-tokens through active participation in our community
            initiatives, offering a smart way to build wealth.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            Wealth Generation:
          </CustomHeader2>
          <p>
            Activate new streams of passive income by earning tokens or
            sub-tokens through active participation in our community
            initiatives, offering a smart way to build wealth.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            Elite Networking:
          </CustomHeader2>
          <p>
            Gain exclusive early access and enjoy discounts on innovative
            nickel-based products, while also having the opportunity to showcase
            your own innovations within our dynamic marketplace.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            Strategic Impact:
          </CustomHeader2>
          <p>
            Play a decisive role in our innovation assessment team, influencing
            which new technologies and innovations we champion, steering the
            industry toward a brighter future.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">
            VIP Experiences:
          </CustomHeader2>
          <p>
            Relish in exclusive invitations to premier events, conferences, and
            investment opportunities. Experience first-hand the perks of
            airdrops and acceleration programs that fast-track success.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:gap-xl">
          <CustomHeader2 className="min-w-[220px]">Green Legacy:</CustomHeader2>
          <p>
            Be an integral part of our mission to foster a sustainable,
            eco-friendly world. Your involvement in The NKL1 Token Community
            directly contributes to environmental stewardship.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
