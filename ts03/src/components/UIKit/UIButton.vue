<template>
  <div class='button-wrap'>
    <div class="button-inner" 
    :class="{'smart':smart,'large':large}"
    @click="clickButton1"
    :style="`
      --color-tint:${selfColor}
    `"
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
  @Prop(String) private color: string | undefined
  // data里面的状态
  private name: string = "even"
  // 计算属性
  private get selfColor() {
    if (this.color) {
      return this.color
    } else {
      return '#6e6e6e'
    }
  }
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
    // 变量的使用 第二个参数可设置默认值
    background var(--color-tint, #6e6e6e);
    border:1px solid #6e6e6e;
    &:hover {
      // filter滤镜 改变背景颜色
      filter brightness(120%)
    }
    &:active {
      filter brightness(80%)
    }
  }
  .smart {
    resize(5px)
  }
  .large {
    resize(10px)
  }

}
</style>