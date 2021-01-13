<template>
  <div id="app">
    <div class="loading"></div>
  </div>
</template>

<script>
import Loading from './components/loading'
export default {
  name: 'App',
  data() {
    return {
      loadOption: {
        loadingText: '加载中...',
        // el: '.loading'哦 
      }
    }
  },
  mounted() {
    let loading = Loading(this.loadOption)
    setTimeout(() => {
      loading.close();
    }, 5000)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.loading {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
