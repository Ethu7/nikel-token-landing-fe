"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "../common/custom-button.component";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";

export default function Header({
  setDrawerOpen,
}: {
  setDrawerOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  const navigationItems = [
    { route: "/", title: "Home" },
    { route: "/the-NKL1-token", title: "The NKL1 Token" },
    { route: "/about-us", title: "About Us" },
    { route: "/platform", title: "Platform" },
    { route: "/venture-studio", title: "Venture Studio" },
    { route: "/blog", title: "Blog" },
  ];

  const navigationLinks = navigationItems.map((item) => (
    <Link
      key={item.route}
      href={item.route}
      className={`flex-1 flex flex-col gap-xs items-center ${
        pathname === item.route
          ? "text-onBackground"
          : "text-onBackgroundSecondary"
      } hover:text-primary`}
    >
      <p className="text-center whitespace-nowrap">{item.title}</p>
      {pathname === item.route ? (
        <div className="bg-primary h-[4px] w-[50%] rounded-xl" />
      ) : null}
    </Link>
  ));

  return (
    <header className="w-full absolute bg-transparent shadow-md flex flex-col items-center p-xl z-20">
      <div className="max-w-[1400px] w-full flex flex-row items-center">
        <Link href="/" className="hidden md:flex flex-col">
          <Image
            className="w-[50px]"
            src="/logo.png"
            alt="rasem-logo"
            width={52}
            height={48}
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1" />
        <nav className="hidden md:flex flex-row gap-xl sm:text-2xl">
          {navigationLinks}
        </nav>
        <div className="hidden md:flex flex-1" />
        <Link href="#join-us" className="flex flex-col">
          <CustomButton onClick={() => {}}>Join Us</CustomButton>
        </Link>
        <div className="flex md:hidden flex-1" />
        {/* Mobile Menu Button */}
        <button className="flex md:hidden" onClick={(e) => setDrawerOpen(true)}>
          <IoIosMenu className="text-4xl sm:text-6xl text-onBackground" />
        </button>
      </div>
    </header>
  );
}
