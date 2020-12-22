<!-- button封装正常写法 -->
<template>
  <div class='button-wrap'>
    <div class="button-inner" 
    :class="{'smart':smart,'large':large}"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 父组件值传递key没有传递val时，值为true,
    smart: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    }
  },
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {
  },
  created() {
  },
  mounted() {
    console.log('button2-smart',this.smart);
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