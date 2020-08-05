<template>
  <div id="app" :class="attr">
    <div>hello world</div>
    <div>{{data | parseTime('{y}-{m}-{d} {h}:{i}:{s} {a}')}}</div>
    <div>{{data | formatDateTime}}</div>
  </div>
</template>

<script>
import { MonitorWindowChanges } from './utils/screenSize'
export default {
  name: 'App',
  data() {
    return {
      attr:'',
      data: new Date() - 1000000
    }
  },
  mounted() {
    addEventListener('resize', this.onChangeSize);
    this.onChangeSize();
  },
  methods:{
    onChangeSize() {
      this.attr = MonitorWindowChanges();
    }
  },
  destroyed() {
    removeEventListener('resize',this.onChangeSize);
  }
}
</script>

<style>
</style>
