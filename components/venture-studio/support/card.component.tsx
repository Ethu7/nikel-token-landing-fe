import { MdSupportAgent } from "react-icons/md";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap-reverse items-center bg-container rounded-xl p-md gap-sm">
      <p className="max-w-[200px] text-sm md:text-lg">{children}</p>
      <MdSupportAgent className="min-w-[30px] text-4xl md:text-6xl" />
    </div>
  );
}
