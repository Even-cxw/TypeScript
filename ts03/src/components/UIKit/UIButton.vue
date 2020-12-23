<template>
  <div class='button-wrap'>
    <div class="button-inner" 
    :class="{'smart':smart,'large':large}"
    @click="clickButton1"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit,Prop } from 'vue-property-decorator';

@Component
export default class UIButton extends Vue{
  // 接收父组件参数
  @Prop(Boolean) private large:boolean | undefined
  @Prop(Boolean) private smart:boolean | undefined
  // data里面的状态
  private name: string = "even"
  // 每次调用emitClickEvent 都会发送click事件
  @Emit('click') private emitClickEvent(event: MouseEvent){}
  private clickButton1(event: MouseEvent) {
    this.emitClickEvent(event);
  }
}
</script>

<style lang='stylus' scoped>
// stylus混合函数
resize(padding) {
  padding: padding;
}

.button-wrap {
  .button-inner {
    box-sizing: boder-box;
    display inline-block
    padding : 5px;
    border-radius: 3px;
    color: #fff;
    background :#6e6e6e;
    border:1px solid #6e6e6e;
  }
  .smart {
    resize(5px)
  }
  .large {
    resize(10px)
  }
}
</style>