<template>
  <div class='button-wrap'>
    <div class="button-inner" 
    :class="{'smart':smart,'large':large}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UIButton extends Vue{

}
</script>


<style lang='stylus' scoped>
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
    padding: 5px;
  }
  .large {
    padding: 10px;
  }
}
</style>