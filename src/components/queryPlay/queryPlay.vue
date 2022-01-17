<template>
    <div class="queryPlay">

      <br/>
      <span style="font-size: var(--el-font-size-extra-large) ">UID查询播放数</span>
      <el-divider></el-divider>
      <el-form ref="formRef" :model="queryPlay" label-width="120px" label-position="left" size="large" >
        <el-form-item label="卡密：">
          <el-input v-model="queryPlay.cardNumber" placeholder="请输入你的卡密"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="tiktok uid：">
          <el-input v-model="queryPlay.uid" type="textarea" rows="10" placeholder="请输入tiktok uid，一行一个"></el-input>
        </el-form-item>
        <br/>

        <br/>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交查询</el-button>
        </el-form-item>
      </el-form>

      <div class="result">
        <VideoList></VideoList>
      </div>


    </div>
</template>
<script src="./_queryPlay.js" lang="js"></script>
<style src="./_queryPlay.less" lang="less" scoped></style>
