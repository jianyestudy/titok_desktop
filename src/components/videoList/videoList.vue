<template>
  <el-divider></el-divider>
  <div class="videoList">
    <div class="user-list">
      <div>
        <el-descriptions
            class="margin-top"
            :title="r.userinfo.uniqueId + '  查询结果：'"
            :column="6"
        >
          <template #extra>
            <el-button type="primary" disabled>更多</el-button>
          </template>

          <el-descriptions-item label="用户名:">{{ r.userinfo.uniqueId }}</el-descriptions-item>
          <el-descriptions-item label="昵称:">{{ r.userinfo.nickname }}</el-descriptions-item>
          <el-descriptions-item label="简介:">{{ r.userinfo.bio }}</el-descriptions-item>
          <el-descriptions-item label="国家:">
            <el-tag size="small">{{ r.userinfo.region }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item label="关注:">
            <el-tag size="small">{{ r.userinfo.followingCount }}</el-tag>
          </el-descriptions-item>

          <el-descriptions-item label="粉丝:">
            <el-tag size="small">{{ r.userinfo.followerCount }}</el-tag>
          </el-descriptions-item>

        </el-descriptions>

      </div>
      <div class="user-video-list">
        <el-row>
          <el-col
              v-for="v in r.videos"
              :span="4"
              style="margin-right: 20px;margin-top: 20px"

          >
            <a :href="v.playAddr" target="_blank" style="text-decoration:none">
              <el-card :body-style="{ padding: '0px'}" class="card-class">
                <div style="height:300px">
                  <img
                      :src=v.cover
                      style="max-width:250px;z-index:100"
                      alt="封面"/>
                </div>
                <div
                    style="text-align:center;width:250px;position: absolute;height:50px;line-height:50px;background-color:#c2c2c2cc">
                  <span>播:

                    <span v-if="isNaN(convertMath(v.playCount))" style="color:red;font-size:20px">
                    {{ convertMath(v.playCount) }}
                  </span>  <span v-else style="font-size:20px"> {{ convertMath(v.playCount) }}</span> </span>

                  <span>赞:
                    <span v-if="isNaN(convertMath(v.diggCount))" style="color:red;font-size:20px">
                    {{ convertMath(v.diggCount) }}
                  </span>   <span v-else style="font-size:20px">  {{ convertMath(v.diggCount) }} </span></span>

                  <span>评:
                    <span v-if="isNaN(convertMath(v.commentCount))" style="color:red;font-size:20px">
                    {{ convertMath(v.commentCount) }}
                  </span> <span v-else style="font-size:20px"> {{ convertMath(v.commentCount) }} </span> </span>
                </div>

              </el-card>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    r: {
      type: Object,
      required: true
    }
  },
  computed: {
    convertMath(){
      return function (String) {
        String = String.toString();
        if (String.length <= 3) {
          return String
        }

        if (String.length <= 6) {
          return Math.floor(String /1000 * 100) / 100 + "k"
        }

        if (String.length <= 9) {
          return Math.floor(String / 1000 /1000 * 100) / 100 + "m"
        }
      }
    }
  }
}
</script>
<style src="./_videoList.less" lang="less" scoped></style>
