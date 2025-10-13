export default function CustomHeader1({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-3xl sm:text-7xl font-bebasNeue ${className}`}>
      {children}
    </h1>
  );
}
