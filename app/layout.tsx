import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer.component";
import DrawerWrapper from "@/components/header/header-wrapper.component";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "NKL1 Token",
  description:
    "Welcome to NKL1 Token. Unlock the potential of Nickel innovation with us. Our platform democratizes opportunities, allowing you to own a share of the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`dark-theme ${bebasNeue.variable} ${poppins.variable} antialiased`}
      >
        <DrawerWrapper className="relative font-poppins">
          {children}
          <Footer />
        </DrawerWrapper>
      </body>
    </html>
  );
}
