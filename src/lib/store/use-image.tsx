import { create } from "zustand"

interface ImageState {
  selectedImage: string | null
  isDialogOpen: boolean
  setSelectedImage: (image: string | null) => void
  setDialogOpen: (isOpen: boolean) => void
}

export const useImageStore = create<ImageState>()((set) => ({
  selectedImage: null,
  isDialogOpen: false,
  setSelectedImage: (image: string | null) => set({ selectedImage: image }),
  setDialogOpen: (isOpen: boolean) => set({ isDialogOpen: isOpen }),
}))
