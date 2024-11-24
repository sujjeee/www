import { create } from "zustand"

interface ImageState {
  selectedImage: string | null
  setSelectedImage: (imageUrl: string | null) => void
  isDialogOpen: boolean
  setDialogOpen: (isOpen: boolean) => void
}

export const useImageStore = create<ImageState>()((set) => ({
  selectedImage: null,
  setSelectedImage: (imageUrl: string | null) =>
    set({ selectedImage: imageUrl }),
  isDialogOpen: false,
  setDialogOpen: (isOpen: boolean) => set({ isDialogOpen: isOpen })
}))
