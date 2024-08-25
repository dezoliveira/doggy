import { defineStore } from "pinia";

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    images: [],
    id: 0,
    createdAt: null
  }),

  persist: true,

  actions: {
    addToGallery(image){
      console.log(image)
      this.images.push({
        image,
        id: this.id++,
        createdAt: new Date()
      })
    }
  }
})