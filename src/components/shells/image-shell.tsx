"use client"

import { useImageStore } from "@/lib/store/use-image"
import Image from "next/image"
import React from "react"

export interface ImageShellProps {
  imageUrl: string
}

export function ImageShell({ imageUrl }: ImageShellProps) {
  const [isImageLoading, setImageLoading] = React.useState(true)
  const { setDialogOpen, setSelectedImage } = useImageStore()

  function handleImageClick(url: string) {
    setSelectedImage(url)
    setDialogOpen(true)
  }

  return (
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
        style={{
          WebkitFilter: isImageLoading ? "blur(8px)" : "none",
          transition: "all 0.5s ease"
        }}
        onLoad={() => setImageLoading(false)}
      />
    </div>
  )
}
