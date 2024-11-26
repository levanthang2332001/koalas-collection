'use client'
import React , { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "@/components/ui/button"
import { MdOutlineQuestionMark } from "react-icons/md";


const calSans = localFont({
  src: "../fonts/CalSans.woff",
  display: "swap",
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
        "flex w-full flex-col justify-between items-center px-4 py-2 gap-4 md:px-8 md:py-4 bg-transparent fixed top-0 z-50",
        calSans.className,
        isScrolled ? 'bg-white/80 backdrop-blur-md dark:bg-black/80' : 'bg-transparent'
    )}>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-1 items-center justify-center md:flex-1">
          <div className="pr-10 md:border-r-2 md:border-neutral-200">
            <Image
              src="https://placehold.co/200x200.png"
              alt="logo"  
              width={50}
              height={50}
            />
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-[12] flex flex-none flex-row gap-2  border-t-2 px-4 py-2 bg-transparent md:static md:w-auto md:gap-12 md:border-none md:shadow-none">
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Mint</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Auction</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Stats</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">About</a>
          </div>
        </div>
        <div className="flex flex-none flex-row items-center justify-end gap-5 text-gray-600">
            <Button variant="outline" size='icon' className="rounded-full">
              <a className="text-black">
                <MdOutlineQuestionMark className="text-gray-400" />
              </a>
            </Button>
            <ConnectButton 
              chainStatus="full" 
              showBalance={true} 
              accountStatus={"avatar"}
            />
        </div>
      </div>
    </header>
  );
}
