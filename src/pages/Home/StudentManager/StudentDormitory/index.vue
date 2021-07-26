<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item class="studentgl">学员管理</el-breadcrumb-item>
      <el-breadcrumb-item>学员宿舍</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
& /deep/ .el-breadcrumb__inner {
    color: rgb(64, 158, 255);
}

.studentgl {
    font-weight: 800;
}
</style>