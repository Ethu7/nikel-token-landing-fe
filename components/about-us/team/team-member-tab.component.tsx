import Image from "next/image";
import CustomButton from "../../common/custom-button.component";

export default function TeamMemberTab({
  imgSrc,
  imgWidth = 160,
  imgHeight = 160,
  imgAlt = "Team Member",
  name,
  title,
  selected,
  onClick,
}: {
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
  imgAlt?: string;
  name: string;
  title: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="min-w-[220px] flex flex-row items-center gap-sm sm:gap-lg rounded-2xl hover:bg-container"
      onClick={(e) => onClick()}
    >
      <Image
        className="object-cover min-h-[40px] h-[40px] min-w-[40px] w-[40px] sm:min-h-[50px] sm:h-[50px] sm:min-w-[50px] sm:w-[50px] rounded-full"
        src={imgSrc}
        width={imgWidth}
        height={imgHeight}
        alt={imgAlt}
      />
      <div className="flex flex-col items-start gap-xs">
        <h2
          className={`text-start text-xl sm:text-2xl sm:font-medium ${
            selected ? "text-primary" : ""
          }`}
        >
          {name}
        </h2>
        <p className="hidden sm:block text-start text-onBackgroundSecondary">
          {title}
        </p>
      </div>
    </button>
  );
}
