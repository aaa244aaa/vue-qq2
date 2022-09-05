<template>
  <div>
    <div class="top">
      <van-nav-bar title="服务协议" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="notice">
      <van-notice-bar :scrollable="sport" text="下面是注意事项" background="#1989fa" color="#fff" speed="30" @touchstart="stop" @touchend="continues"/>
    </div>
    <div class="step">
      <van-steps :active="active" active-icon="success">
        <van-step>注册账号</van-step>
        <van-step>登录</van-step>
        <van-step>找回密码</van-step>
        <van-step>来到主页</van-step>
      </van-steps>
      <div class="wrap">
        <van-button type="info" class="button" @click="nextStep">下一步</van-button>
      </div>

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    data() {
        return {
            active: 0,
            sport:true,
        };
    },
    methods: {
        onClickLeft() {
            this.$router.replace('/login');
            return;
        },
        nextStep() {
            if (this.active <= 3) {
                this.active++;
            }
            return;
        },
        stop(){
          this.sport = false
        },
        continues(){
          this.sport = true
        }

    }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #1989fa;
    height: 50px;
    line-height: 50px;
}
/deep/ .van-nav-bar__text {
    color: #fff;
    font-size: 17px;
}
/deep/ .van-icon {
    color: #fff;
    font-size: 17px;
}
/deep/ .van-nav-bar__title {
    font-size: 19px;
    color: #fff;
}
.wrap {
    display: flex;
    justify-content: center;
    .button {
        width: 120px;
        height: 30px;
        font-size: 14px;
    }
}
/deep/ .van-steps {
    height: 50px;
    color: green;
}
</style>