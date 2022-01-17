<template>
    <div class="videoList">
      <div class="user-list">
        <div class="user-info-header">
          <el-descriptions
              class="margin-top"
              title="查询结果："
              :column="6"
          >
            <template #extra>
              <el-button type="primary" disabled>更多</el-button>
            </template>
            <el-descriptions-item label="用户名:">donomar</el-descriptions-item>
            <el-descriptions-item label="昵称:">DON OMAR aka KONG</el-descriptions-item>
            <el-descriptions-item label="简介:">SINCERO Out Now</el-descriptions-item>
            <el-descriptions-item label="国家:">
              <el-tag size="small">BO</EL-TAG>
            </el-descriptions-item>
            <el-descriptions-item label="关注:">6</el-descriptions-item>
            <el-descriptions-item label="粉丝:">196627</el-descriptions-item>
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
</template>

<script src="./_videoList.js" lang="js"></script>
<style src="./_videoList.less" lang="less" scoped></style>
