export default function SectionContainer({
  children,
  className = "",
  id = undefined,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string | undefined;
}) {
  return (
    <div
      id={id}
      className={`w-full flex-1 flex flex-col gap-2xl items-center max-w-[1200px] px-xl sm:px-2xl ${className}`}
    >
      {children}
    </div>
  );
}
