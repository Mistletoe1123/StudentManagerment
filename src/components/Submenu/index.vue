<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="$store.state.menuShouqi"
    >
      <qf-sub-menu :sideMenu="$store.state.sideMenu"></qf-sub-menu>
    </el-menu>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
  }
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>