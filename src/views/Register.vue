<template>
  <div>
    <div class="top">
      <img src="@/assets/logo.png">
    </div>
    <div class="password">
      <van-form @submit="onSubmit">
        <van-field class="formed" v-model="username" name="username" label="用户名  :" :rules="[{ required: true, message: '用户名格式错误' , pattern: /^\s*\S{3,}\s*$/}]" />

        <van-field class="formed" v-model="phoneNumber" name="phoneNumber" label="手机号  :" :rules="[{ required: true, message: '请手机号格式错误',pattern:/^\s*1[3-9]\d{9}\s*$/ }]" />

        <van-field class="formed" v-model="password" type="password" name="password" label="密码  :" :rules="[{ required: true, message: '请填写密码 至少六位',pattern:/^\s*\S{6,}\s*$/ }]" />

        <van-field class="formed" v-model="confrimPassword" type="password" name="confrimPassword" label="再次确认密码 ： " :rules="[{ required: true,}]" />
        <div class="buttonDiv">
          <van-button round block type="info" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
    <div class="bottom">
      <div class="first">
        <span @click="toLogin">已有账号 去登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
Toast.setDefaultOptions({ duration: 1000 });
export default {
    data() {
        return {
            username: '',
            password: '',
            confrimPassword: '',
            phoneNumber: ''
        };
    },
    methods: {
        onSubmit(values) {
            if (this.password.trim() !== this.confrimPassword.trim()) {
                Toast.fail('两次输入密码不相同');
                return;
            }
            Toast.loading({
                message: '加载中...',
                forbidClick: true
            });
            console.log('submit', {
                username: this.username.trim(),
                password: this.password.trim(),
                phoneNumber: this.phoneNumber.trim()
            });

            Toast.success('注册成功');
            this.$router.replace('/login');
        },

        toLogin() {
            this.$router.replace('/login');
        }
    }
};
</script>

<style lang="less" scoped>
.top {
    height: 180px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 180px;
    }
}

.formed {
    height: 55px;
    align-items: center;
    /deep/ span {
        font-size: 18px;
    }
    /deep/ input {
        font-size: 18px;
    }
}

/deep/ .buttonDiv {
    margin: 16px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
/deep/ .van-button--block {
    width: 80%;
}
.bottom {
    display: flex;
    width: 100%;
    height: 30px;
    position: fixed;
    bottom: 30px;
    left: 0;
    text-align: center;
    align-items: center;
    div {
        flex: 1;
        font-size: 14px;
    }
}
</style>