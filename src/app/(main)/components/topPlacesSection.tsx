import { AvatarImages } from "@/components/avatars/avatar";
import Image from "next/image";

const TopPlaces = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function TopPlacesSection() {
  return (
    <section className="relative py-24">
      <picture>
        <Image
          src="/pic/gradient_light.jpg"
          alt="gradient"
          fill
          className="object-cover"
        />
      </picture>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className={`text-3xl font-bold text-[#131740] z-10 font-calSans`}>
            Top places to sell
          </h1>
          <div className="grid grid-cols-1 gap-3 pt-6 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4 ">
            {TopPlaces.map((place) => (
              <div
                key={place}
                className="flex justify-center items-stretch rounded-2xl border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700 z-20"
              >
                <AvatarImages className="h-12 w-12 rounded-sm" />
                <a className="text-sm font-calSans font-bold"> Hello to you</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
