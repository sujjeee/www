"use client"

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { useVideoStore } from "@/lib/store/use-video"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"
import React from "react"

export interface VideoViewerProps {
  videoSrc?: string
}

export function VideoViewer({ videoSrc }: VideoViewerProps) {
  const { setDialogOpen, isDialogOpen, selectedVideo, setSelectedVideo } =
    useVideoStore()

  function handleVideoClick(url: string) {
    setSelectedVideo(url)
    setDialogOpen(true)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
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
      <DialogTitle asChild>
        <VisuallyHidden.Root>Video Preview</VisuallyHidden.Root>
      </DialogTitle>
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
      </DialogContent>
    </Dialog>
  )
}
