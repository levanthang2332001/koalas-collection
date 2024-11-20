import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Artwork {
    id: number;
    artist: string;
}

const works: Artwork[] = [
    {
      id: 1,
      artist: "Ornella Binni",
    },
    {
      id: 2,
      artist: "Tom Byrom",
    },
    {
      id: 3,
      artist: "Vladimir Malyavko",
    },
  ]
export default function HorizontalScrollingCard() {
    return (
        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((artwork) => (
            <figure key={artwork.artist} className="shrink-0">
              <div className="overflow-hidden rounded-none">
                <Image
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{" "}
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
}
