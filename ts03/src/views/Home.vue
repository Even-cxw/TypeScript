<template>
  <div>
    <UIButton1 large @click="clickButton1">我是button1</UIButton1>
    <UIButton2 large :age="age" :name='name' 
    @click="clickButton2">我是button2</UIButton2>
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
  public name:string = 'Even'
  public age:number = 28
  private clickButton2(event: MouseEvent) {
    console.log('点击了button2', event)
  }
  private clickButton1(event: MouseEvent) {
    console.log('点击了TS-button1',event)
  }
}
</script>


<style lang="stylus" scope>

</style>