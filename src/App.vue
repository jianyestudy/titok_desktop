<template>
  <Menu></Menu>
    <!--主要内容部分-->
    <div class="content">
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </div>

</template>
<script lang="ts" setup>
import Menu from "./components/menu/menu.vue"
</script>

<style lang="scss">
.el-main{
  background: #fff;
  padding: 0;
}
</style>