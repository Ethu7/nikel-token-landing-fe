import { twMerge } from "tailwind-merge";

export default function CustomButton({
  onClick,
  type = "button",
  className,
  children,
  disabled = false,
}: {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={(e) => onClick()}
      className={twMerge(
        "font-medium text-md sm:text-xl py-xs sm:py-sm px-lg sm:px-xl sm:min-w-[200px] rounded-3xl text-onPrimary bg-primary",
        className
      )}
    >
      {children}
    </button>
  );
}
