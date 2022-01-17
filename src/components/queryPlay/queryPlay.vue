<template>
    <div class="queryPlay">

      <br/>
      <span style="font-size: var(--el-font-size-extra-large) ">UID查询播放数</span>
      <el-divider></el-divider>
      <el-form ref="formRef" :model="form" label-width="120px" label-position="left" size="large" >
        <el-form-item label="卡密：">
          <el-input v-model="form.name" placeholder="请输入你的卡密"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="tiktok uid：">
          <el-input v-model="form.desc" type="textarea" rows="10" placeholder="请输入tiktok uid，一行一个"></el-input>
        </el-form-item>
        <br/>

        <br/>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>

      <div class="result">
        <div class="user-list">
          <div class="user-info-header">
            <el-descriptions
                class="margin-top"
                title="Without border"
                :column="6"
                :size="size"
                :style="blockMargin"
            >
              <template #extra>
                <el-button type="primary">Operation</el-button>
              </template>
              <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
              <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
              <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
              <el-descriptions-item label="Remarks">
                <el-tag size="small">School</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="Address"
              >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
              </el-descriptions-item>
            </el-descriptions>

          </div>
          <div class="user-video-list">
            <el-row>
              <el-col
                  v-for="(o, index) in 2"
                  :key="o"
                  :span="3"
                  :offset="index > 0 ? 2 : 0"
              >
                <el-card :body-style="{ padding: '0px' }" class="card-class">
                  <a href="#">
                  <img
                      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                      class="image"
                      height="150"
                      width="230"
                  />
                  <div style="margin-top:15px">
                    <span>播放: 100</span>
                    <span>点赞: 100</span>
                    <span>分享: 100</span>
                  </div>
                  </a>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>


    </div>
</template>
<script src="./_queryPlay.js" lang="js"></script>
<style src="./_queryPlay.less" lang="less" scoped></style>
