"use client"

import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useImageStore } from "@/lib/store/use-image"
import Image from "next/image"

export interface ImageViewerProps {
  imageUrl?: string
}

export function ImageViewer({ imageUrl }: ImageViewerProps) {
  const [isImageLoading, setImageLoading] = React.useState(true)
  const { setDialogOpen, isDialogOpen, selectedImage, setSelectedImage } =
    useImageStore()

  function handleImageClick(url: string) {
    setSelectedImage(url)
    setDialogOpen(true)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      {imageUrl && (
        <DialogTrigger>
          <div
            className="rounded-xl border border-muted overflow-hidden cursor-pointer mt-2.5"
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt="ScreenShort"
              width={1000}
              height={1000}
              sizes="100vw"
              className="rounded-xl"
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </DialogTrigger>
      )}

      <DialogContent className="w-full max-w-screen-lg p-0 sm:rounded-xl overflow-hidden">
        {selectedImage && (
          <Image
            unoptimized
            alt="ScreenShort"
            src={selectedImage}
            width={1000}
            height={1000}
            className="object-cover h-auto w-full object-center"
            style={{
              WebkitFilter: isImageLoading ? "blur(8px)" : "none",
              transition: "all 0.5s ease",
            }}
            onLoad={() => setImageLoading(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
