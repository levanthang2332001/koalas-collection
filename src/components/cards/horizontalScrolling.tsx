'use client'

import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-creative';
import { env } from "process";

export interface Artwork {
  id: number;
  artist: string;
  art: string;
}
const METADATA_URL = process.env.NEXT_PUBLIC_IPFS_IMAGE_URL || ""

const HorizontalScrollingCard = () => {
  const [works, setWorks] = React.useState<Artwork[]>([]);

  React.useEffect(() => {
    setWorks([
      { id: 1, artist: "John Doe 1", art: `${METADATA_URL}/1.png` },
      { id: 2, artist: "Jane Doe 2", art: `${METADATA_URL}/2.png` },
      { id: 3, artist: "John Doe 3", art: `${METADATA_URL}/3.png` },
      { id: 4, artist: "Jane Doe 4", art: `${METADATA_URL}/4.png` },
      { id: 5, artist: "Jim Doe 5", art: `${METADATA_URL}/5.png` },
    ]);
  }, []);

  const defaultIndex = works.findIndex(work => work.id === 3);

  return (
    <div className="relative px-6 pb-6">
      <Swiper
        effect={'coverflow'}
        slidesPerView="auto"
        spaceBetween={16}
        freeMode={true}
        mousewheel={false}
        modules={[FreeMode, Mousewheel, EffectCoverflow]}
        className="w-full max-w-full px-4"
        centeredSlides={true}
        // centeredSlidesBounds={true}
        initialSlide={3}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {works.map((artwork) => (
          <SwiperSlide key={artwork.id} className="max-w-fit">
            <figure className="shrink-0 rounded-2xl">
              <div className="overflow-hidden">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-[430px] w-full object-cover swiper-lazy rounded-2xl focus:pointer-events-auto"
                  width={379}
                  height={430}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by {artwork.id}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HorizontalScrollingCard
