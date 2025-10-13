import Image from "next/image";

export default function InnovationCard({
  label,
  text,
  imgSrc,
  imgAlt = "innovation",
  imgWidth,
  imgHeight,
}: {
  label: string;
  text: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth: number;
  imgHeight: number;
}) {
  return (
    <div className="relative minx-w-[350px] min-h-[200px] max-w-[700px] max-h-[400px] overflow-hidden rounded-[40px]">
      <Image
        className="object-none h-full"
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 rounded-lg"></div>
      <div className="absolute top-0 left-0 py-xs px-lg rounded-tl-[40px] rounded-br-[40px] bg-primary text-onPrimary flex flex-col items-center justify-items-center text-1xl z-10">
        {label}
      </div>
      <p className="w-full truncate absolute bottom-4 px-lg text-3xl z-10">
        {text}
      </p>
    </div>
  );
}
