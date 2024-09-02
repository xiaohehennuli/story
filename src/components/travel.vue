<template>
  <div>
    <div class="tencent-map-container">
      <div ref="mapContainer" class="map-container"></div>
    </div>
    <div class="travel-container">
      <!-- 封面 -->
      <div class="travel-header my-animation-slide-top">
        <!-- 背景图片 -->
        <video
          class="index-video"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          :src="
            $store.state.sysConfig['webStaticResourcePrefix'] +
            'assets/backgroundVideo.mp4'
          "
        ></video>
        <div style="position: absolute; left: 20px; top: 20px">
          <!-- 标题 -->
          <div style="margin: 10px">
            <div
              style="
                font-size: 14px;
                font-weight: bold;
                line-height: 1.5;
                margin-top: 20px;
              "
            >
              旅拍集
            </div>
            <div
              style="
                font-size: 24px;
                font-weight: bold;
                line-height: 1.5;
                margin-top: 20px;
              "
            >
              这里是小鸡毛和小白的旅拍哦~
            </div>
          </div>
        </div>
        <div
          style="
            position: absolute;
            left: 20px;
            bottom: 40px;
            margin: 10px;
            font-size: 1.5rem;
          "
        >
          每一张照片都是一次美好的记忆~
        </div>
      </div>

      <div class="travel-content my-animation-slide-bottom">
        <!-- 标签 -->
        <div class="photo-title-warp" v-if="!$common.isEmpty(photoTitleList)">
          <div
            v-for="(item, index) in photoTitleList"
            :key="index"
            :class="{ isActive: photoPagination.classify === item.classify }"
            @click="changePhotoTitle(item.classify)"
          >
            <proTag
              :info="item.classify + ' ' + item.count"
              :color="
                $constant.before_color_list[Math.floor(Math.random() * 6)]
              "
              style="margin: 12px"
            >
            </proTag>
          </div>
        </div>

        <div class="photo-title">
          {{ photoPagination.classify }}
        </div>

        <photo :resourcePathList="photoList"></photo>
        <div class="pagination-wrap">
          <div
            @click="pagePhotos()"
            class="pagination"
            v-if="photoPagination.total !== photoList.length"
          >
            下一页
          </div>
          <div v-else style="user-select: none">~~还有很多事情要做呢~~</div>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div style="background: var(--favoriteBg)">
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
const myFooter = () => import("./common/myFooter");
const photo = () => import("./common/photo");
const proTag = () => import("./common/proTag");

