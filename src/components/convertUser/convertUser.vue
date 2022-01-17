<template>
  <div class="convertUser">
    <br/>
    <span style="font-size: var(--el-font-size-extra-large) ">用户名转UID</span>
    <el-divider></el-divider>
    <el-form ref="formRef" :model="convertUser" label-width="120px" label-position="left" size="large" >
      <el-form-item label="卡密：">
        <el-input v-model="convertUser.cardNumber" placeholder="请输入你的卡密"></el-input>
      </el-form-item>
      <br/>
      <el-form-item label="tiktok用户名：">
        <el-input v-model="convertUser.username" type="textarea" rows="10" placeholder="请输入tiktok用户名，一行一个"></el-input>
      </el-form-item>
      <br/>
      <el-form-item label="转换后的uid：">
        <el-input v-model="convertUser.uid" type="textarea" rows="10" disabled></el-input>
      </el-form-item>

      <br/>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交查询</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script src="./_convertUser.js" lang="js"></script>
<style src="./_convertUser.less" lang="less" scoped>

</style>
