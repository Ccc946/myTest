<template>
  <div id="app" :class="attr">
    <div class="container">
      <banner :listImg="listImg"></banner>
    </div>
    <div>hello world</div>
    <button @click="show">message</button>
    <button @click="shows">message</button>
    <button @click="showe">message</button>
    <button @click="showw">message</button>
    <div>{{data | parseTime('{y}-{m}-{d} {h}:{i}:{s} {a}')}}</div>
    <div>{{data | formatDateTime}}</div>

    <button @click="showConfirm">showConfirm</button>
    <Markdown></Markdown>
    <showMarkdown></showMarkdown>
    <back-top></back-top>
  </div>
</template>

<script>
import { MonitorWindowChanges } from "./utils/screenSize";

import img1 from "@/assets/banner/banner1.jpg";
import img2 from "@/assets/banner/banner2.jpg";
import img3 from "@/assets/banner/banner3.jpg";
const BackTop = () => import("@/components/BackTop/index.vue");
const Markdown = () => import("@/components/Markdown/index.vue");
const showMarkdown = () => import("@/components/Markdown/showMarkdown.vue");

export default {
  name: "App",
  components: {
    BackTop,
    Markdown,
    showMarkdown
  },
  data() {
    return {
      attr: "",
      data: new Date() - 1000000,
      listImg: [
        { id: 1, img_url: img1, path: "https://github.com/" },
        { id: 2, img_url: img2, path: "https://baidu.com/" },
        { id: 3, img_url: img3, path: "https://juejin.im/" },
      ],
    };
  },
  mounted() {
    addEventListener("resize", this.onChangeSize);
    this.onChangeSize();
  },
  methods: {
    onChangeSize() {
      this.attr = MonitorWindowChanges();
    },
    show() {
      this.$message("正常信息");
    },
    shows() {
      this.$message({
        content: "这是一个success提示",
        time: 2000,
        type: "success",
        hasClose: true,
      });
    },
    showe() {
      this.$message({
        content: "这是一个success提示",
        time: 2000,
        type: "error",
        hasClose: true,
      });
    },
    showw() {
      this.$message({
        content: "waring",
        time: 2000,
        type: "waring",
        hasClose: true,
      });
    },
    showConfirm() {
      this.$confirm({
        title: "提示",
        content: "确定要删除内容吗？",
        type: "success",
      })
        .then(() => {
          this.$message({
            content: "操作成功！",
            time: 2000,
            type: "success",
            hasClose: true,
          });
        })
        .catch(() => {
          this.$message({
            content: "已取消操作!",
            time: 2000,
            type: "info",
            hasClose: true,
          });
        });
    },
  },
  destroyed() {
    removeEventListener("resize", this.onChangeSize);
  },
};
</script>

<style>
#app {
  height: 2000px;
}
.container {
  width: 60%;
}
</style>
