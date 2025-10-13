import Image from "next/image";

import ContactForm from "@/components/common/contact-form.component";
import CustomHeader1 from "@/components/common/custom-header-1.component";

export default function JoinUs() {
  return (
    <div className="relative w-full flex flex-col items-center mt-3xl">
      <Image
        className="absolute w-[130px] sm:w-[430px] top-[120px] sm:top-[-120px] left-0"
        src="/stone-2.png"
        alt="nickel"
        width={430}
        height={811}
      />
      <Image
        className="absolute w-[90px] sm:w-[370px] top-[180px] sm:top-[180px] right-0"
        src="/stone-3.png"
        alt="nickel"
        width={373}
        height={589}
      />
      <div
        id="join-us"
        className="flex-1 px-xl sm:px-2xl max-w-[1200px] flex flex-col gap-lg sm:gap-xl items-center pb-2xl z-10"
      >
        <CustomHeader1>
          <span className="text-primary">JOIN</span> THE{" "}
          <span className="text-primary">NKL1 Token</span> COMMUNITY
        </CustomHeader1>
        <p className="text-onBackgroundSecondary text-center mb-xl">
          Join our community and shape the future of Nickel-based products.
          We're looking for passionate individuals who are eager to share their
          expertise, connect with like-minded innovators, and drive the
          advancement of this exciting industry. Join us today and be a catalyst
          for change!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
