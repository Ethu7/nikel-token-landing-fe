"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomHeader1 from "../common/custom-header-1.component";
import { useEffect, useState } from "react";

export default function CustomDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

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
      className={`flex flex-col gap-xs items-center ${
        pathname === item.route
          ? "text-onBackground"
          : "text-onBackgroundSecondary"
      } hover:text-primary`}
    >
      <p className="text-center whitespace-nowrap">{item.title}</p>
      {pathname === item.route ? (
        <div className="bg-primary h-[4px] w-[100%] rounded-xl" />
      ) : null}
    </Link>
  ));

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  return (
    <div
      className={`absolute top-0 right-0 z-20 w-full bg-black bg-opacity-50 h-screen ${
        open ? "animate-fadeIn" : "animate-fadeOut"
      } ${visible ? "flex" : "hidden"} flex-col items-end`}
      onAnimationEnd={() => {
        if (!open) setVisible(false);
      }}
      onClick={() => {
        setOpen(false);
      }}
    >
      <nav
        className={`bg-container w-[200px] h-screen flex flex-col items-start p-lg gap-md sm:text-2xl ${
          open ? "animate-slideIn" : "animate-slideOut"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex flex-wrap items-center gap-xl">
          <Link href="/" className="flex flex-col">
            <Image
              className="w-[50px]"
              src="/logo.png"
              alt="rasem-logo"
              width={52}
              height={48}
            />
          </Link>
          <CustomHeader1>NKL1 Token</CustomHeader1>
        </div>
        <div className="h-3xl" />
        {navigationLinks}
      </nav>
    </div>
  );
}
