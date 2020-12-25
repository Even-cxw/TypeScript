<template>
  <div class="home">
    我是home页面
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    <i class="fa fa-camera-retro fa-lg fa-spin"></i>
    <i class="fa fa-asterisk fa-spin" aria-hidden="true"></i>
    <i class="fa fa-envelope-o fa-spin" aria-hidden="true"></i>
    <br>
    <i class="el-icon-edit"></i>
    <i class="el-icon-delete"></i>
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