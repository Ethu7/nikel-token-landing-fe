export default function CustomHeader3({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <b className={`text-xl sm:text-2xl ${className}`}>{children}</b>;
}
