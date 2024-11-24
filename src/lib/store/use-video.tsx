import { create } from "zustand"

interface VideoState {
  selectedVideo: string | null
  setSelectedVideo: (videoSrc: string | null) => void
  isDialogOpen: boolean
  setDialogOpen: (isOpen: boolean) => void
}

export const useVideoStore = create<VideoState>()((set) => ({
  selectedVideo: null,
  setSelectedVideo: (videoSrc: string | null) =>
    set({ selectedVideo: videoSrc }),
  isDialogOpen: false,
  setDialogOpen: (isOpen: boolean) => set({ isDialogOpen: isOpen })
}))
