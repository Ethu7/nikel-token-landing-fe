export default function CustomHeader2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-2xl sm:text-3xl font-bebasNeue ${className}`}>
      {children}
    </h2>
  );
}
