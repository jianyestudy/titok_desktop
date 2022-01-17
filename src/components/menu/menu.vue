<template>
  <el-container

  >
    <!--左侧导航-->
    <div class="navbar">
      <div class="user">
        <div class="user__pic"></div>
        <div class="user__name">Tiktok 工具</div>
      </div>
      <div class="bar">
        <div class="options">
          <ul>
            <li class="active">更多工具正在开发中</li>
            <span class="options__division">menu</span>
            <li> <router-link to="/convert-user" replace>用户名转UID </router-link></li>

            <li><router-link to="/query-play" replace>UID查询播放数 </router-link></li>
            <li>查询剩余积分</li>
            <li>......</li>
          </ul>
        </div>
        <div class="settings">
          <ul>
            <li class="acc-settings"><i class="fas fa-cog"></i> 广收代理 - Broad collection agent</li>
            <li><i class="fas fa-sign-out-alt"></i> 量大优惠 - Large quantity discount</li>
          </ul>
        </div>
      </div>
    </div>
  </el-container>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {UserFilled, VideoCameraFilled} from '@element-plus/icons-vue'

</script>

<style lang="scss">

</style>
