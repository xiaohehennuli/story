<template>
  <div class="timeline-page">
    <vue-timeline-update
      v-for="(line, index) in lines"
      :key="index"
      :date="line.date"
      :title="line.title"
      :description="line.content"
      :thumbnail="line.img"
      :category="line.tag"
      :icon="line.icon"
      :color="line.color"
    />
  </div>
</template>

<script>
export default {
  name: "TimelinePage",
  data() {
    return {
      lines: [
        {
          date: new Date("2023-05-01"),
          title: "第一次旅行青岛(2023-05-01)",
          content: "青岛啤酒是真滴好喝啊！小白送的冰箱贴现在还占据小鸡毛冰箱C位~",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/qingdao.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2023-07-01"),
          title: "带小白吃虾(2023-07-02)",
          content: "虚空吃虾~",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chixia.jpg",
          tag: "日常",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2023-07-02"),
          title: "感谢小白的沙雕横幅(2023-07-02)",
          content: "哈哈哈小白真是太抽象了~",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/tiche.jpg",
          tag: "日常",
          icon: "code",
          color: "blue",
        },
        {
          date: new Date("2023-08-05"),
          title: "薛之谦演唱会(2023-08-05)",
          content: "来帮小白圆梦啦~至今看过最好看的演唱会~（可惜照片在小白手机里）",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/line_bg.jpg",
          tag: "演唱会",
          icon: "code",
          color: "red",
        },
        {
          date: new Date("2023-08-06"),
          title: "第一次漂流(2023-08-06)",
          content: "漂流真是太好玩啦~小白是防晒王！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/piaoliu.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2023-09-02"),
          title: "张信哲演唱会(2023-09-02)",
          content: "痛！太痛了！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/zhangxinzhe.jpg",
          tag: "演唱会",
          icon: "code",
          color: "red",
        },
        {
          date: new Date("2023-09-03"),
          title: "梦开始的一天和汪苏泷演唱会!(2023-09-03)",
          content: "嘿嘿 梦开始的一天！！！永远铭记这一天！！！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wangsulong.jpg",
          tag: "演唱会",
          icon: "code",
          color: "red",
        },
        {
          date: new Date("2023-09-23"),
          title: "襄阳在一起过得第一个生日(2023-09-23)",
          content:
            "小鸡毛和小白一起过的第一个生日哦！希望以后每个生日都有小白1",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/shengri.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2023-10-01"),
          title: "长沙旅行被坑(2023-10-01)",
          content:
            "哈哈哈哈哈小白一身绿骑车真是太好玩啦~就是被可恶的长沙人坑了，敲。",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/changsha.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2023-11-24"),
          title: "荆门之行(2023-11-24)",
          content: "团子好可爱~但是还是没有小白可爱！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/tuanzi.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2024-02-16"),
          title: "小白和小鸡毛的第一次滑雪！(2024-02-16)",
          content:
            "滑雪真好玩，小白的屁股摔碎了嘻嘻，小鸡毛就不一样根本没摔过！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/huaxue.jpg",
          tag: "旅游",
          icon: "code",
          color: "turquoise",
        },
        {
          date: new Date("2024-03-08"),
          title: "第一次云顶打上大师！(2024-03-08)",
          content: "懂不懂荆门和武汉双棋王的含金量啊！！！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/chaofandashi.jpg",
          tag: "成就",
          icon: "code",
          color: "blue",
        },
        {
          date: new Date("2024-04-01"),
          title: "第一次同居做了好吃的饭！(2024-03-08)",
          content: "小白做饭真滴好吃ლ(´ڡ`ლ)！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/zuofan.jpg",
          tag: "日常",
          icon: "code",
          color: "blue",
        },
        {
          date: new Date("2024-04-13"),
          title: "许嵩演唱会！(2024-04-13)",
          content: "呜呜呜和小白一起回忆青春！",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xusong.jpg",
          tag: "演唱会",
          icon: "code",
          color: "red",
        },
        {
          date: new Date("2024-04-23"),
          title: "获得小狗奖牌！(2024-04-23)",
          content: "非常有纪念意义！而且非常好看~",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/xiaogou.jpg",
          tag: "成就",
          icon: "code",
          color: "blue",
        },
        {
          date: new Date("2024-05-01"),
          title: "五一五一！(2024-04-23)",
          content: "看了可爱的柴犬和阿丽亚！吃了好多好吃的！拍了好看的合照~",
          img: "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/wuyi.jpg",
          tag: "日常",
          icon: "code",
          color: "blue",
        },
        {
          date: 'now',
          title: "小白和小鸡毛的故事还在继续！敬请期待！",
          tag: "故事",
          icon: "code",
          color: "blue",
        },
      ],
    };
  },
};
</script>

<style>
.timeline-page {
  background-color: #1b2431;
  width: 100vw;
  padding-top: 100px;
  img {
    max-width: 500px;
    height: 500px;
  }
}
</style>
