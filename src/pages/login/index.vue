<template>
  <div class="container">
    <div class="imgbox"></div>
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <h1 class="hh">邓邓管理后台</h1>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="请输入您的用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入您的密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha" class="captcha-box">
        <el-input
          type="text"
          autocomplete="off"
          placeholder="请输入验证码"
          class="captcha"
          v-model="loginForm.captcha"
          @keydown.native.enter="submitForm('loginForm')"
        ></el-input>
        <span class="captcha-svg" v-html="captcha" @click="refreshCaptchaApi"></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
    <video
      src="../../assets/video/backvideo.mp4"
      loop="loop"
      autoplay="autoplay"
      class="video"
      muted
    ></video>
    //proload
  </div>
</template>

<script>
/* 登入流程：
1.手机用户用户名和密码发送给服务端
2.服务端进行校验，通过返回用户信息和token
3.将token存到本地存储
4.登入成功跳转到主页，失败跳转登录页 */
import {loginApi,getCaptchaApi,refreshCaptchaApi,verifyCaptchaApi} from "@/api"
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        //value就是输入框里输入的值
        //正则 匹配用户名 3-6位(字母，数字，下划线，-)
        let uPattern = /^[a-zA-Z0-9_-]{3,16}$/;
        if(uPattern.test(value)){
          callback()
        }else{
          callback("用户名应为3-6位字母、数字、下划线、减号")
        }
      };

      var validatePassword = (rule, value, callback) => {
        //长度3-10位 数字 英文 特殊符号且必须包含数字及英文 
        let pPattern = /^[a-zA-Z0-9_-]{3,10}$/;
       if(pPattern.test(value)){
          callback()
        }else{
          callback("密码应为3-6位字母、数字、下划线、减号")
        }
      };

      var validateCaptcha = (rule, value, callback)=>{
        if(!value){
          callback("验证码输入不能为空")
        }else{
          callback()
        }
      }

      return {
        loginForm: {
          username: '',
          password: '',
          captcha:''
        },
        rules: {
          username: [//校验用户名
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [//校验密码
            { validator: validatePassword, trigger: 'blur' }
          ],
          captcha:[//校验验证码 和prop相同
            {validator: validateCaptcha, trigger: 'blur'}
          ]
        },
        captcha:""
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {//本地校验
            //console.log(this.loginForm);//name word

             const loading = this.$loading({//登入动画
          lock: true,
          text: '努力努力再努力......',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

            //lofinForm中解构出name word captcha
            let {username,password,captcha} = this.loginForm
            verifyCaptchaApi(this.loginForm.captcha).then(res=>{
              //console.log(res);//data.msg.state

            if(res.data.state){
              loginApi(username,password).then(res=>{
                if(res.data.state){
                  //用户名密码正确 token存到本地 跳转到主页home
                 // console.log(res.data);//{status: 1, state: true, msg: "登入成功", permission: {…}, userInfo: {…}, …}
                 loading.close();
                  localStorage.setItem('token',res.data.token) 
                  this.$router.push('/home')
                }else{//登入失败
                loading.close();
                 this.$message({
                  showClose: true,
                  message: '用户名或密码错误！',
                  type: 'error'
        });
                }
              })
            }else{//验证码错误
            loading.close();
             this.refreshCaptchaApi()//错误后刷新验证码
             this.loginForm.captcha=""
             this.$message({
              showClose: true,
              message: '验证码错误，请输入正确的验证码！',
              type: 'error'
        });
              /* this.loginForm={} */
            }

            })
            /* alert('submit!'); */
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      refreshCaptchaApi(){//点击刷新验证码
         getCaptchaApi().then(res=>{
       // console.log(res.data);
       this.captcha = res.data.img//svg格式
       //console.log(this.captcha);
      })
      }
    },
    mounted(){
      //测试loginApi接口
      loginApi('lbw','555').then(res=>{
        //console.log(res);
      })
    },
    created(){
     this.refreshCaptchaApi()//首次出现验证码
    }
  }
</script>


<style lang="less" scoped>
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    .imgbox {
      width: 50%;
      height: 100%;
      position: fixed;
      z-index: 20;
      top: 25%;
      left: 15%;
      opacity: 0.7;
      background: url(http://chst.vip:8081/stu2/img/bg2.fc58c850.png) no-repeat;
      background-size: 40% 50%;
    }
    .demo-loginForm {
      position: absolute;
      top: 15%;
      right: 10%;
      z-index: 99;
      width: 400px;
      height: 450px;
      border-radius: 15px;
      background: rgba(0, 0, 0, 0.1);
      text-align: center;
      .hh {
        color: #fff;
        margin: 90px 0 40px 0;
      }
      .el-form-item {
        padding-right: 50px;
        .el-input {
          border-radius: 5px;
          border: 1px solid #fff !important;
          color: #fff;
          & /deep/ .el-input__inner {
            opacity: 0.2;
          }
        }
        & /deep/ .el-form-item__label {
          color: #fff;
        }
        .el-button--primary {
          width: 250px;
          background: linear-gradient(to right, #6cf, rgb(0, 48, 255));
        }
      }
    }
    .video {
      position: fixed;
      top: 0;
      right: 0;
      height: 0;
      z-index: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
}

& /deep/ input:focus {
  border: 1px solid #fff;
  opacity: 1;
  box-shadow: 0 0 25px #000;
}
.captcha-box {
  position: relative;
  & /deep/ .captcha {
    position: absolute;
    left: 0;
    width: 50%;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-right: 0;
  }
  & /deep/ .captcha-svg {
    position: absolute;
    border: 1px solid #fff;
    right: 0;
    width: 50%;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 0;
    svg {
      width: 115px;
      height: 40px;
    }
  }
}
::v-deep input::-webkit-input-placeholder {
  color: black;
  font-weight: 800;
}
</style>