"use client"

import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useImageStore } from "@/lib/store/use-image"
import Image from "next/image"

export interface ImageViewerProps {
  imageUrl?: string
  videoSrc?: string
}

export function ImageViewer({ imageUrl, videoSrc }: ImageViewerProps) {
  const [isImageLoading, setImageLoading] = React.useState(true)
  const [isVideoLoading, setVideoLoading] = React.useState(true)
  const {
    setDialogOpen,
    isDialogOpen,
    selectedImage,
    setSelectedImage,
    selectedVideo,
    setSelectedVideo,
  } = useImageStore()

  function handleImageClick(url: string) {
    setSelectedImage(url)
    setDialogOpen(true)
  }

  function handleVideoClick(url: string) {
    setSelectedVideo(url)
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
              unoptimized
              alt="Tapify ScreenShorts"
              width={1000}
              height={1000}
              sizes="100vw"
              className="rounded-xl"
              onLoad={() => setImageLoading(false)}
            />
          </div>
        </DialogTrigger>
      )}
      {videoSrc && (
        <DialogTrigger>
          <div
            className="rounded-xl border border-muted overflow-hidden cursor-pointer mt-2.5"
            onClick={() => handleVideoClick(videoSrc)}
          >
            <video
              src={videoSrc}
              controls={false}
              preload="metadata"
              playsInline
              className="rounded-xl w-full"
              muted
              autoPlay
              loop
            >
              <source src={videoSrc} type="video/mp4" />{" "}
              {/* Specify video format */}
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogTrigger>
      )}
      <DialogContent className="w-full max-w-screen-lg p-0 sm:rounded-xl overflow-hidden">
        {selectedVideo && (
          <video
            src={selectedVideo}
            controls={false}
            preload="metadata"
            playsInline
            className="rounded-xl w-full h-auto"
            muted
            autoPlay
            loop
          >
            <source src={videoSrc} type="video/mp4" />{" "}
            {/* Specify video format */}
            Your browser does not support the video tag.
          </video>
        )}
        {selectedImage && (
          <img
            src={selectedImage}
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
