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
      return `
        <div style="background: red;">
          <small>Foto adicionada em: ${image.createdAt}</small></br>
          <label>Criar com Dog API, todos os direitos reservados</label>
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

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

body {
  margin: 0;
}

.gallery-item {
  margin: 5px;
}

.gallery-item img {
  max-width: 100px;
  max-height: 100px;
  min-width: 100px;
  min-height: 100px;
}
</style>