<template>
  <div>
     <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in crubms"
        :to="{ name:item.name}"
        :key="item.path"
      >{{item.meta.name}}</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="studentgl">学员管理</el-breadcrumb-item>
      <el-breadcrumb-item>学员项目管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="search">
        <el-input placeholder="请输入姓名,如果不更新,点击右侧搜索按钮" class="search-input"></el-input>
        <el-button type="primary" plain class="search-btn">
          <i class="el-icon-search"></i>
        </el-button>
        <el-button type="primary" disabled class="search-button">添加项目</el-button>
      </div>
      <div class="select-class">
        <form>
          <label>选择班级：</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </form>
      </div>
      <div class="export-form"></div>
      <div class="stu-table"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
   /*  computed:{
      ...mapState(['crubms'])
    } */
  }
</script>

<style lang="less" scoped>
& /deep/ .el-breadcrumb__inner {
  color: rgb(64, 158, 255);
}
.studentgl {
  font-weight: 800;
}
.select-class {
  float: left;
}
.search {
  display: flex;
  height: 40px;
  justify-content: left;
  align-items: center;
  margin-top: 25px;
  .search-input {
    width: 300px;
  }
  .search-btn {
    margin-left: 10px;
  }
}
</style>