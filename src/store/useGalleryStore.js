import { defineStore } from "pinia";

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    images: [],
    id: 0,
    createdAt: null
  }),   

  actions: {
    addToGallery(image){
      this.images.push({
        image,
        id: this.id++,
        createdAt: new Date()
      })

      console.log(this.images)
    }
  }
})