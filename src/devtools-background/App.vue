<template>
  <hello-world />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld },
  mounted() {
    chrome.devtools.panels.create(
      // title
      '加密解密',
      // iconPath
      null,
      // pagePath
      'devtools.html'
    );
  },
}
</script>
