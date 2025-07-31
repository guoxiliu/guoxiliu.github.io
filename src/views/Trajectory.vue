<script>
import { globalState } from '@/globalState';

export default {
  name: 'Trajectory',
  data() {
    return {
      languageContent: {
        en: {
          title: 'My World Trajectory',
          description: 'Places where I have lived, stayed, and visited.',
        },
        zh: {
          title: '我的世界轨迹',
          description: '那些我曾栖息、流连与踏足的时光与土地。',
        },
      },
    }
  },

  computed: {
    lang() {
      return this.languageContent[this.language];
    },
    language() {
      return globalState.language;
    },
  },
}
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-2 mx-2">{{ lang.title }}</h2>
    <p class="mx-2">{{ lang.description }}</p>
    <div
      style="height: 600px; width: 100%; border-radius: 10px; box-shadow: 0 2px 10px; overflow: hidden;"
    >
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1D71rprIWswPxjwyB8fohw4CbCgXxeQw&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
