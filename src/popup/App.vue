<template>
  <div>
    {{ key }}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    key() {
      return JSON.stringify(window.localStorage)
    },
  },
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
