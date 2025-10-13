import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";
import Image from "next/image";

export default function Opportunities() {
  return (
    <SectionContainer className="w-full pt-[120px] md:pt-[200px] max-w-[1600px] text-sm md:text-xl">
      <CustomHeader1>Opportunities</CustomHeader1>
      <div className="flex flex-wrap gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_1.png"
          alt="platform"
          width={600}
          height={600}
        />
        <p className="flex-1">
          Welcome to the NKL1 Platform, an exclusive gateway for token
          holders to unlock a world of opportunities with The NKL1 Token
          Company. As a valued member of our community, you hold the key to
          accessing the unique benefits and innovative ventures that The
          NKL1 Token brings to the forefront. Join us in exploring the
          possibilities and maximizing the potential of your investment. The
          NKL1 Platform will offer token holders a unique opportunity to
          engage directly with the forefront of innovation. You can connect with
          leading experts, discuss emerging opportunities, and actively
          contribute to development projects. Your voice matters here, you will
          have the power to vote on important decisions and truly become a part
          of our team. The platform will give you the flexibility to select from
          various investment opportunities, allowing you to decide how and when
          you want to get involved. With features like interactive chat groups,
          up-to-date content, news, research, and marketing insights, it's
          designed to provide comprehensive participation at all levels. This
          ensures a rich, engaging, and collaborative experience for every token
          holder.
        </p>
      </div>
      <div className="flex flex-wrap-reverse gap-md sm:gap-lg">
        <Image
          className="rounded-2xl flex-1 object-cover max-h-[400px]"
          src="/platform/platform_2.png"
          alt="platform"
          width={600}
          height={600}
        />
        <p className="flex-1">
          The NKL1 Token Company is excited to unveil three promising
          opportunities we've identified for our community. Continuously on the
          lookout for more innovative projects, we're committed to exploring and
          evaluating their potential. This introduction serves as your gateway
          to these groundbreaking ideas. As token holders, you have the unique
          privilege to select any or all of these opportunities, playing a
          crucial role in transforming these visions into reality. Join us in
          shaping the future and see where our collective choices will lead.
        </p>
      </div>
    </SectionContainer>
  );
}
