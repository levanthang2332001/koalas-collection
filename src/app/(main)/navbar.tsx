import Image from "next/image";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import { Icon } from "@iconify/react"

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ["500"],
  variable: '--font-poppins',
});

export default function Navbar() {
  return (
    <header className={cn(
        "flex w-full flex-col justify-between items-center px-4 py-2 gap-4 md:px-8 md:py-4 bg-transparent fixed top-0 z-50",
        poppins.className
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
          <div className="fixed bottom-0 left-0 right-0 z-[12] flex flex-none flex-row gap-2  border-t-2 bg-white px-4 py-2 bg-transparent md:static md:w-auto md:gap-12 md:border-none md:shadow-none">
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Mint</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Auction</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">Stats</a>
            <a className="flex grow flex-col items-center justify-center px-[10px] py-1 md:p-0">About</a>
          </div>
        </div>
        <div className="flex flex-none flex-row items-center justify-end gap-5 text-gray-600">
            <Button variant="outline" size='icon' className="rounded-full">
              <a className="text-black">
                <Icon icon="vaadin:question" />
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
