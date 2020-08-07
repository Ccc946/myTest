<template>
  <div id="app">
    <div>
      <swiper :options="swiperOption">
        <swiper-slide
          class="swiper-slide"
          v-for="(item,index) in listImg"
          :key="index"
        >
            <a :href="item.path" target="_blank">
                <img :src="item.img_url" alt="">
            </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 分页 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <!-- 箭头左 -->
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- 箭头右 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
    props: ['listImg'],
  data() {
    return {
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,
        // effect: "flip",
      },
    };
  },
};
</script>

<style lang="less">
.swiper-slide {
  width: 100%;
  text-align: center;
  img {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }
}
</style>