<template>
  <transition name="fade">
    <global-mask v-if="visible" @click.native="handleAction('close')">
      <div class="confirm-wrap" @click.stop="">
        <div class="confirm">
          <div class="head">
            {{ title }}
            <i
              class="btn btn-cancel iconfont icon-cancel"
              @click="handleAction('close')"
            ></i>
          </div>
          <div class="body">
            <i v-if="type!=''" class="icon-type iconfont" :class="'icon-'+type"></i>
            {{ content }}
          </div>
          <div class="foot">
            <a
              href="javascript:void(0)"
              class="btn btn-item btn-primary"
              @click="handleAction('yes')"
            >{{ yesBtnText }}</a>
            <a
              href="javascript:void(0)"
              class="btn btn-item btn-default"
              @click="handleAction('cancel')"
            >{{ cancelBtnText }}</a>
          </div>
        </div>
      </div>
    </global-mask>
  </transition>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      visible: false,
      content: "",
      title: "",
      yesBtnText: "确定",
      cancelBtnText: "取消",
      type: "",
      promiseStatus: null,
    };
  },
  methods: {
    confirm() {
      this.visible = true;
      return new Promise((resolve, reject) => {
        this.promiseStatus = { resolve, reject };
      });
    },
    handleAction(data) {
      this.visible = false;
      if (data === "yes") {
        this.promiseStatus && this.promiseStatus.resolve();
      } else {
        this.promiseStatus && this.promiseStatus.reject();
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_1993613_jli41av3rzj.css");
.confirm-wrap {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #2f2f2f;
  width: 500px;
  border-radius: 5px;
  .confirm {
    z-index: 1001;
    padding: 20px;
    position: relative;
    .head {
      font-size: 20px;
      .btn-cancel {
        position: absolute;
        right: 20px;
      }
    }
    .body {
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 70px;
      line-height: 30px;
    }
    .foot {
      position: absolute;
      right: 20px;
      bottom: 30px;
      .btn-item {
        padding: 10px 15px;
        border: 1px solid #cccccc;
        margin-left: 10px;
        text-decoration: none;
      }
      .btn-primary {
        background-color: #3a91fd;
        border: 1px solid #3a91fd;
        color: #fff;
      }
      .btn-default {
        color: #000;
      }
    }
  }
}
.btn {
  cursor: pointer;
}
.icon-type {
  font-size: 30px;
  position: relative;
  top: 5px;
}
.icon-error {
  color: #f56c6c;
}
.icon-success {
  color: #67c23a;
}
.icon-waring {
  color: #e6a23c;
}
</style>