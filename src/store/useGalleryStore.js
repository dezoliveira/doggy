import { defineStore } from "pinia";

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    gallery: [],
    id: 0,
    createdAt: null
  }),   

  actions: {
    addToGallery(image){
      this.gallery.push({
        image,
        id: this.id++,
        createdAt: new Date()
      })

      console.log(this.gallery)
    }
  }
})