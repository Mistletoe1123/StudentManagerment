<template>
  <el-container class="home-container">
    <!-- 左边侧栏 -->
    <el-aside width="200">
      <!-- px删掉可以推过去 -->
      <h1 style="height:60px;">邓邓logo</h1>
      <Submenu></Submenu>
    </el-aside>
    <el-container>
      <!-- 顶栏 -->
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="8">
            <div class="grid-content shouqi" @click="shouqi">
              <i :class="menuShouqiIcon"></i>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content title">
              <h1>邓邓的管理系统</h1>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content info">
              <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
              <b class="nickname">欢迎您：{{userInfo.nickname}}</b>
              <a href="javascript:;" class="quit" @click="quit">退出</a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!-- 主体内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import * as api from "@/api"
import {mapState} from "vuex"
import Submenu from "@/components/Submenu"
export default {
  components:{Submenu},
  data(){
    return {
      //squareUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",//不能和计算属性定义的重名
    }
  },
  methods:{
    quit(){
      //跳转登录页并且清除token
      this.$router.push('/login');
      localStorage.removeItem('token')
      //addRoutes不能删除，刷新页面
      location.reload()
    },
    shouqi(){
      this.$store.commit('SET_MENUSHOUQI')
    }
  },
  mounted(){
    //只是测试 只是测试
   /*  api.getloginlogApi().then(res=>{
      //console.log(res);//没传token 校验失败
    }) */
       // console.log(api);
   /*  api.getMenuListApi().then(res=>{
        console.log(res)
        console.log(recursionRoutes(allRoutes,res.data.menuList));
      }) */
  },
  computed:{
    ...mapState(['userInfo','menuShouqi']),
    squareUrl(){
      return this.userInfo.headimgurl?this.userInfo.headimgurl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    },
    menuShouqiIcon(){
      return this.menuShouqi?'el-icon-s-unfold':'el-icon-s-fold'
    }
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: rgb(79, 90, 247);
  color: #333;
  text-align: center;
  /* 怼出来了 */
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

::v-deep .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* el-row */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: rgb(79, 90, 247);
}
/* 收起 */
.el-icon-s-fold,
.el-icon-s-unfold {
  font-size: 40px;
  color: #fff;
}
.shouqi {
  text-align: left;
  cursor: pointer;
}
.title {
  line-height: 40px;
}
.nickname {
  margin: 0 20px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-main {
  line-height: 80px;
}

& /deep/.el-menu-item.is-active {
  color: orange;
}
& /deep/ .el-menu-item {
  color: rgb(64, 158, 255);
}
& /deep/ .iconfont{
   color: rgb(64, 158, 255);
}
& /deep/ .el-submenu__title{
   color: rgb(64, 158, 255);
}
</style>