<template>
  <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
    class="gallery-container"
  >
    <a
      v-for="img in images"
      :key="img.id"
      class="gallery-item"
      :data-src="img.image.message"
      :data-sub-html="renderSub(img)"
    >
      <img :src="img.image.message" class="img-responsive"/>
    </a>
  </lightgallery>
</template>
<script>
// Light Gallery
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

export default {
  components: {
    Lightgallery
  },

  props: {
    images: []
  },

  setup(props) {
    const images = props.images
    return (
      images
    )
  },

  data: () => ({
    plugins: [lgZoom, lgVideo],
  }),

  methods: {
    onInit: () => {
      console.log('lightGallery has been initialized');
    },

    onBeforeSlide: () => {
      console.log('calling before slide');
    },

    renderSub: (image) => {
      const newDate = new Date(image.createdAt).toLocaleDateString()
      const newTime = new Date(image.createdAt).toLocaleTimeString()

      const newDateTime = newDate + ' as ' + newTime

      return `
        <div style="color: #fff; padding: 15px;">
          <small>Foto adicionada em: ${newDateTime}</small></br>
        </div>
      `
    }
  },
}
</script>
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');

/* Custom scroolbar */

/* width */
.gallery-container::-webkit-scrollbar {
  width: 15px;
}

/* Track */
.gallery-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0,0,0,0.25);
  border-radius: 10px;
}

/* Handle */
.gallery-container::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  /* Custom scroolbar */
  height: 550px;
  max-height: 550px;
  overflow-y: scroll;
}

body {
  margin: 0;
}

.gallery-item {
  margin: 5px;
}

.gallery-item img {
  max-width: 90px;
  max-height: 90px;
  min-width: 90px;
  min-height: 90px;
}

@media screen and (max-width:720px){
  /* Custom scroolbar */

  /* width */
  .gallery-container::-webkit-scrollbar {
    width: 10px;
  }

  .gallery-container {
    height: 600px;
    max-height: 600px;
  }
  
  .gallery-item img {
    max-width: 95px;
    max-height: 95px;
    min-width: 95px;
    min-height: 95px;
  }
}
</style>