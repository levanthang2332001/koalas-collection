import Image from "next/image";
import localFont from "next/font/local";
import { Input } from "@/components/ui/input";
import { Artwork } from "@/components/cards/horizontalScrolling";
import HorizontalScrollingCard from "@/components/cards/horizontalScrolling";
import Search from "@/components/searchs/search";
import CardTopPlaces from "@/components/cards/cardTopPlaces";
import TopPlacesSection from "./components/topPlacesSection";

const calSans = localFont({
  src: "../fonts/CalSans.woff",
  display: "swap",
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <section className="relative min-h-[calc(100vh-200px)]">
          <div>
            <div className="absolute inset-0">
              <Image
                src="/pic/gradient.jpg"
                alt="gradient"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="container mx-auto px-4 pt-16 relative">
              <div className="relative flex flex-col items-center justify-center pt-20 pb-32 z-20">
                <h1
                  className={`${calSans.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-[#131740] dark:text-white`}
                >
                  Discover, Collect & Sell <br />
                  <span className="animate-gradient">Creative NFTs</span>
                </h1>
                <Search />
              </div>
            </div>
            <div className="container mx-auto px-4 pb-16">
              <HorizontalScrollingCard />
            </div>
            <TopPlacesSection />
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
