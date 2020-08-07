<template>
  <transition name="slide">
    <div class="message" :class="type" v-if="visible">
      <i class="icon-type iconfont" :class="'icon-'+type"></i>
      <div class="content">{{content}}
        <i v-if="hasClose" class="btn-close iconfont icon-cancel" @click="visible=false"></i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "message",
    data() {
      return {
        content: '',
        time: 3000,
        visible: false,
        type:'info',//'success','warning','error'
        hasClose:false,
      }
    },
    mounted() {
      this.close()
    },
    methods: {
      close() {
        window.setTimeout(() =>{
          this.visible = false
        }, this.time);
      }
    }
  }
</script>


<style scoped lang="less">
@import url('//at.alicdn.com/t/font_1993613_jli41av3rzj.css');
.message {
  position: fixed;
  background-color: #EDF2FC;
  color: #909399;
  left: 50%;
  transform: translateX(-50%);
  top: 25px;
  height: 50px;
  z-index: 1001;
  border-radius: 4px;
  text-align: center;
  // border: 1px solid #ebeef5;
  .content {
    line-height: 50px;
    padding: 0 80px;
    .btn-close {
      position: relative;
      left: 60px;
      cursor: pointer;
    }
  }
  .icon-type {
    float: left;
    position: relative;
    top: 13px;
    left: 20px;
  }
}
.error {
  background-color: #FEF0F0;
  color: #F56C6C;
}
.success {
  background-color: #F0F9EB;
  color: #67C23A;
}
.waring {
  background: #FDF6EC;
  color: #E6A23C;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>