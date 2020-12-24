<template>
  <div class="home">
    我是home页面
  </div>
</template>

<script lang="ts">
// 装饰器的作用：对现有的函数或者类做扩展和补充；
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue{

}
</script>


<style lang="stylus" scope>

</style>