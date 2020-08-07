<template>
  <div id="app" :class="attr">
    <div class="container">
      <banner :listImg="listImg"></banner>
    </div>
    <div>hello world</div>
    <div>{{data | parseTime('{y}-{m}-{d} {h}:{i}:{s} {a}')}}</div>
    <div>{{data | formatDateTime}}</div>
  </div>
</template>

<script>
import { MonitorWindowChanges } from './utils/screenSize'

import img1 from '@/assets/banner/banner1.jpg'
import img2 from '@/assets/banner/banner2.jpg'
import img3 from '@/assets/banner/banner3.jpg'

export default {
  name: 'App',
  components: {
    banner: () => import('@/components/banner')
  },
  data() {
    return {
      attr:'',
      data: new Date() - 1000000,
      listImg: [
        {id: 1, img_url: img1, path: 'https://github.com/'},
        {id: 2, img_url: img2, path: 'https://baidu.com/'},
        {id: 3, img_url: img3, path: 'https://juejin.im/'}
      ]
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
.container {
  width: 60%;
}
</style>
