"use client";

import Image from "next/image";
import Link from "next/link";
import CustomHeader2 from "../common/custom-header-2.component";
import { useState } from "react";
import { DownloadWhitePaperModal } from "./components";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <footer className="flex-1 flex flex-wrap bg-container p-xl sm:p-2xl z-20">
      <DownloadWhitePaperModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex flex-col gap-md max-w-[280px]">
        <Image src="/logo.png" alt="logo" width={52} height={48} />
        <CustomHeader2>THE FRACTIONALISATION OF OPPORTUNITY</CustomHeader2>
        <button type="button" onClick={() => setModalOpen(true)}>
          <p className="text-base text-onBackgroundSecondary hover:text-primary">
            Download NKL1 Token White Paper
          </p>
        </button>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col">
        <div className="flex-1" />
        <p className="text-base text-onBackgroundSecondary">
          © 2025 All Rights Reserved.
        </p>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-xs">
          <p className="text-base">Contact</p>
          <Link href="#">
            <p className="text-base">info@rasem.com</p>
          </Link>
        </div>
        <div className="flex flex-col gap-sm">
          <p className="text-base">Join us on Social Media</p>
          <div className="flex flex-row gap-md">
            <Link href="https://www.facebook.com/people/Nikel-Token/61556565191692/?mibextid=kFxxJD">
              <Image
                src="/social/facebook.png"
                alt="facebook"
                width={29}
                height={29}
              />
            </Link>
            <Link href="https://www.instagram.com/nikel.token">
              <Image
                src="/social/instagram.png"
                alt="instagram"
                width={29}
                height={29}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/nikeltoken/about/">
              <Image
                src="/social/linkedin.png"
                alt="linkedin"
                width={29}
                height={29}
              />
            </Link>
            <Link href="https://t.me/Nikel_Token">
              <Image
                src="/social/telegram.png"
                alt="telegram"
                width={29}
                height={29}
              />
            </Link>
            <Link href="https://x.com/nikel_token?s=20">
              <Image src="/social/x.png" alt="x" width={29} height={29} />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <Link href="/terms-and-conditions">
              <p className="text-base text-onBackgroundSecondary">
                Terms & Conditions
              </p>
            </Link>
            <Link href="/legal-notice">
              <p className="text-base text-onBackgroundSecondary">
                Legal Notice
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
