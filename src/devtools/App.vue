<template>
  <div>
    <button @click="handleClickClear">清除</button>
    <div v-for="(item, index) in urls" :key="index">
      {{ item.url }} {{ item }}
    </div>
  </div>
</template>

<script>
import { decrypt } from 'commontools'

export default {
  name: 'App',
  data() {
    return {
      urls: []
    }
  },
  mounted() {
    let key = ''
    chrome.storage.sync.get('sm4_string', function(result) {
      key = result
    });
    chrome.devtools.network.onRequestFinished.addListener(
      (res) => {
        const request = res.request
        request.sm4_string = key
        this.urls.push(request)
        res.getContent((content) => {
          request.responseData = content
        })
      }
    );
  },
  methods: {
    handleClickClear() {
      this.list = []
    }
  }
}
</script>
  
<style>
  body, html, p, li, ul, ol {
    padding: 0;
    margin: 0;
  }
</style>