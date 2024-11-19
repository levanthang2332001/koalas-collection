import Image from "next/image";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";

const calSans = localFont({
  src: "../fonts/CalSans.woff",
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <main className="w-full h-full">
        <section className="relative w-full h-[calc(100vh-200px)]">
          <Image
            src="/pic/gradient.jpg"
            alt="gradient"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bottom-[10rem] flex flex-col items-center justify-center z-20">
            <h1 className={`${calSans.className} text-5xl text-[#131740] dark:text-white lg:text-6xl xl:text-7xl `}>
              Discover, Collect & Sell <br/>
              <span className=" animate-gradient">Creative NFTs</span>
            </h1>
          </div>
          <div className="absolute bottom-60 w-52 flex justify-center items-center z-20">
            <Input placeholder="Search by NFTs" type="text" inputMode="search" className="h-14 rounded-2xl bg-white placeholder:font-calSans placeholder:text-gray-400"/>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
