<template>
  <div class="recent-post-container">
    <div class="article-first">
      <svg
        viewBox="0 0 1024 1024"
        width="20"
        height="20"
        style="vertical-align: -2px"
      >
        <path
          d="M224.2 472.3c-13-5.7-3.7-23.5 8.2-19 91 34 146.8 108.7 182.4 138.5 5.6 4.7 14 2.9 17.3-3.5 16.8-32 45.8-113.7-57.1-168.6-87.3-46.5-188-53.6-247.3-82.2-14.5-7-31.1 4.6-29.9 20.7 5 69.7 28.9 124.7 62.3 181.5 67.3 114.3 140.6 132.9 216.6 104 2.2-0.9 4.5-1.8 7-3 7-3.4 8.3-12.9 2.5-18.1 0.1 0-45.7-69.3-162-150.3z"
          fill="#FFD401"
        ></path>
        <path
          d="M282.7 849.9c79.5-137 172.4-263.1 385.4-401.3 9.8-6.4 2.1-21.5-8.9-17.4C497.7 492.8 429.7 585 373.3 640.8c-8.7 8.7-23.4 6.3-29.1-4.6-27.2-51.8-69.5-174.1 97.3-263.1 147.7-78.8 319.9-91.4 429.7-93.3 18.9-0.3 31.5 19.4 23.3 36.4C863.7 380 842.6 478 789.9 567.6 680.8 753.1 545.5 766.7 422.2 719.8c-8.8-3.4-18.8-0.2-24 7.7-16.6 25.2-50.3 80.1-58.7 122.4-11.4 56.8-82.2 43.9-56.8 0z"
          fill="#8BC03C"
        ></path>
        <path
          d="M375 419.6c-30.1 28.2-45.8 57.7-52.4 86.1 40.6 32.4 70.2 67.7 92.1 85.9 1.2 1 2.5 1.6 3.9 2.1 6.5-6.7 13.3-13.7 20.4-20.7 15.2-37.9 25.3-105.7-64-153.4zM318.8 548.2c1.6 36.1 14.7 67.6 25.5 88.1 5.7 10.9 20.3 13.3 29.1 4.6 4.9-4.9 10-10 15.1-15.4-0.6-1-1.3-2-2.2-2.8 0-0.1-20.1-30.5-67.5-74.5z"
          fill="#8BA000"
        ></path>
      </svg>
      小狗日记
    </div>
    <div
      class="recent-post-item shadow-box background-opacity"
      v-for="(article, index) in articleList"
      :key="index"
    >
      <!-- 封面 -->
      <div
        class="recent-post-item-image"
        :class="{ leftImage: index % 2 !== 0, rightImage: index % 2 === 0 }"
      >
        <div class="image-container">
          <el-image
            class="my-el-image"
            v-once
            lazy
            :src="article.articleCover"
            fit="cover"
          >
            <div
              slot="error"
              class="image-slot myCenter"
              style="background-color: var(--lightGreen)"
            >
              <div class="error-text">
                <div>遇事不决，可问春风</div>
              </div>
            </div>
          </el-image>
          <div class="transformCenter hasVideo" v-if="article.hasVideo">
            <svg viewBox="0 0 1024 1024" width="60" height="60">
              <path
                d="M514 114.3c-219.9 0-398.9 178.9-398.9 398.9 0.1 219.9 179 398.8 398.9 398.8 219.9 0 398.8-178.9 398.8-398.8S733.9 114.3 514 114.3z m173 421.9L437.1 680.5c-17.7 10.2-39.8-2.6-39.8-23V368.9c0-20.4 22.1-33.2 39.8-23L687 490.2c17.7 10.2 17.7 35.8 0 46z"
                fill="#0C0C0C"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div
        class="recent-post-item-post"
        :class="{ leftImage: index % 2 === 0, rightImage: index % 2 !== 0 }"
      >
        <!-- 时间 -->
        <div class="post-meta">
          <svg
            viewBox="0 0 1024 1024"
            width="14"
            height="14"
            style="vertical-align: -2px"
          >
            <path
              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
              fill="#409EFF"
            ></path>
            <path
              d="M654.222222 256c-17.066667 0-28.444444 11.377778-28.444444 28.444444v56.888889c0 17.066667 11.377778 28.444444 28.444444 28.444445s28.444444-11.377778 28.444445-28.444445v-56.888889c0-17.066667-11.377778-28.444444-28.444445-28.444444zM369.777778 256c-17.066667 0-28.444444 11.377778-28.444445 28.444444v56.888889c0 17.066667 11.377778 28.444444 28.444445 28.444445s28.444444-11.377778 28.444444-28.444445v-56.888889c0-17.066667-11.377778-28.444444-28.444444-28.444444z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M725.333333 312.888889H711.111111v28.444444c0 31.288889-25.6 56.888889-56.888889 56.888889s-56.888889-25.6-56.888889-56.888889v-28.444444h-170.666666v28.444444c0 31.288889-25.6 56.888889-56.888889 56.888889s-56.888889-25.6-56.888889-56.888889v-28.444444h-14.222222c-22.755556 0-42.666667 19.911111-42.666667 42.666667v341.333333c0 22.755556 19.911111 42.666667 42.666667 42.666667h426.666666c22.755556 0 42.666667-19.911111 42.666667-42.666667v-341.333333c0-22.755556-19.911111-42.666667-42.666667-42.666667zM426.666667 654.222222h-56.888889c-17.066667 0-28.444444-11.377778-28.444445-28.444444s11.377778-28.444444 28.444445-28.444445h56.888889c17.066667 0 28.444444 11.377778 28.444444 28.444445s-11.377778 28.444444-28.444444 28.444444z m227.555555 0h-56.888889c-17.066667 0-28.444444-11.377778-28.444444-28.444444s11.377778-28.444444 28.444444-28.444445h56.888889c17.066667 0 28.444444 11.377778 28.444445 28.444445s-11.377778 28.444444-28.444445 28.444444z m0-113.777778h-56.888889c-17.066667 0-28.444444-11.377778-28.444444-28.444444s11.377778-28.444444 28.444444-28.444444h56.888889c17.066667 0 28.444444 11.377778 28.444445 28.444444s-11.377778 28.444444-28.444445 28.444444z"
              fill="#FFFFFF"
            ></path>
          </svg>
          发布于 {{ article.createTime }}
        </div>
        <!-- 标题 -->

        <el-tooltip placement="top" effect="light">
          <div slot="content">{{ article.articleTitle }}</div>
          <h3>{{ article.articleTitle }}</h3>
        </el-tooltip>

        <!-- 内容 -->
        <div class="recent-post-desc">
          {{ article.articleContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data(){
    return {
      articleList: [
        {
          articleCover: "https://www.bing.com/th/id/OIP.PRADmIq6xBky7Vynsl6hrgHaHL?w=210&h=204&c=7&r=0&o=5&pid=1.7",
          articleTitle: "标题",
          createTime: "2020202 : 11",
          articleContent:'嘿嘿嘿'
        },
        {
          articleCover: "https://www.bing.com/th/id/OIP.PRADmIq6xBky7Vynsl6hrgHaHL?w=210&h=204&c=7&r=0&o=5&pid=1.7",
          articleTitle: "标题",
          createTime: "2020202 : 11",
          articleContent:'嘿嘿嘿'
        },
        {
          articleCover: "https://www.bing.com/th/id/OIP.PRADmIq6xBky7Vynsl6hrgHaHL?w=210&h=204&c=7&r=0&o=5&pid=1.7",
          articleTitle: "标题",
          createTime: "2020202 : 11",
          articleContent:'嘿嘿嘿'
        },
      ],
    };
  },
  methods: {},
  mounted() {

  },
};
</script>

<style scoped>
.article-first {
  color: var(--greyFont);
  border-bottom: 1px dashed var(--lightGray);
  padding-bottom: 5px;
  margin-bottom: 50px;
}

.recent-post-container {
  margin: auto;
}

.recent-post-container .recent-post-item:not(:last-child) {
  margin-bottom: 40px;
}

.recent-post-item {
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: row;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  animation: hideToShow 1s ease-in-out;
}

.recent-post-item-image {
  width: 50%;
  height: 100%;
}

.recent-post-item-image >>> .el-image__inner {
  transition: all 1s;
}

.recent-post-item-image >>> .el-image__inner:hover {
  transform: scale(1.2);
}

.leftImage {
  position: absolute;
  left: 0;
}

.rightImage {
  position: absolute;
  right: 0;
  text-align: right;
}

.recent-post-item-post {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 35px;
}

.recent-post-item-post h3 {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.post-meta {
  font-size: 12px;
  color: var(--greyFont);
}

.post-meta span:not(:last-child) {
  margin-right: 10px;
}

.recent-post-desc {
  font-size: 15px;
  line-height: 1.7;
  /* 超出4行就... */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.leftImage .sort-label {
  position: absolute;
  bottom: 20px;
}

.rightImage .sort-label {
  position: absolute;
  bottom: 20px;
  right: 35px;
}

.sort-label span {
  padding: 3px 10px;
  background-color: var(--maxLightGray);
  border-radius: 3px;
  font-size: 14px;
  color: var(--greyFont);
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;
}

.sort-label span:hover {
  background-color: var(--themeBackground);
  color: var(--white);
}

.error-text {
  font-size: 20px;
  line-height: 1.8;
  letter-spacing: 8px;
  color: var(--white);
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.hasVideo {
  padding: 0 20px;
  background: var(--maxMaxWhiteMask);
  border-radius: 15px;
}

@media screen and (max-width: 700px) {
  .recent-post-item {
    height: 450px;
    position: unset;
    display: block;
    flex-direction: unset;
  }

  .recent-post-item-image {
    width: 100%;
    height: 200px;
  }

  .leftImage {
    position: unset;
    left: unset;
  }

  .rightImage {
    position: unset;
    right: unset;
    text-align: unset;
  }

  .recent-post-item-post {
    width: 100%;
    height: 250px;
    position: relative;
  }

  .recent-post-desc {
    -webkit-line-clamp: 3;
  }

  .leftImage .sort-label {
    position: absolute;
    bottom: 20px;
  }

  .rightImage .sort-label {
    position: absolute;
    bottom: 20px;
    right: unset;
  }
}
</style>
