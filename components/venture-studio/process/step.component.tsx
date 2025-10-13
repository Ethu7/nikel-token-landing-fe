import { MdLightbulbOutline } from "react-icons/md";

export default function Step({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row border-y-[2px] border-onBackgroundSecondary p-md sm:p-lg items-center gap-sm md:gap-md text-onBackground">
      <MdLightbulbOutline className="text-2xl sm:text-4xl" />
      <b className="text-md md:text-xl">{children}</b>
    </div>
  );
}
