<template>
  <div class="queryPlay">

    <br/>
    <span style="font-size: var(--el-font-size-extra-large) ">UID查询播放数</span>
    <el-divider></el-divider>
    <el-form ref="formRef" :model="queryPlay" label-width="120px" label-position="left" size="large">
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
      <div v-for="r in queryPlay.result">
        <VideoList v-bind:r = "r"></VideoList>
        <br/>
      </div>

    </div>


  </div>
</template>
<script setup>
import VideoList from "../../components/videoList/videoList.vue";
</script>
<script>
import {reactive} from 'vue'
import {ElLoading} from 'element-plus'
import requests from "../../core/http.js";

const queryPlay = reactive({
      cardNumber: '',
      uid: '',
      result: [],
    }
)

export const queryPlayApi = (data) => {
  return requests({
    url: "query-play",
    method: "post",
    data
  });
};

const onSubmit = () => {
  queryPlay.result = []
  const uidArray = queryPlay.uid.split('\n')
  const loadingInstance = ElLoading.service({fullscreen: true})
  for (let i = 0; i < uidArray.length; i++) {

    if (uidArray[i].length === 0) continue;

    const requestData = {
      cardNumber: queryPlay.cardNumber,
      uid: uidArray[i]
    }

    queryPlayApi(requestData).then((res) => {
      queryPlay.result.push(res.data);
    });
  }

  loadingInstance.close()

}

</script>
<style src="./_queryPlay.less" lang="less" scoped></style>
