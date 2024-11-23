import { create } from "zustand"

interface ImageState {
  selectedImage: string | null
  setSelectedImage: (imageUrl: string | null) => void
  selectedVideo: string | null
  setSelectedVideo: (videoSrc: string | null) => void
  isDialogOpen: boolean
  setDialogOpen: (isOpen: boolean) => void
}

export const useImageStore = create<ImageState>()((set) => ({
  selectedImage: null,
  setSelectedImage: (imageUrl: string | null) =>
    set({ selectedImage: imageUrl }),
  selectedVideo: null,
  setSelectedVideo: (videoSrc: string | null) =>
    set({ selectedVideo: videoSrc }),
  isDialogOpen: false,
  setDialogOpen: (isOpen: boolean) => set({ isDialogOpen: isOpen }),
}))
