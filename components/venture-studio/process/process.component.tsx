import CustomHeader1 from "@/components/common/custom-header-1.component";
import SectionContainer from "@/components/common/section-container.component";
import Step from "./step.component";

export default function Process() {
  return (
    <SectionContainer>
      <CustomHeader1>The Process of Using the Venture Studio</CustomHeader1>
      <p>
        It takes just a few steps to use any of the exceptional services of the
        Venture Studio as a Nikel Token community member.
      </p>
      <div className="w-full flex flex-col gap-lg sm:gap-xl">
        <Step>1. Submitting your idea</Step>
        <Step>2. The Venture Studio’s Feedback</Step>
        <Step>3. Discuss your idea and plan with us</Step>
        <Step>4. Reviewing your Business Plan</Step>
        <Step>
          5. The Venture Studio will decide what support we can provide
        </Step>
      </div>
    </SectionContainer>
  );
}