const PHONE_LIST = [
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang1.jpg",
    title: "小鸡毛穿的像老头，小白的拖孩可爱",
    createTime: "2023-08-06",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang2.jpg",
    title: "荆门防晒王",
    createTime: "2023-08-06",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang3.jpg",
    title: "武汉防晒王",
    createTime: "2023-08-06",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang4.jpg",
    title: "两个憨憨",
    createTime: "2024-02-16",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang5.jpg",
    title: "朝鲜飞行员准备就绪！",
    createTime: "2024-02-16",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang6.jpg",
    title: "小白的鞋子像卡布达",
    createTime: "2024-02-16",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/yichang7.jpg",
    title: "好帅的小白😍",
    createTime: "2024-02-16",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/huaxue.jpg",
    title: "两个大脑壳",
    createTime: "2024-02-16",
    tag: "宜昌",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan1.jpg",
    title: "嘻嘻嘻好看的合照",
    createTime: "2024-05-04",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan2.jpg",
    title: "嘻嘻两个格格",
    createTime: "2023-09-01",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan3.jpg",
    title: "小白做的卤猪蹄一绝啊！",
    createTime: "2024-04-05",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan4.jpg",
    title: "火锅火锅！",
    createTime: "2024-04-04",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan5.jpg",
    title: "小白下厨之麻辣香锅！",
    createTime: "2024-04-06",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan6.pic.jpg",
    title: "C位永远是小白送的第一个冰箱贴",
    createTime: "2024-04-08",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan7.jpg",
    title: "这家砂锅真滴好吃！下次小白来武汉还要吃",
    createTime: "2024-05-03",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan8.jpg",
    title: "阿丽亚好可爱，但是还是没有小白可爱",
    createTime: "2024-05-03",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan9.jpg",
    title: "被迫营业的阿柴~",
    createTime: "2024-05-03",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/whuhan10.jpg",
    title: "为小白拿下520奖牌~",
    createTime: "2024-04-23",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuhan11.jpg",
    title: "这家韩餐真不错下次还来，可惜有个颠婆影响食欲",
    createTime: "2024-05-02",
    tag: "武汉",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsha.jpg",
    title: "小白骑车记~",
    createTime: "2024-10-03",
    tag: "长沙",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsha2.jpg",
    title: "小白差点摔咯~",
    createTime: "2024-10-03",
    tag: "长沙",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsha3.jpg",
    title: "高冷小白在线骑车🚴🏻",
    createTime: "2024-10-03",
    tag: "长沙",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsh4.jpg",
    title: "小鸡毛的品味是真滴不错！",
    createTime: "2024-10-01",
    tag: "长沙",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsha5.jpg",
    title: "送给小白的礼物~",
    createTime: "2024-10-01",
    tag: "长沙",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang1.jpg",
    title: "小白准备的惊喜~😋",
    createTime: "2024-09-23",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang2.pic.jpg",
    title: "老头版小鸡毛！",
    createTime: "2024-09-23",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang3.pic.jpg",
    title: "像个傻子哈哈哈哈哈",
    createTime: "2024-09-23",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang4.pic.jpg",
    title: "爱不释手啊~",
    createTime: "2024-09-23",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang5.pic.jpg",
    title: "拉手手",
    createTime: "2024-09-23",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiangyang6.pic.jpg",
    title: "要系好安全带哦~",
    createTime: "2024-09-24",
    tag: "襄阳",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/jingmen1.jpg",
    title: "把小白搞生气了~还好我有绝招",
    createTime: "2023-12-24",
    tag: "荆门",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/jingmen2.jpg",
    title: "红警红警！",
    createTime: "2024-03-31",
    tag: "荆门",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/tuanzi.jpg",
    title: "可爱的团子！",
    createTime: "2023-11-24",
    tag: "荆门",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/qingdao1.jpg",
    title: "帅气的小鸡毛☺️",
    createTime: "2023-05-03",
    tag: "青岛",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/qingdao2.jpg",
    title: "漂亮的小白☺️",
    createTime: "2023-05-05",
    tag: "青岛",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/qingdao3.jpg",
    title: "甜美的小白☺️",
    createTime: "2023-05-03",
    tag: "青岛",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing1.jpg",
    title: "年度最佳照片！！！！",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing2.jpg",
    title: "回眸一笑百媚生~~~~",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing3.jpg",
    title: "这张小白好酷！好有氛围感！",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing4.jpg",
    title: "提着灯笼烫小白的手！嘿嘿",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing5.jpg",
    title: "帅鸡毛！",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing6.jpg",
    title: "哈啤酒哈啤酒！！！",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing8.jpg",
    title: "没见过这种商场~我的评价是不如荆门万达！",
    createTime: "2023-05-03",
    tag: "重庆",
  },
  {
    cover:
      "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chongqing7.jpg",
    title: "小白羞羞！坐飞机怕怕~",
    createTime: "2023-05-03",
    tag: "重庆",
  },
];

