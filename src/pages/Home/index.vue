<template>
  <el-container class="home-container">
    <!-- 左边侧栏 -->
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <!-- 顶栏 -->
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="8">
            <div class="grid-content shouqi">
              <i class="el-icon-s-fold"></i>
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
              <b class="nickname">欢迎您：邓邓</b>
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
import {getloginlogApi} from "@/api"
export default {
  data(){
    return {
      squareUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  methods:{
    quit(){
      this.$router.push('/login');
      localStorage.removeItem('token')
    }
  },
  mounted(){
    getloginlogApi().then(res=>{
      //console.log(res);//没传token 校验失败
    })
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* 怼出来了 */
  /* line-height: 60px; */
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/* 收起 */
.el-icon-s-fold {
  font-size: 40px;
}
.shouqi {
  text-align: left;
  margin-left: 20px;
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
</style>