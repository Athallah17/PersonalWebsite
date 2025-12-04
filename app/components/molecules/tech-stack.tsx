"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const techList = [
  "nextjs",
  "react",
  "nodejs",
  "typescript",
  "javascript",
  "go",
  "postgres",
  "mysql",
  "tailwind",
  "git",
];

export default function TechStackCarousel() {
  // Much smoother autoplay config
  const autoplay = useRef(
    Autoplay({
      delay: 1, // *continuous movement* (1ms trick)
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

return (
    <div className="w-full py-10 overflow-hidden select-none">
        <Carousel
            plugins={[autoplay.current]}
            opts={{
                align: "start",
                loop: true,
                dragFree: true, // smooth and buttery movement
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-3 animate-scroll">
                {/** Duplicate list → real infinite loop */}
                {techList.concat(techList, techList).map((t, index) => (
                    <CarouselItem
                        key={`${t}-${index}`}
                        className="pl-3 basis-1/4 sm:basis-1/6 md:basis-1/8 lg:basis-1/12"
                    >
                        <div className="flex justify-center items-center">
                            <img
                                src={`https://skillicons.dev/icons?i=${t}`}
                                alt={t}
                                className="w-20 h-20 sm:w-20 sm:h-20 md:w-18 md:h-18 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </div>
);
}
