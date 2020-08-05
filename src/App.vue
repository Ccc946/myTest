<template>
  <div id="app" :class="attr">
    <div>hello world</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      attr:''
    }
  },
  mounted() {
    addEventListener('resize', this.onChangeSize);
    this.onChangeSize();

  },
  methods:{
    onChangeSize() {
      var widthScreen = document.documentElement.clientWidth || document.body.clientWidth;
      if(widthScreen > 900 ) {
          this.attr = 'pc-view';
      } else {
        this.attr = 'moblie-view';
      }
    }
  },
  destroyed() {
    removeEventListener('resize',this.onChangeSize);
  }
}
</script>

<style>
#app {
  font-size: 25px;
}
</style>
