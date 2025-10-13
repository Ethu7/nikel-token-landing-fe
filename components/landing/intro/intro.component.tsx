"use client";

import Image from "next/image";
import Link from "next/link";
import { SlArrowDownCircle } from "react-icons/sl";
import CustomButton from "@/components/common/custom-button.component";
import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";

export default function Intro() {
  return (
    <div className="relative w-full pt-[100px] flex flex-col items-center min-h-screen">
      <Image
        className="absolute w-[120px] sm:w-[420px] top-[120px] left-0 z-1"
        src="/stone-1.png"
        alt="nickel"
        width={419}
        height={585}
      />
      <SectionContainer className="max-w-[1600px] z-10">
        <div className="flex-1 flex flex-wrap gap-2xl items-center">
          <div className="flex-1 flex flex-col items-start gap-lg mt-2xl sm:mt-0 sm:gap-xl px-xl sm:p-2xl">
            <CustomHeader1>THE FRACTIONALISATION OF OPPORTUNITY</CustomHeader1>
            <p className="text-onBackgroundSecondary">
              An interactive community developing innovations with Nickel
            </p>
            <div className="flex flex-row gap-md items-center">
              <Image
                src="/landing/intro/community_members.png"
                alt="community_members"
                width={110}
                height={56}
              />
              <div>
                <p className="text-3xl">17K+</p>
                <p className="text-onBackgroundSecondary">Community memebers</p>
              </div>
            </div>
            <Link href="/#welcome">
              <CustomButton onClick={() => {}}>Get Started</CustomButton>
            </Link>
          </div>
          <Image
            className="object-fill flex-1 min-w-[200px] max-w-[300px] sm:max-w-[1000px]"
            src="/landing/intro/coin.png"
            alt="intro"
            width={884}
            height={898}
          />
        </div>
        <div className="flex-1" />
        <Link href="#welcome" className="mb-lg">
          <SlArrowDownCircle className="text-4xl sm:text-6xl text-onBackgroundSecondary hover:text-onBackground" />
        </Link>
      </SectionContainer>
    </div>
  );
}
