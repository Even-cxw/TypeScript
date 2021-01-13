<!-- evLoading组件 -->
<template>
  <div class='loading-wrapper'>
    {{loadingText}}
  </div>
</template>

<script>
export default {
  components: {},
  name: 'evLoading',
  data() {
    return {
      loadingText: 'Loading',
      closed: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {
  },
  mounted() {
    console.log('我是loading.vue里面的生命周期')
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style scoped>
.loading-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  color: #fff;
  background: #6e6e6e;
  line-height: 100vh;
}
</style>