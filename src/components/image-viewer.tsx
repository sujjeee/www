"use client"

import React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useImageStore } from "@/lib/store/use-image"

export function ImageViewer() {
  const [isImageLoading, setImageLoading] = React.useState(true)
  const { setDialogOpen, isDialogOpen, selectedImage } = useImageStore()

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="w-full max-w-screen-lg p-0 sm:rounded-xl overflow-hidden">
        {selectedImage && (
          <img
            src={selectedImage}
            alt="tapify ScreenShorts"
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
