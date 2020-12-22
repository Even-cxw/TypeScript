<template>
  <div>
    <UIButton1 large>我是button1</UIButton1>
    <UIButton2 large>我是button2</UIButton2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIButton1 from '../components/UIKit/UIButton.vue';
import UIButton2 from '../components/UIKit/UIButton2.vue' 
@Component({
  components: {
    UIButton1,
    UIButton2
  }
})
export default class ClassName extends Vue{

}
</script>


<style lang="stylus" scope>

</style>