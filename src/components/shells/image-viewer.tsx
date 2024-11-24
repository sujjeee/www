"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useImageStore } from "@/lib/store/use-image"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import Image from "next/image"
import React from "react"

export function ImageViewer() {
  const [isImageLoading, setImageLoading] = React.useState(true)
  const { setDialogOpen, isDialogOpen, selectedImage } = useImageStore()

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogTitle asChild>
        <VisuallyHidden.Root>Image Preview</VisuallyHidden.Root>
      </DialogTitle>
      <DialogContent className="w-full max-w-screen-lg p-0 sm:rounded-xl overflow-hidden">
        {selectedImage && (
          <Image
            // unoptimized
            alt="ScreenShort"
            src={selectedImage}
            width={1000}
            height={1000}
            className="object-cover h-auto w-full object-center"
            style={{
              WebkitFilter: isImageLoading ? "blur(8px)" : "none",
              transition: "all 0.5s ease"
            }}
            onLoad={() => setImageLoading(false)}
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
