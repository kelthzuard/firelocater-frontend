<template>
  <div class="bg">
    <Card class='card'>
      <p class="title">眉山市火灾消防定位系统</p>
      <div class="inputModal">
        <span>账号：</span><Input v-model="userName" class="input"></Input>
      </div>
      <div class="inputModal">
        <span>密码：</span><Input v-model="userPassword" class="input" type="password"></Input>
      </div>
      <div>
        <Button type="info" @click="login">登录</Button>
        <div class="visitor">
          <Button type="warning" @mouseover.native="show" @mouseleave.native="cancle" @click="visitorLogin">游客登录</Button>
          <div class="bubble" v-show="showBubble">
            因为存在短信按量计费的原因，所以没有开放注册功能防止被恶意发送短信。游客账号可以每天发送十个请求:)
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      userPassword: '',
      showBubble: false
    }
  },
  methods: {
    visitorLogin () {
      this.$api.login('VISITOR', 'VISITORPASSWORD')
      .then((response) =>{          
          this.$router.push({path: '/admin'})//请求成功返回的数据
      }).catch((error) =>{
          this.$Message.error('网络错误')     //请求失败返回的数据
      });
    },
    show ()  {
      this.showBubble = true
    },
    cancle () {
      this.showBubble = false
    },
    login () {
      if ((this.userName === '') || (this.userPassword === '')) {
        this.$Message.error('用户名或密码不能为空')
        return
      }
      this.$api.login(self.userName, self.userPassword)
      .then((response) =>{          
          this.$router.push({path: '/admin'})//请求成功返回的数据
      }).catch((error) =>{
          this.$Message.error('账号或密码错误')     //请求失败返回的数据
      });
    }
  }
}
</script>
<style>
.bg{
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg.jpeg);
}

.card{
  width: 450px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.card .title{
  margin:20px 0 30px 0;
}

.card .inputModal{
  margin: 20px;
}

.card .inputModal .input{
  width: 200px;
}

.visitor{
  display: inline-block;
  position: relative;
}

.bubble {
  position: absolute;
  width: 200px;
  height: 80px;
  font-size: 12px;
  background-color: #000;
  top: calc(100% + 20px);
  left: 20%;
  border-radius: 5px;
  color: #fff;
  padding: 5px;
  box-sizing: border-box;
  text-align: left;
}

.bubble::after {
  display: block;
  content: '';
  position: absolute;
  top: -30px;
  left: 10px;
  width: 0;
  height: 0;
  border: 15px solid;
  border-color: transparent transparent #000 transparent;
}
</style>


