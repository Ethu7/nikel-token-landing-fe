export default function PageContainer({
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
      className={`bg-background w-full min-h-screen text-onBackground text-lg sm:text-xl font-regular flex flex-col items-center gap-xl sm:gap-3xl ${className}`}
    >
      {children}
    </div>
  );
}