export default {
  components: {
    photo,
    proTag,
    myFooter,
  },

  data() {
    return {
      photoPagination: {
        current: 1,
        size: 10,
        total: 0,
        resourceType: "lovePhoto",
        classify: "111",
      },
      photoTitleList: [],
      photoList: [],
    };
  },

  computed: {},

  watch: {},

  created() {
    this.getPhotoTitles();
  },

  mounted() {
    this.initMap();
  },

  methods: {
    getPhotoTitles() {
      this.photoTitleList = [
        {
          classify: "宜昌",
          count: 8,
        },
        {
          classify: "长沙",
          count: 5,
        },
        {
          classify: "青岛",
          count: 3,
        },
        {
          classify: "武汉",
          count: 11,
        },
        {
          classify: "襄阳",
          count: 6,
        },
        {
          classify: "荆门",
          count: 3,
        },
        {
          classify: "重庆",
          count: 7,
        },
      ];
      this.photoPagination = {
        current: 1,
        size: 10,
        total: 0,
        resourceType: "lovePhoto",
        classify: this.photoTitleList[0].classify,
      };
      this.changePhoto(this.photoTitleList[0].classify);
    },
    changePhotoTitle(classify) {
      if (classify !== this.photoPagination.classify) {
        this.photoPagination = {
          current: 1,
          size: 10,
          total: 0,
          resourceType: "lovePhoto",
          classify: classify,
        };
        this.photoList = [];
        setTimeout(() => {
          this.changePhoto(classify);
        })
      }
    },

    pagePhotos() {
      this.photoPagination.current = this.photoPagination.current + 1;
      this.changePhoto();
    },

    changePhoto(classify) {
      this.photoList = PHONE_LIST.filter((item) => item.tag === classify);
      console.log("this.photoList", this.photoList);
    },
    initMap() {
      const markerIcon = new qq.maps.MarkerImage(
        "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/mark.gif",
        new qq.maps.Size(32, 32), // 图标尺寸，根据实际图标尺寸调整
        new qq.maps.Point(0, 0), // 图标偏移量，根据实际图标设计调整
        new qq.maps.Point(16, 32) // 锚点位置，根据实际图标设计调整
      );

      const map = new qq.maps.Map(this.$refs.mapContainer, {
        center: new qq.maps.LatLng(30.6919, 111.2865), // 设置地图中心点坐标
        zoom: 5, // 设置地图缩放级别
        mapStyleId: "style1",
        zoomControl: false,
        panControl: false,
      });

      const highlightPlaces = [
        {
          name: "宜昌",
          location: new qq.maps.LatLng(30.6919, 111.2865),
          title: "漂流！滑雪！薛之谦！宜昌真是太棒啦~",
        },
        {
          name: "长沙",
          location: new qq.maps.LatLng(28.2282, 112.9388),
          title: "被坑啦~",
        },
        {
          name: "武汉",
          location: new qq.maps.LatLng(30.5928, 114.3055),
          title: "小鸡毛的打工挣钱的地方~可以带小白吃好吃的！",
        },
        {
          name: "襄阳",
          location: new qq.maps.LatLng(32.0085, 112.1226),
          title: "第一次一起过生日！。",
        },
        {
          name: "荆门",
          location: new qq.maps.LatLng(31.0359, 112.1991),
          title: "小白的故乡~郭场鸡真是8错,还有好吃的锅包肉！",
        },
        {
          name: "青岛",
          location: new qq.maps.LatLng(36.0671, 120.3826),
          title: "小白和小鸡毛的第一次旅游！青岛啤酒得劲！",
        },
        {
          name: "重庆",
          location: new qq.maps.LatLng(29.568242,106.557287),
          title: "好热好热！！！！！！真变成了两条狗啦~",
        },
        {
          name: "郑州",
          location: new qq.maps.LatLng(34.756871, 113.649402),
          title: "嘿嘿梦开始的地方！",
        },
      ];

      highlightPlaces.forEach((place) => {
        const marker = new qq.maps.Marker({
          position: place.location,
          map,
          icon: markerIcon,
          label: {
            fontSize: "24px",
            fontWeight: "bold",
          },
        });

        const infoWindow = new qq.maps.InfoWindow({
          map,
        });

        qq.maps.event.addListener(marker, "click", function () {
          infoWindow.open();
          infoWindow.setContent(`
            <div style="font-size: 16px; font-weight: bold;">
              ${place.title}
            </div>`);
          infoWindow.setPosition(marker.getPosition());
        });
      });
    },
  },
};
</script>

<style scoped>
.travel-container {
  padding: 25px;
  background: var(--favoriteBg);
}
.tencent-map-container {
  width: 100%;
  height: 600px; /* 调整地图容器高度根据需要 */
}

.map-container {
  width: 100%;
  height: 100%;
}

.travel-header {
  margin: 60px auto 30px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  max-width: 1200px;
  color: var(--white);
  user-select: none;
}

.index-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--lightGreen);
}

.travel-content {
  margin: 0 auto;
  max-width: 1200px;
}

.photo-title-warp {
  max-width: 1150px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
}

.isActive {
  animation: scale 2.5s ease-in-out infinite;
}

.photo-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 2px;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.pagination {
  padding: 13px 15px;
  display: none;
  border: 1px solid var(--lightGray);
  border-radius: 3rem;
  color: var(--greyFont);
  width: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

@media screen and (max-width: 1150px) {
  .photo-title-warp {
    max-width: 780px;
  }
}
</style>
