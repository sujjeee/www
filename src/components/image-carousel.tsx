"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { useWindow } from "@/hooks/use-window"
import { useImageStore } from "@/lib/store/use-image"

export interface ImageCarouselProps {
  imageUrls: string[]
}

export function ImageCarousel({ imageUrls }: ImageCarouselProps) {
  const { isDesktop } = useWindow()
  const [isImageLoading, setImageLoading] = React.useState(true)
  const { setSelectedImage, setDialogOpen } = useImageStore()

  function handleImageClick(url: string) {
    setSelectedImage(url)
    setDialogOpen(true)
  }

  return (
    <Carousel className="relative mt-2.5">
      <CarouselContent>
        {imageUrls.map((url, index) => (
          <CarouselItem key={index}>
            <div
              className="rounded-xl border border-muted overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(url)}
            >
              <Image
                src={url}
                unoptimized
                alt="Tapify ScreenShorts"
                width={1000}
                height={1000}
                sizes="100vw"
                className="rounded-xl"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                  objectPosition: "center",
                  WebkitFilter: isImageLoading ? "blur(8px)" : "none",
                  transition: "all 0.5s ease",
                }}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {isDesktop && (
        <>
          <CarouselPrevious
            variant={"ghost"}
            className="prose prose-neutral dark:prose-invert"
          />
          <CarouselNext
            variant={"ghost"}
            className="prose prose-neutral dark:prose-invert"
          />
        </>
      )}
    </Carousel>
  )
}
