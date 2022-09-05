<template>
  <div>
    <div class="top">
      <img src="@/assets/logo.png">
    </div>
    <div class="password">
      <van-form @submit="onSubmit">
        <van-field class="formed" v-model="username" name="username" label="用户名  :" :rules="[{ required: true, message: '用户名格式错误' , pattern: /^\S{3,}$/}]" />
        <van-field class="formed" v-model="password" type="password" name="password" label="密码  :" :rules="[{ required: true, message: '请填写密码 至少六位',pattern:/^\S{6,}$/ }]" />
        <div class="buttonDiv">
          <van-button round block type="info" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div class="safeRead" ref="safeRead">
      <van-checkbox v-model="checked" icon-size="0.4267rem">已阅读并同意 <span class="serveAgree" @click="toServeRead">服务协议</span></van-checkbox>
    </div>
    <div class="bottom">
      <div class="first">
        <span @click="backRegister">新用户注册</span>
      </div>
      <div>
        <span @click="showActionSheet">更多选项</span>
      </div>
    </div>

    <div class="actionSheet">
      <van-action-sheet v-model="show" duration=0.25 close-on-popstate :actions="actions" cancel-text="取消" close-on-click-action @cancel="onCancel" 
      @select='Onselect'/>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
Toast.setDefaultOptions({ duration: 800 });
export default {
    data() {
        return {
            username: '',
            password: '',
            show: false,
            actions: [{ name: '找回密码' }],
            checked: false
        };
    },
    methods: {
        onSubmit(values) {
            if (this.checked === false) {
                this.elShaking(this.$refs.safeRead)
                return;
            }
            console.log('submit', values);
            Toast.success('登录成功')
        },
        showActionSheet() {
            this.show = true;
        },
        onCancel() {
            Toast('取消');
        },
        backRegister() {
            this.$router.push('/register');
        },
        toServeRead() {
            this.$router.push('/serveread');
        },
        elShaking(el) {
            const maxAngle = 7; // 震动偏移角度
            const interval = 8; // 震动快慢，数字越小越快，太小DOM反应不过来，看不出动画
            const quarterCycle = 6; // 一次完整来回震动的四分之一周期
            let curAngle = 0;
            let direction = 1;
            const timer = setInterval(function () {
                if (direction > 0) {
                    curAngle++;
                    if (curAngle === maxAngle) {
                        direction = -1;
                    }
                } else {
                    curAngle--;
                    if (curAngle === -maxAngle) {
                        direction = 1;
                    }
                }
                el.style.transform = 'rotate(' + curAngle + 'deg)';
            }, interval);
            el.style.transform = 'rotate(' + 0 + 'deg)'
            setTimeout(function () {
                clearInterval(timer);
            }, maxAngle * interval * quarterCycle);
        },
        Onselect(action){
          if (action.name === '找回密码') {
            this.$router.push('/getbackpassword')
            return;
          }
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
    height: 60px;
    align-items: center;
    /deep/ span {
        font-size: 18px;
    }
    /deep/ input {
        font-size: 18px;
    }
}

.safeRead {
    width: 100%;
    height: 30px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    .serveAgree {
        color: rgba(0, 0, 255, 0.7);
    }
    translate: all 0.1s;
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
    .first {
        border-right: 1px solid rgba(0, 0, 0, 0.4);
    }
}

/deep/ .van-overlay {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>